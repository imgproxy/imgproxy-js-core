import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/palette";

describe("palette", () => {
  describe("test", () => {
    it("should return true if palette option is defined", () => {
      expect(test({ palette: 1 })).toEqual(true);
    });

    it("should return true if palette option is false", () => {
      expect(test({ palette: 0 })).toEqual(true);
    });

    it("should return false if palette option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if palette option is defined", () => {
      expect(test({ palette: 10 })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if palette option is undefined", () => {
      expect(() => build({})).toThrow("palette option is undefined");
    });

    it("should throw an error if palette option is 1", () => {
      expect(() => build({ palette: 1 })).toThrow(
        "palette option is should be 0 or between 2 and 256"
      );
    });

    it("should throw an error if palette option is -2", () => {
      expect(() => build({ palette: -2 })).toThrow(
        "palette option value can't be less then 0"
      );
    });

    it("should throw an error if palette option is 1.5", () => {
      expect(() => build({ palette: 3.5 })).toThrow(
        "palette option is must be an integer"
      );
    });

    it("should throw an error if palette option is string", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ palette: "string" })).toThrow(
        "palette option is not a number"
      );
    });

    it("should throw an error if palette option is more than 256", () => {
      expect(() => build({ palette: 257 })).toThrow(
        "palette option value can't be more than 256"
      );
    });

    it("should return p:10 if palette option is 10", () => {
      expect(build({ palette: 10 })).toEqual("p:10");
    });

    it("should return p:25 if p option is 25", () => {
      expect(build({ p: 25 })).toEqual("p:25");
    });
  });
});
