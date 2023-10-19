import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/maxAnimationFrameResolution";

describe("maxAnimationFrameResolution", () => {
  describe("test", () => {
    it("should return true if max_animation_frame_resolution option is defined", () => {
      expect(test({ max_animation_frame_resolution: 150 })).toEqual(true);
    });

    it("should return true if mafr option is defined", () => {
      expect(test({ mafr: 0 })).toEqual(true);
    });

    it("should return false if max_animation_frame_resolution option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if max_animation_frame_resolution option is undefined", () => {
      expect(() => build({})).toThrow(
        "max_animation_frame_resolution option is undefined"
      );
    });

    it("should throw an error if max_animation_frame_resolution is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ max_animation_frame_resolution: "150" })).toThrow(
        "max_animation_frame_resolution option is not a number"
      );
    });

    it("should throw an error if max_animation_frame_resolution is less than 0", () => {
      expect(() => build({ max_animation_frame_resolution: -1 })).toThrow(
        "max_animation_frame_resolution option can't be a negative"
      );
    });

    it("should return mafr:0 if max_animation_frame_resolution option is 0", () => {
      expect(build({ max_animation_frame_resolution: 0 })).toEqual("mafr:0");
    });

    it("should return mafr:12 if mafr option is 12", () => {
      expect(build({ mafr: 12 })).toEqual("mafr:12");
    });

    it("should return mafr:84 if max_animation_frame_resolution option is 84", () => {
      expect(build({ max_animation_frame_resolution: 84 })).toEqual("mafr:84");
    });
  });
});
