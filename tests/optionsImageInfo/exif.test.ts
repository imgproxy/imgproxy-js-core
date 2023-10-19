import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/exif";

describe("EXIF", () => {
  describe("test", () => {
    it("should return true if EXIF option is defined", () => {
      expect(test({ exif: 1 })).toEqual(true);
    });

    it("should return true if EXIF option is false", () => {
      expect(test({ exif: false })).toEqual(true);
    });

    it("should return false if EXIF option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if EXIF option is undefined", () => {
      expect(() => build({})).toThrow("EXIF option is undefined");
    });

    it("should return 't' if EXIF option is 1", () => {
      expect(build({ exif: 1 })).toEqual("exif:t");
    });

    it("should return 't' if EXIF option is 't'", () => {
      expect(build({ exif: "t" })).toEqual("exif:t");
    });

    it("should return 't' if EXIF option is true", () => {
      expect(build({ exif: true })).toEqual("exif:t");
    });

    it("should return 'f' if EXIF option is false", () => {
      expect(build({ exif: false })).toEqual("exif:f");
    });

    it("should return 'f' if EXIF option is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ exif: 0 })).toEqual("exif:f");
    });

    it("should return 'f' if EXIF option is string (except 't')", () => {
      expect(build({ exif: "true" })).toEqual("exif:f");
    });
  });
});
