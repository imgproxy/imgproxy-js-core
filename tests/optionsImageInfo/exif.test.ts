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

    it("should return true if EXIF option is an object", () => {
      expect(test({ exif: { enabled: true } })).toEqual(true);
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
      expect(build({ exif: 0 })).toEqual("exif:f");
    });

    it("should return 'f' if EXIF option is string (except 't')", () => {
      expect(build({ exif: "true" })).toEqual("exif:f");
    });

    it("should return 'exif:t' if EXIF option is an object with enabled=true", () => {
      expect(build({ exif: { enabled: true } })).toEqual("exif:t");
    });

    it("should return 'exif:f' if EXIF option is an object with enabled=false", () => {
      expect(build({ exif: { enabled: false } })).toEqual("exif:f");
    });

    it("should default enabled to 't' if only canonical_names is passed", () => {
      expect(build({ exif: { canonical_names: true } })).toEqual("exif:t:t");
    });

    it("should return 'exif:t:t' if both fields are true", () => {
      expect(build({ exif: { enabled: true, canonical_names: true } })).toEqual(
        "exif:t:t"
      );
    });

    it("should return 'exif:f:t' if enabled=false and canonical_names=true", () => {
      expect(
        build({ exif: { enabled: false, canonical_names: true } })
      ).toEqual("exif:f:t");
    });

    it("should return 'exif:t:f' if enabled=true and canonical_names=false", () => {
      expect(
        build({ exif: { enabled: true, canonical_names: false } })
      ).toEqual("exif:t:f");
    });

    it("should return 'exif:t' for an empty object", () => {
      expect(build({ exif: {} })).toEqual("exif:t");
    });
  });
});
