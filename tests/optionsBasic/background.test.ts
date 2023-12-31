import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/background";

describe("background", () => {
  describe("test", () => {
    it("should return true if background option is defined", () => {
      expect(test({ background: "fff" })).toEqual(true);
    });

    it("should return true if bg option is defined", () => {
      expect(test({ bg: "fff" })).toEqual(true);
    });

    it("should return false if background option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if background option is undefined", () => {
      expect(() => build({})).toThrow("background option is undefined");
    });

    it("should throw an error if background is not a string", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ background: 150 })).toThrow(
        "background option is not a string or object"
      );
    });

    it("should throw an error if background is not hexadecimal", () => {
      expect(() => build({ background: "#ff00f" })).toThrow(
        "background option must be hexadecimal"
      );
    });

    it("should throw an error if background is not 3, 6 or 8 characters", () => {
      expect(() => build({ background: "fff0" })).toThrow(
        "background option must be 3, 6 or 8 characters long (with alpha)"
      );
    });

    it("should return an error if one of parameters (r,g,b) is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ background: { r: 255, g: 255 } })).toThrow(
        "background.b is undefined"
      );
    });

    it("shold return an error if b parameter is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ background: { r: 255, g: 255, b: "255" } })).toThrow(
        "background.b is not a number"
      );
    });

    it("shold return an error if g parameter is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ background: { r: 255, g: "255", b: 255 } })).toThrow(
        "background.g is not a number"
      );
    });

    it("shold return an error if r parameter is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ background: { r: "255", g: 255, b: 255 } })).toThrow(
        "background.r is not a number"
      );
    });

    it("should return bg:fff if background option is fff", () => {
      expect(build({ background: "fff" })).toEqual("bg:fff");
    });

    it("should return bg:ff00ff if bg option is ff00ff", () => {
      expect(build({ bg: "ff00ff" })).toEqual("bg:ff00ff");
    });

    it("should return bg:0:128:0 if bg option is {r: 0, g: 128, b:0}", () => {
      expect(build({ bg: { r: 0, g: 128, b: 0 } })).toEqual("bg:0:128:0");
    });
  });
});
