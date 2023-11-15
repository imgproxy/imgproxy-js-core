import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/contrast";

describe("contrast", () => {
  describe("test", () => {
    it("should return true if contrast option is defined", () => {
      expect(test({ contrast: 150 })).toEqual(true);
    });

    it("should return true if co option is defined", () => {
      expect(test({ co: 500 })).toEqual(true);
    });

    it("should return false if contrast option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if contrast option is undefined", () => {
      expect(() => build({})).toThrow("contrast option is undefined");
    });

    it("should throw an error if contrast is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ contrast: "150" })).toThrow(
        "contrast option is not a number"
      );
    });

    it("should throw an error if contrast is less than 0", () => {
      expect(() => build({ contrast: -1 })).toThrow(
        "contrast option value can't be less then 0"
      );
    });

    it("should return co:150 if contrast option is 150", () => {
      expect(build({ contrast: 150 })).toEqual("co:150");
    });
  });
});
