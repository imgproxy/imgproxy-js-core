import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/videoThumbnailSecond";

describe("videoThumbnailSecond", () => {
  describe("test", () => {
    it("should return true if video_thumbnail_second option is defined", () => {
      expect(test({ video_thumbnail_second: 168 })).toEqual(true);
    });

    it("should return true if vts option is defined", () => {
      expect(test({ vts: 1035 })).toEqual(true);
    });

    it("should return false if video_thumbnail_second option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if video_thumbnail_second option is undefined", () => {
      expect(() => build({})).toThrow(
        "video_thumbnail_second option is undefined"
      );
    });

    it("should throw an error if video_thumbnail_second is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ video_thumbnail_second: "150" })).toThrow(
        "video_thumbnail_second option is not a number. Must be a positive integer"
      );
    });

    it("should throw an error if video_thumbnail_second is less than 1", () => {
      expect(() => build({ video_thumbnail_second: 0 })).toThrow(
        "video_thumbnail_second option is negative. Must be a positive integer"
      );
    });

    it("should throw an error if video_thumbnail_second is not an integer", () => {
      expect(() => build({ video_thumbnail_second: 1.5 })).toThrow(
        "video_thumbnail_second must be a positive integer"
      );
    });

    it("should return vts:168 if video_thumbnail_second option is 168", () => {
      expect(build({ video_thumbnail_second: 168 })).toEqual("vts:168");
    });

    it("should return vts:10034 if vts option is 10034", () => {
      expect(build({ vts: 10034 })).toEqual("vts:10034");
    });
  });
});
