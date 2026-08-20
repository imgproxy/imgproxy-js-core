import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsShared/videoThumbnailKeyframes";

describe("videoThumbnailKeyframes", () => {
  describe("test", () => {
    it("should return true if video_thumbnail_keyframes option is defined", () => {
      expect(test({ video_thumbnail_keyframes: true })).toEqual(true);
    });

    it("should return true if video_thumbnail_keyframes option is false", () => {
      expect(test({ vtk: false })).toEqual(true);
    });

    it("should return false if video_thumbnail_keyframes option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if vtk option is defined", () => {
      expect(test({ vtk: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should return 't' if video_thumbnail_keyframes option is true", () => {
      expect(build({ video_thumbnail_keyframes: true })).toEqual("vtk:t");
    });

    it("should return 't' if vtk option is 't'", () => {
      expect(build({ vtk: "t" })).toEqual("vtk:t");
    });

    it("should return 't' if video_thumbnail_keyframes is 1", () => {
      expect(build({ video_thumbnail_keyframes: 1 })).toEqual("vtk:t");
    });

    it("should return 'f' if vtk is false", () => {
      expect(build({ vtk: false })).toEqual("vtk:f");
    });

    it("should return 'f' if video_thumbnail_keyframes is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ video_thumbnail_keyframes: 0 })).toEqual("vtk:f");
    });

    it("should return 'f' if vtk is string (except 't')", () => {
      expect(build({ vtk: "true" })).toEqual("vtk:f");
    });

    it("should throw an error if video_thumbnail_keyframes option is undefined", () => {
      expect(() => build({})).toThrow(
        "video_thumbnail_keyframes option is undefined"
      );
    });
  });
});
