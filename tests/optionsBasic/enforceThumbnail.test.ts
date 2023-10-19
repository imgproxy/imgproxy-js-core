import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/enforceThumbnail";

describe("enforceThumbnail", () => {
  describe("test", () => {
    it("should return true if enforce_thumbnail option is defined", () => {
      expect(test({ enforce_thumbnail: true })).toEqual(true);
    });

    it("should return true if enforce_thumbnail option is false", () => {
      expect(test({ eth: false })).toEqual(true);
    });

    it("should return false if enforce_thumbnail option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if eth option is defined", () => {
      expect(test({ eth: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should return 't' if enforce_thumbnail option is true", () => {
      expect(build({ enforce_thumbnail: true })).toEqual("eth:t");
    });

    it("should return 't' if eth option is 't'", () => {
      expect(build({ eth: "t" })).toEqual("eth:t");
    });

    it("should return 't' if enforce_thumbnail is 1", () => {
      expect(build({ enforce_thumbnail: 1 })).toEqual("eth:t");
    });

    it("should return 'f' if eth is false", () => {
      expect(build({ eth: false })).toEqual("eth:f");
    });

    it("should return 'f' if enforce_thumbnail is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ enforce_thumbnail: 0 })).toEqual("eth:f");
    });

    it("should return 'f' if eth is string (except 't')", () => {
      expect(build({ eth: "true" })).toEqual("eth:f");
    });

    it("should throw an error if enforce_thumbnail option is undefined", () => {
      expect(() => build({})).toThrow("enforce_thumbnail option is undefined");
    });
  });
});
