import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/rotate";

describe("rotate", () => {
  describe("test", () => {
    it("should return true if rotate option is defined", () => {
      expect(test({ rotate: 90 })).toEqual(true);
    });

    it("should return true if rot option is defined", () => {
      expect(test({ rot: 270 })).toEqual(true);
    });

    it("should return false if rotate option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if rotate option is undefined", () => {
      expect(() => build({})).toThrow("rotate option is undefined");
    });

    it("should throw an error if rotate is not in available", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ rotate: 150 })).toThrow(
        "rotate is not correct. You can use values 0, 90, 180, 270"
      );
    });

    it("should throw an error if rot is not correct", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ rot: "90" })).toThrow(
        "rotate option is not a number. You can use values 0, 90, 180, 270"
      );
    });

    it("should return rot:90 if rotate option is 90", () => {
      expect(build({ rotate: 90 })).toEqual("rot:90");
    });

    it("should return rot:270 if rot option is 270", () => {
      expect(build({ rot: 270 })).toEqual("rot:270");
    });
  });
});
