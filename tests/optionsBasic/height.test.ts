import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/height";

describe("height", () => {
  describe("test", () => {
    it("should return true if height option is defined", () => {
      expect(test({ height: 150 })).toEqual(true);
    });

    it("should return true if w option is defined", () => {
      expect(test({ h: 500 })).toEqual(true);
    });

    it("should return false if height option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if height option is undefined", () => {
      expect(() => build({})).toThrow("height option is undefined");
    });

    it("should throw an error if height is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ h: "150" })).toThrow(
        "height option is not a number"
      );
    });

    it("should throw an error if height is less than 0", () => {
      expect(() => build({ height: -1 })).toThrow(
        "height option is can't be less than 0"
      );
    });

    it("should return h:150 if height option is 150", () => {
      expect(build({ height: 150 })).toEqual("h:150");
    });

    it("should return h:250 if w option is 250", () => {
      expect(build({ h: 250 })).toEqual("h:250");
    });
  });
});
