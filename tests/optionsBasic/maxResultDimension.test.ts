import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/maxResultDimension";

describe("maxResultDimension", () => {
  describe("test", () => {
    it("should return true if max_result_dimension option is defined", () => {
      expect(test({ max_result_dimension: 1920 })).toEqual(true);
    });

    it("should return true if mrd option is defined", () => {
      expect(test({ mrd: 2560 })).toEqual(true);
    });

    it("should return false if max_result_dimension option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if max_result_dimension option is undefined", () => {
      expect(() => build({})).toThrow(
        "max_result_dimension option is undefined"
      );
    });

    it("should throw an error if max_result_dimension is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ max_result_dimension: "1920" })).toThrow(
        "max_result_dimension option is not a number"
      );
    });

    it("should throw an error if max_result_dimension is less than 0", () => {
      expect(() => build({ max_result_dimension: -1 })).toThrow(
        "max_result_dimension option value can't be less then 0"
      );
    });

    it("should return mrd:0 if max_result_dimension option is 0", () => {
      expect(build({ max_result_dimension: 0 })).toEqual("mrd:0");
    });

    it("should return mrd:1920 if mrd option is 1920", () => {
      expect(build({ mrd: 1920 })).toEqual("mrd:1920");
    });

    it("should return mrd:2560 if max_result_dimension option is 2560", () => {
      expect(build({ max_result_dimension: 2560 })).toEqual("mrd:2560");
    });

    it("should work with 0", () => {
      expect(build({ max_result_dimension: 0 })).toEqual("mrd:0");
      expect(build({ mrd: 0 })).toEqual("mrd:0");
    });
  });
});
