import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/blur";

describe("blur", () => {
  describe("test", () => {
    it("should return true if blur option is defined", () => {
      expect(test({ blur: 1 })).toEqual(true);
    });
    it("should return false if blur option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if bl option is defined", () => {
      expect(test({ bl: 1 })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if blur option is undefined", () => {
      expect(() => build({})).toThrow("blur option is undefined");
    });

    it("should throw an error if blur is not a number", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(() => build({ blur: "1" })).toThrow("blur option is not a number");
    });

    it("should throw an error if blur is less than 0", () => {
      expect(() => build({ bl: -1 })).toThrow(
        "blur option value can't be less than 0"
      );
    });

    it("should return value of blur if blur option is defined", () => {
      expect(build({ blur: 100 })).toEqual("bl:100");
    });

    it("should return value of blur if bl option is defined", () => {
      expect(build({ bl: 15 })).toEqual("bl:15");
    });

    it("should return value of blur if bl option is 0", () => {
      expect(build({ bl: 0 })).toEqual("bl:0");
      expect(build({ blur: 0 })).toEqual("bl:0");
    });
  });
});
