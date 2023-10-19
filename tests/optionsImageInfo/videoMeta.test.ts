import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/videoMeta";

describe("video_meta", () => {
  describe("test", () => {
    it("should return true if video_meta option is defined", () => {
      expect(test({ video_meta: 1 })).toEqual(true);
    });

    it("should return true if video_meta option is false", () => {
      expect(test({ vm: false })).toEqual(true);
    });

    it("should return false if video_meta option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if vm option is defined", () => {
      expect(test({ vm: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if video_meta option is undefined", () => {
      expect(() => build({})).toThrow("video_meta option is undefined");
    });

    it("should return 't' if video_meta option is 1", () => {
      expect(build({ video_meta: 1 })).toEqual("vm:t");
    });

    it("should return 't' if vm option is 't'", () => {
      expect(build({ vm: "t" })).toEqual("vm:t");
    });

    it("should return 't' if video_meta option is true", () => {
      expect(build({ video_meta: true })).toEqual("vm:t");
    });

    it("should return 'f' if video_meta option is false", () => {
      expect(build({ video_meta: false })).toEqual("vm:f");
    });

    it("should return 'f' if video_meta option is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ video_meta: 0 })).toEqual("vm:f");
    });

    it("should return 'f' if vm option is string (except 't')", () => {
      expect(build({ vm: "empty" })).toEqual("vm:f");
    });
  });
});
