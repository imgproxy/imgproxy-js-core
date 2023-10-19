import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/minWidth";

describe("min_width", () => {
  describe("test", () => {
    it("should return true if min_min_width option is defined", () => {
      expect(test({ min_width: 150 })).toEqual(true);
    });

    it("should return true if mw option is defined", () => {
      expect(test({ mw: 500 })).toEqual(true);
    });

    it("should return false if min_width option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if min_width option is undefined", () => {
      expect(() => build({})).toThrow("min_width option is undefined");
    });

    it("should throw an error if min_width is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ min_width: "150" })).toThrow(
        "min_width option is not a number"
      );
    });

    it("should throw an error if min_width is less than 0", () => {
      expect(() => build({ min_width: -1 })).toThrow(
        "min_width option is can't be less than 0"
      );
    });

    it("should return mw:150 if min_width option is 150", () => {
      expect(build({ min_width: 150 })).toEqual("mw:150");
    });

    it("should return mw:500 if mw option is 500", () => {
      expect(build({ mw: 500 })).toEqual("mw:500");
    });
  });
});
