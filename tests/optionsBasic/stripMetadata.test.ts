import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/stripMetadata";

describe("stripMetadata", () => {
  describe("test", () => {
    it("should return true if strip_metadata option is defined", () => {
      expect(test({ strip_metadata: true })).toEqual(true);
    });

    it("should return true if strip_metadata option is false", () => {
      expect(test({ strip_metadata: false })).toEqual(true);
    });

    it("should return false if strip_metadata option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if sm option is defined", () => {
      expect(test({ sm: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if strip_metadata option is undefined", () => {
      expect(() => build({})).toThrow("strip metadata option is undefined");
    });

    it("should return 't' if strip_metadata option is true", () => {
      expect(build({ strip_metadata: true })).toEqual("sm:t");
    });

    it("should return 't' if sm option is t", () => {
      expect(build({ sm: "t" })).toEqual("sm:t");
    });

    it("should return 't' if strip_metadata is 1", () => {
      expect(build({ strip_metadata: 1 })).toEqual("sm:t");
    });

    it("should return 'f' if sm is false", () => {
      expect(build({ sm: false })).toEqual("sm:f");
    });

    it("should return 'f' if strip_metadata is 0", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(build({ strip_metadata: 0 })).toEqual("sm:f");
    });

    it("should return 'f' if sm is string (except 't')", () => {
      expect(build({ sm: "true" })).toEqual("sm:f");
    });
  });
});
