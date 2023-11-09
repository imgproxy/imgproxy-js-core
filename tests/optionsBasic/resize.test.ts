import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/resize";

describe("resize", () => {
  describe("test", () => {
    it("should return true if resize option is defined", () => {
      expect(test({ resize: { width: 100, height: 100 } })).toEqual(true);
    });

    it("should return true if rs option is defined", () => {
      expect(test({ rs: { width: 100, height: 100 } })).toEqual(true);
    });

    it("should return false if resize option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should return an error if resize option is undefined", () => {
      expect(() => build({})).toThrow("resize option is undefined");
    });

    it("should return an error if resizing_type is incorrect", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ resize: { resizing_type: "fill-up" } })).toThrow(
        "incorrect resizing_type"
      );
    });

    it("should return an error if width is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ resize: { width: "100" } })).toThrow(
        "resize.width is not a number"
      );
    });

    it("should return an error if height is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ resize: { height: "100" } })).toThrow(
        "resize.height is not a number"
      );
    });

    it("should return an error if width is less than 0", () => {
      expect(() => build({ resize: { width: -15 } })).toThrow(
        "resize.width value can't be less then 0"
      );
    });

    it("should return an error if height is less than 0", () => {
      expect(() => build({ resize: { height: -25 } })).toThrow(
        "resize.height value can't be less then 0"
      );
    });

    it("should return rs::100 if only width parameter is defined", () => {
      expect(build({ resize: { width: 100 } })).toEqual("rs::100");
    });

    it("should return rs:::100 if only height parameter is defined", () => {
      expect(build({ rs: { height: 100 } })).toEqual("rs:::100");
    });

    it("should return rs::100:100 if only width and height parameters are defined", () => {
      expect(build({ resize: { width: 100, height: 100 } })).toEqual(
        "rs::100:100"
      );
    });

    it("should return rs:fill_down:::t if resizing_type is 'fill_down' and enlarge is true, other parametres are undefined", () => {
      expect(
        build({ rs: { resizing_type: "fill_down", enlarge: true } })
      ).toEqual("rs:fill_down:::t");
    });

    it("should return rs::::t:t if enlarge and extend are 't'", () => {
      expect(
        build({ resize: { enlarge: "t", extend: { extend: 1 } } })
      ).toEqual("rs::::t:t");
    });

    it("should return rs::500::t:t:we if width is 500, enlarge is 1 and extend is {extend: 1, gravity: {type: 'we'})", () => {
      expect(
        build({
          resize: {
            width: 500,
            enlarge: 1,
            extend: { extend: 1, gravity: { type: "we" } },
          },
        })
      ).toEqual("rs::500::t:t:we");
    });

    it("should return rs:auto::150:f if resizing_type is 'auto', height is 150, enlarge is false and othe parametres are undefined", () => {
      expect(
        build({ rs: { resizing_type: "auto", enlarge: false, height: 150 } })
      ).toEqual("rs:auto::150:f");
    });
  });
});
