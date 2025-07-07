import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/skipProcessing";

describe("skipProcessing", () => {
  describe("test", () => {
    it("should return true if skipProcessing option is defined", () => {
      expect(test({ skip_processing: [] })).toEqual(true);
    });

    it("should return true if skipProcessing option is false", () => {
      expect(test({ sp: ["tiff"] })).toEqual(true);
    });

    it("should return false if skipProcessing option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if skipProcessing option is undefined", () => {
      expect(() => build({})).toThrow("skip_processing option is undefined");
    });

    it("should throw an error if skipProcessing is not an array", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ skip_processing: "tiff" })).toThrow(
        "skip_processing option is not an array"
      );
    });

    it("should throw an error if skipProcessing is empty", () => {
      expect(() => build({ skip_processing: [] })).toThrow(
        "skip_processing option is empty"
      );
    });

    it("should throw an error if skipProcessing contains unsupported extensions", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ skip_processing: ["tiff", "jpeg"] })).toThrow(
        "skip_processing option contains unsupported extension. Valid values are: jpg,jxl,png,webp,avif,gif,ico,svg,heic,bmp,tiff,pdf,mp4"
      );
    });

    it("should return sp:tiff if skipProcessing option is tiff", () => {
      expect(build({ skip_processing: ["tiff"] })).toEqual("sp:tiff");
    });

    it("should return sp:avif:bmp:pdf:mp4 if sp option is ['avif', 'bmp', 'pdf', 'mp4']", () => {
      expect(build({ sp: ["avif", "bmp", "pdf", "mp4"] })).toEqual(
        "sp:avif:bmp:pdf:mp4"
      );
    });
  });
});
