import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/backgroundAlpha";

describe("backgroundAlpha", () => {
  describe("test", () => {
    it("should return true if background alpha option is defined", () => {
      expect(test({ background_alpha: 0.5 })).toEqual(true);
    });
    it("should return false if background alpha option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if bga option is defined", () => {
      expect(test({ bga: 0.5 })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if background alpha option is undefined", () => {
      expect(() => build({})).toThrow("background_alpha option is undefined");
    });

    it("should throw an error if background alpha bigger than 1", () => {
      expect(() => build({ background_alpha: 1.5 })).toThrow(
        "background_alpha option value can't be more than 1"
      );
    });

    it("should throw an error if background alpha less than 0", () => {
      expect(() => build({ background_alpha: -0.5 })).toThrow(
        "background_alpha option value can't be less than 0"
      );
    });

    it("should throw an error if background alpha is not a number", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(() => build({ background_alpha: "0.5" })).toThrow(
        "background_alpha option is not a number"
      );
    });

    it("should return value of background alpha if background_alpha option is defined", () => {
      expect(build({ background_alpha: 0.5 })).toEqual("background_alpha:0.5");
    });

    it("should return value of background alpha if bga option is defined", () => {
      expect(build({ bga: 0.5 })).toEqual("background_alpha:0.5");
    });

    it("should return value of background alpha if bga option is 0", () => {
      expect(build({ bga: 0 })).toEqual("background_alpha:0");
      expect(build({ background_alpha: 0 })).toEqual("background_alpha:0");
    });
  });
});
