import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/iptc";

describe("IPTC", () => {
  describe("test", () => {
    it("should return true if IPTC option is defined", () => {
      expect(test({ iptc: 1 })).toEqual(true);
    });

    it("should return true if IPTC option is false", () => {
      expect(test({ iptc: false })).toEqual(true);
    });

    it("should return false if IPTC option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if IPTC option is defined", () => {
      expect(test({ iptc: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if IPTC option is undefined", () => {
      expect(() => build({})).toThrow("IPTC option is undefined");
    });

    it("should return 't' if IPTC option is 1", () => {
      expect(build({ iptc: 1 })).toEqual("iptc:t");
    });

    it("should return 't' if IPTC option is 't'", () => {
      expect(build({ iptc: "t" })).toEqual("iptc:t");
    });

    it("should return 't' if IPTC option is true", () => {
      expect(build({ iptc: true })).toEqual("iptc:t");
    });

    it("should return 'f' if IPTC option is false", () => {
      expect(build({ iptc: false })).toEqual("iptc:f");
    });

    it("should return 'f' if IPTC option is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ iptc: 0 })).toEqual("iptc:f");
    });

    it("should return 'f' if IPTC option is string (except 't')", () => {
      expect(build({ iptc: "none" })).toEqual("iptc:f");
    });
  });
});
