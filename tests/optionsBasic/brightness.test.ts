import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/brightness";

describe("brightness", () => {
  describe("test", () => {
    it("should return true if brightness option is defined", () => {
      expect(test({ brightness: 255 })).toEqual(true);
    });
    it("should return false if brightness option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if br option is defined", () => {
      expect(test({ br: -150 })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if brightness option is undefined", () => {
      expect(() => build({})).toThrow("brightness option is undefined");
    });

    it("should throw an error if brightness is not a number", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(() => build({ brightness: "255" })).toThrow(
        "brightness option is not a number"
      );
    });

    it("should throw an error if brightness is bigger than 255", () => {
      expect(() => build({ brightness: 340 })).toThrow(
        "brightness is not correct. Set the value between -255 and 255"
      );
    });

    it("should throw an error if brightness is less than -255", () => {
      expect(() => build({ brightness: -275 })).toThrow(
        "brightness is not correct. Set the value between -255 and 255"
      );
    });

    it("should return value of brightness if brightness option is defined", () => {
      expect(build({ brightness: 255 })).toEqual("br:255");
    });

    it("should return value of brightness if br option is defined", () => {
      expect(build({ br: -150 })).toEqual("br:-150");
    });
  });
});
