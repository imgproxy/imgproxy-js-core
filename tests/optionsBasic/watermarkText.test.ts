import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/watermarkText";

describe("watermarkText", () => {
  describe("test", () => {
    it("should return true if watermark_text option is defined", () => {
      expect(test({ watermark_text: "watermark_text" })).toEqual(true);
    });

    it("should return true if wmt option is defined", () => {
      expect(test({ wmt: "wmt" })).toEqual(true);
    });

    it("should return false if watermark_text option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if watermark_text option is undefined", () => {
      expect(() => build({})).toThrow("watermark_text option is undefined");
    });

    it("should throw an error if watermark_text is not a string", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ watermark_text: 150 })).toThrow(
        "watermark_text option is not a string"
      );
    });

    it("should return wmt:ZXhhbXBsZQ== if watermark_text option is ZXhhbXBsZQ==", () => {
      expect(build({ watermark_text: "ZXhhbXBsZQ==" })).toEqual(
        "wmt:ZXhhbXBsZQ=="
      );
    });

    it("should return wmt:cGljdHVyZSBuYW1l if wmt option is cGljdHVyZSBuYW1l", () => {
      expect(build({ wmt: "cGljdHVyZSBuYW1l" })).toEqual(
        "wmt:cGljdHVyZSBuYW1l"
      );
    });
  });
});
