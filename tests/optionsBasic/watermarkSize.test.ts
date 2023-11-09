import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/watermarkSize";

describe("watermarkSize", () => {
  describe("test", () => {
    it("should return true if watermark_size option is defined", () => {
      expect(test({ watermark_size: { width: 500 } })).toEqual(true);
    });

    it("should return true if wms option is defined", () => {
      expect(test({ wms: { height: 150 } })).toEqual(true);
    });

    it("should return false if watermark_size option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if watermark_size option is undefined", () => {
      expect(() => build({})).toThrow("watermark_size option is undefined");
    });

    it("should throw an error if watermark_size.width is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ watermark_size: { width: "150" } })).toThrow(
        "watermark_size.width is not a number"
      );
    });

    it("should throw an error if watermark_size.width is less than 0", () => {
      expect(() => build({ watermark_size: { width: -1 } })).toThrow(
        "watermark_size.width value can't be less then 0"
      );
    });

    it("should throw an error if watermark_size.height is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ watermark_size: { height: "150" } })).toThrow(
        "watermark_size.height is not a number"
      );
    });

    it("should throw an error if wms.height is less than 0", () => {
      expect(() => build({ wms: { height: -1 } })).toThrow(
        "watermark_size.height value can't be less then 0"
      );
    });

    it("should return wms:500 if watermark_size.width option is 500", () => {
      expect(build({ watermark_size: { width: 500 } })).toEqual("wms:500");
    });

    it("should return wms::150 if watermark_size.height option is 150", () => {
      expect(build({ wms: { height: 150 } })).toEqual("wms::150");
    });

    it("should return wms:500:150 if watermark_size.width option is 500 and watermark_size.height option is 150", () => {
      expect(build({ watermark_size: { width: 500, height: 150 } })).toEqual(
        "wms:500:150"
      );
    });
  });
});
