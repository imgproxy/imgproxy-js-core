import { describe, expect, it } from "vitest";
import { test, build } from "../src/options/jpegOptions";

describe("jpegOptions", () => {
  describe("test", () => {
    it("should return true if jpegOptions is defined", () => {
      expect(test({ jpeg_options: {} })).toEqual(true);
    });

    it("should return false if jpegOptions is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if jpgo is defined", () => {
      expect(test({ jpeg_options: {} })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if jpegOptions is undefined", () => {
      expect(() => build({})).toThrow("jpeg options option is undefined");
    });

    it("should throw an error if progressive is not a boolean", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ jpeg_options: { progressive: "true" } })).toThrow(
        "jpeg_options.progressive is not a boolean"
      );
    });

    it("should throw an error if no_subsample is not a boolean", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ jpeg_options: { no_subsample: "true" } })).toThrow(
        "jpeg_options.no_subsample is not a boolean"
      );
    });

    it("should throw an error if trellis_quant is not a boolean", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ jpeg_options: { trellis_quant: "true" } })).toThrow(
        "jpeg_options.trellis_quant is not a boolean"
      );
    });

    it("should throw an error if overshoot_deringing is not a boolean", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ jpeg_options: { overshoot_deringing: "true" } })
      ).toThrow("jpeg_options.overshoot_deringing is not a boolean");
    });

    it("should throw an error if optimize_scans is not a boolean", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ jpeg_options: { progressive: true, optimize_scans: "true" } })
      ).toThrow("jpeg_options.optimize_scans is not a boolean");
    });

    it("should throw an error if progressive is false and optimize_scans is true", () => {
      expect(() =>
        build({ jpeg_options: { progressive: false, optimize_scans: true } })
      ).toThrow(
        "jpeg_options.progressive must be true if jpeg_options.optimize_scans is true"
      );
    });

    it("should throw an error if quant_table is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ jpeg_options: { quant_table: "true" } })).toThrow(
        "jpeg_options.quant_table is not a number"
      );
    });

    it("should throw an error if quant_table is less than 0", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ jpeg_options: { quant_table: -1 } })
      ).toThrow("jpeg_options.quant_table is out of range. Must be 0-8");
    });

    it("should throw an error if quant_table is more than 8", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ jpeg_options: { quant_table: 9 } })
      ).toThrow("jpeg_options.quant_table is out of range. Must be 0-8");
    });

    it("should return jpgo:true:true:true:true:true:true:1 if all parametres are true", () => {
      expect(
        build({
          jpeg_options: {
            progressive: true,
            no_subsample: true,
            trellis_quant: true,
            overshoot_deringing: true,
            optimize_scans: true,
            quant_table: 1,
          },
        })
      ).toEqual("jpgo:true:true:true:true:true:1");
    });

    it("should return jpgo:true:::::true if jpeg_options is {progressive: true, optimize_scans: true}", () => {
      expect(
        build({
          jpeg_options: {
            progressive: true,
            optimize_scans: true,
          },
        })
      ).toEqual("jpgo:true::::true");
    });

    it("should return jpgo:false:true:::true if jpeg_options is {progressive: false, no_subsample: true, optimize_scans: true}", () => {
      expect(
        build({
          jpeg_options: {
            progressive: false,
            no_subsample: true,
            overshoot_deringing: true,
          },
        })
      ).toEqual("jpgo:false:true::true");
    });

    it("should return jpgo::false::false::5 if jpeg_options is {no_subsample: false, overshoot_deringing: false, quant_table: 5}", () => {
      expect(
        build({
          jpeg_options: {
            no_subsample: false,
            overshoot_deringing: false,
            quant_table: 5,
          },
        })
      ).toEqual("jpgo::false::false::5");
    });

    it("should return jpgo::::::7 if jpeg_options is {quant_table: 7}", () => {
      expect(
        build({
          jpeg_options: {
            quant_table: 7,
          },
        })
      ).toEqual("jpgo::::::7");
    });
  });
});
