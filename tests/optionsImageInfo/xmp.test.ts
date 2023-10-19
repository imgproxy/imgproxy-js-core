import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/xmp";

describe("XMP", () => {
  describe("test", () => {
    it("should return true if XMP option is defined", () => {
      expect(test({ xmp: 1 })).toEqual(true);
    });

    it("should return true if XMP option is false", () => {
      expect(test({ xmp: false })).toEqual(true);
    });

    it("should return false if XMP option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if XMP option is undefined", () => {
      expect(() => build({})).toThrow("XMP option is undefined");
    });

    it("should return 't' if XMP option is 1", () => {
      expect(build({ xmp: 1 })).toEqual("xmp:t");
    });

    it("should return 't' if XMP option is 't'", () => {
      expect(build({ xmp: "t" })).toEqual("xmp:t");
    });

    it("should return 't' if XMP option is true", () => {
      expect(build({ xmp: true })).toEqual("xmp:t");
    });

    it("should return 'f' if XMP option is false", () => {
      expect(build({ xmp: false })).toEqual("xmp:f");
    });

    it("should return 'f' if XMP option is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ xmp: 0 })).toEqual("xmp:f");
    });

    it("should return 'f' if XMP option is string (except 't')", () => {
      expect(build({ xmp: "none" })).toEqual("xmp:f");
    });
  });
});
