import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/pngOptions";

describe("pngOptions", () => {
  describe("test", () => {
    it("should return true if png_options option is defined", () => {
      expect(test({ png_options: {} })).toEqual(true);
    });

    it("should return true if pngo option is defined", () => {
      expect(test({ pngo: {} })).toEqual(true);
    });

    it("should return false if png_options option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if png_options option is undefined", () => {
      expect(() => build({})).toThrow("png_options option is undefined");
    });

    it("should throw an error if png_options.interlaced is not a boolean", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ png_options: { interlaced: "true" } })).toThrow(
        "png_options.interlaced is not a boolean"
      );
    });

    it("should throw an error if png_options.quantize is not a boolean", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ png_options: { quantize: "true" } })).toThrow(
        "png_options.quantize is not a boolean"
      );
    });

    it("should throw an error if png_options.quantization_colors is not a number", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ png_options: { quantization_colors: "true" } })
      ).toThrow("png_options.quantization_colors is not a number");
    });

    it("should throw an error if png_options.quantization_colors is less than 2", () => {
      expect(() => build({ png_options: { quantization_colors: 1 } })).toThrow(
        "png_options.quantization_colors should be between 2 and 256"
      );
    });

    it("should throw an error if png_options.quantization_colors is greater than 256", () => {
      expect(() =>
        build({ png_options: { quantization_colors: 257 } })
      ).toThrow("png_options.quantization_colors should be between 2 and 256");
    });

    it("should return pngo:true:false:108 if png_options is {interlaced: true, quantize: false, quantization_colors: 108}", () => {
      expect(
        build({
          png_options: {
            interlaced: true,
            quantize: false,
            quantization_colors: 108,
          },
        })
      ).toEqual("pngo:true:false:108");
    });

    it("should return pngo:::108 if png_options is {quantization_colors: 44}", () => {
      expect(
        build({
          png_options: {
            quantization_colors: 44,
          },
        })
      ).toEqual("pngo:::44");
    });

    it("should return pngo:true if png_options is {interlaced: true}", () => {
      expect(
        build({
          png_options: {
            interlaced: true,
          },
        })
      ).toEqual("pngo:true");
    });
  });
});
