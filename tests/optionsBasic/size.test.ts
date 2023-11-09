import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/size";

describe("size", () => {
  describe("test", () => {
    it("should return true if size option is defined", () => {
      expect(test({ size: { width: 100, height: 100 } })).toEqual(true);
    });

    it("should return true if s option is defined", () => {
      expect(test({ s: { width: 100, height: 100 } })).toEqual(true);
    });

    it("should return false if size option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should return an error if size option is undefined", () => {
      expect(() => build({})).toThrow("size option is undefined");
    });

    it("should return an error if width is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ size: { width: "100" } })).toThrow(
        "size.width is not a number"
      );
    });

    it("should return an error if height is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ size: { height: "100" } })).toThrow(
        "size.height is not a number"
      );
    });

    it("should return an error if width is less than 0", () => {
      expect(() => build({ size: { width: -15 } })).toThrow(
        "size.width value can't be less then 0"
      );
    });

    it("should return an error if height is less than 0", () => {
      expect(() => build({ size: { height: -25 } })).toThrow(
        "size.height value can't be less then 0"
      );
    });

    it("should return s:100 if only width parameter is defined", () => {
      expect(build({ size: { width: 100 } })).toEqual("s:100");
    });

    it("should return s::100 if only height parameter is defined", () => {
      expect(build({ s: { height: 100 } })).toEqual("s::100");
    });

    it("should return s:100:100 if only width and height parameters are defined", () => {
      expect(build({ size: { width: 100, height: 100 } })).toEqual("s:100:100");
    });

    it("should return s:::t if and enlarge is true, other parametres are undefined", () => {
      expect(build({ s: { enlarge: true } })).toEqual("s:::t");
    });

    it("should return s:::t:t if enlarge and extend are 't'", () => {
      expect(build({ size: { enlarge: "t", extend: { extend: 1 } } })).toEqual(
        "s:::t:t"
      );
    });

    it("should return s:500::t:t:we if width is 500, enlarge is 1 and extend is {extend: 1, gravity: {type: 'we'})", () => {
      expect(
        build({
          size: {
            width: 500,
            enlarge: 1,
            extend: { extend: 1, gravity: { type: "we" } },
          },
        })
      ).toEqual("s:500::t:t:we");
    });

    it("should return s::150:f if height is 150, enlarge is false and other parametres are undefined", () => {
      expect(build({ s: { enlarge: false, height: 150 } })).toEqual("s::150:f");
    });
  });
});
