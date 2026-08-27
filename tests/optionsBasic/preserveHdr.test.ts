import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/preserveHdr";

describe("preserve_hdr", () => {
  describe("test", () => {
    it("should return true if preserve_hdr option is defined", () => {
      expect(test({ preserve_hdr: 1 })).toEqual(true);
    });

    it("should return true if ph option is defined", () => {
      expect(test({ ph: "t" })).toEqual(true);
    });

    it("should return true if preserve_hdr option is false", () => {
      expect(test({ preserve_hdr: false })).toEqual(true);
    });

    it("should return false if preserve_hdr option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if preserve_hdr option is undefined", () => {
      expect(() => build({})).toThrow("preserve_hdr option is undefined");
    });

    it("should return ph:t if preserve_hdr option is 1", () => {
      expect(build({ preserve_hdr: 1 })).toEqual("ph:t");
    });

    it("should return ph:t if ph option is 't'", () => {
      expect(build({ ph: "t" })).toEqual("ph:t");
    });

    it("should return ph:t if preserve_hdr option is true", () => {
      expect(build({ preserve_hdr: true })).toEqual("ph:t");
    });

    it("should return ph:f if preserve_hdr option is false", () => {
      expect(build({ preserve_hdr: false })).toEqual("ph:f");
    });

    it("should return ph:f if preserve_hdr option is 0", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(build({ preserve_hdr: 0 })).toEqual("ph:f");
    });

    it("should return ph:f if preserve_hdr option is string (except 't')", () => {
      expect(build({ preserve_hdr: "true" })).toEqual("ph:f");
    });
  });
});
