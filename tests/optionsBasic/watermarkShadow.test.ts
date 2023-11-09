import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/watermarkShadow";

describe("watermarkShadow", () => {
  describe("test", () => {
    it("should return true if watermark_shadow option is defined", () => {
      expect(test({ watermark_shadow: 24 })).toEqual(true);
    });

    it("should return true if wmsh option is defined", () => {
      expect(test({ wmsh: 18 })).toEqual(true);
    });

    it("should return false if watermark_shadow option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if watermark_shadow option is undefined", () => {
      expect(() => build({})).toThrow("watermark_shadow option is undefined");
    });

    it("should throw an error if watermark_shadow option is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ watermark_shadow: "150" })).toThrow(
        "watermark_shadow option is not a number"
      );
    });

    it("should throw an error if watermark_shadow option is less than 0", () => {
      expect(() => build({ watermark_shadow: -1 })).toThrow(
        "watermark_shadow option value can't be less then 0"
      );
    });

    it("should return wmsh:52 if watermark_shadow option is 52", () => {
      expect(build({ watermark_shadow: 52 })).toEqual("wmsh:52");
    });

    it("should return wmsh:36 if wmsh option is 36", () => {
      expect(build({ wmsh: 36 })).toEqual("wmsh:36");
    });
  });
});
