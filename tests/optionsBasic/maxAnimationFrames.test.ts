import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/maxAnimationFrames";

describe("maxAnimationFrames", () => {
  describe("test", () => {
    it("should return true if max_animation_frames option is defined", () => {
      expect(test({ max_animation_frames: 60 })).toEqual(true);
    });

    it("should return true if maf option is defined", () => {
      expect(test({ maf: 0 })).toEqual(true);
    });

    it("should return false if max_animation_frames option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if max_animation_frames option is undefined", () => {
      expect(() => build({})).toThrow(
        "max_animation_frames option is undefined"
      );
    });

    it("should throw an error if max_animation_frames is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ max_animation_frames: "150" })).toThrow(
        "max_animation_frames option is not a number"
      );
    });

    it("should throw an error if max_animation_frames is less than 0", () => {
      expect(() => build({ max_animation_frames: -1 })).toThrow(
        "max_animation_frames option value can't be less or equal then 0"
      );
    });

    it("should throw an error if max_animation_frames is 0", () => {
      expect(() => build({ max_animation_frames: 0 })).toThrow(
        "max_animation_frames option value can't be less or equal then 0"
      );
    });

    it("should return maf:60 if max_animation_frames option is 60", () => {
      expect(build({ max_animation_frames: 60 })).toEqual("maf:60");
    });

    it("should return maf:36 if maf option is 36", () => {
      expect(build({ maf: 36 })).toEqual("maf:36");
    });
  });
});
