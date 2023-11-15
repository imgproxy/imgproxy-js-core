import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/formatQuality";

describe("formatQuality", () => {
  describe("test", () => {
    it("should return true if formatQuality option is defined", () => {
      expect(
        test({ format_quality: [{ format: "jpg", quality: 85 }] })
      ).toEqual(true);
    });

    it("should return false if formatQuality option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if formatQuality option is undefined", () => {
      expect(() => build({})).toThrow("format_quality option is undefined");
    });

    it("should throw an error if formatQuality is not an array", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ format_quality: "test" })).toThrow(
        "format_quality option is not an array"
      );
    });

    it("should throw an error if formatQuality is empty", () => {
      expect(() => build({ format_quality: [] })).toThrow(
        "format_quality option is empty"
      );
    });

    it("should return fq:jpg:85 if formatQuality option is [{ format: 'jpg', quality: 85 }]", () => {
      expect(
        build({ format_quality: [{ format: "jpg", quality: 85 }] })
      ).toEqual("fq:jpg:85");
    });

    it("should return fq:png:85:webp:70 if formatQuality option is [{ format: 'png', quality: 85 }, { format: 'webp', quality: 70 }]", () => {
      expect(
        build({
          format_quality: [
            { format: "png", quality: 85 },
            { format: "webp", quality: 70 },
          ],
        })
      ).toEqual("fq:png:85:webp:70");
    });
  });
});
