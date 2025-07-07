import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/width";

describe("width", () => {
  describe("test", () => {
    it("should return true if width option is defined", () => {
      expect(test({ width: 150 })).toEqual(true);
    });

    it("should return true if w option is defined", () => {
      expect(test({ w: 500 })).toEqual(true);
    });

    it("should return false if width option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if width option is undefined", () => {
      expect(() => build({})).toThrow("width option is undefined");
    });

    it("should throw an error if width is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ width: "150" })).toThrow(
        "width option is not a number"
      );
    });

    it("should throw an error if width is less than 0", () => {
      expect(() => build({ width: -1 })).toThrow(
        "width option value can't be less than 0"
      );
    });

    it("should return w:150 if width option is 150", () => {
      expect(build({ width: 150 })).toEqual("w:150");
    });

    it("should return w:500 if w option is 500", () => {
      expect(build({ w: 500 })).toEqual("w:500");
    });

    it("should correctly handle 0 value", () => {
      expect(build({ w: 0 })).toEqual("w:0");
      expect(build({ width: 0 })).toEqual("w:0");
    });
  });
});
