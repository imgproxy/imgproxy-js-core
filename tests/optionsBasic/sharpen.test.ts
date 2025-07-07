import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/sharpen";

describe("sharpen", () => {
  describe("test", () => {
    it("should return true if sharpen option is defined", () => {
      expect(test({ sharpen: 0.5 })).toEqual(true);
    });

    it("should return true if sh option is defined", () => {
      expect(test({ sh: 1 })).toEqual(true);
    });

    it("should return false if sharpen option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if sharpen option is undefined", () => {
      expect(() => build({})).toThrow("sharpen option is undefined");
    });

    it("should throw an error if sharpen is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ sharpen: "150" })).toThrow(
        "sharpen option is not a number"
      );
    });

    it("should throw an error if sharpen is less than 0", () => {
      expect(() => build({ sharpen: -1 })).toThrow(
        "sharpen option value can't be less than 0"
      );
    });

    it("should return sh:0.5 if sharpen option is 0.5", () => {
      expect(build({ sharpen: 0.5 })).toEqual("sh:0.5");
    });

    it("should correctly handle 0 value", () => {
      expect(build({ sharpen: 0 })).toEqual("sh:0");
      expect(build({ sh: 0 })).toEqual("sh:0");
    });
  });
});
