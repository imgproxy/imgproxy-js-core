import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/format";

describe("format", () => {
  describe("test", () => {
    it("should return true if format option is defined", () => {
      expect(test({ format: "png" })).toEqual(true);
    });

    it("should return true if f option is defined", () => {
      expect(test({ f: "webp" })).toEqual(true);
    });

    it("should return true if ext option is defined", () => {
      expect(test({ ext: "tiff" })).toEqual(true);
    });

    it("should return false if format option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if format option is undefined", () => {
      expect(() => build({})).toThrow("format option is undefined");
    });

    it("should throw an error if format is invalid", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ format: "invalid" })).toThrow(
        "format option is invalid. Must be one of: png,jpg,webp,avif,gif,ico,svg,bmp,tiff,mp4,best"
      );
    });

    it("should return f:png if format option is png", () => {
      expect(build({ format: "png" })).toEqual("f:png");
    });

    it("should return f:jpg if f option is jpg", () => {
      expect(build({ f: "jpg" })).toEqual("f:jpg");
    });

    it("should return f:webp if ext option is webp", () => {
      expect(build({ ext: "webp" })).toEqual("f:webp");
    });
  });
});
