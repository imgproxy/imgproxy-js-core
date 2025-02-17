import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/minHeight";

describe("min_height", () => {
  describe("test", () => {
    it("should return true if min_height option is defined", () => {
      expect(test({ min_height: 50 })).toEqual(true);
    });

    it("should return true if mh option is defined", () => {
      expect(test({ mh: 90 })).toEqual(true);
    });

    it("should return false if min_min_height option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if min_height option is undefined", () => {
      expect(() => build({})).toThrow("min_height option is undefined");
    });

    it("should throw an error if min_height is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ min_height: "1" })).toThrow(
        "min_height option is not a number"
      );
    });

    it("should throw an error if min_height is less than 0", () => {
      expect(() => build({ min_height: -10 })).toThrow(
        "min_height option value can't be less then 0"
      );
    });

    it("should return mw:80 if min_height option is 80", () => {
      expect(build({ min_height: 80 })).toEqual("mh:80");
    });

    it("should return mh:333 if mh option is 333", () => {
      expect(build({ mh: 333 })).toEqual("mh:333");
    });

    it("should correctly handle 0 value", () => {
      expect(build({ mh: 0 })).toEqual("mh:0");
      expect(build({ min_height: 0 })).toEqual("mh:0");
    });
  });
});
