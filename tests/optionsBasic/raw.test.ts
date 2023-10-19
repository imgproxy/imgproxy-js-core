import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/raw";

describe("raw", () => {
  describe("test", () => {
    it("should return true if raw option is defined", () => {
      expect(test({ raw: true })).toEqual(true);
    });

    it("should return true if raw option is false", () => {
      expect(test({ raw: false })).toEqual(true);
    });

    it("should return false if raw option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if raw option is undefined", () => {
      expect(() => build({})).toThrow("raw option is undefined");
    });

    it("should return 't' if raw option is true", () => {
      expect(build({ raw: true })).toEqual("raw:t");
    });

    it("should return 't' if raw option is t", () => {
      expect(build({ raw: "t" })).toEqual("raw:t");
    });

    it("should return 't' if raw is 1", () => {
      expect(build({ raw: 1 })).toEqual("raw:t");
    });

    it("should return 'f' if raw is false", () => {
      expect(build({ raw: false })).toEqual("raw:f");
    });

    it("should return 'f' if raw is 0", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(build({ raw: 0 })).toEqual("raw:f");
    });

    it("should return 'f' if raw is string (except 't')", () => {
      expect(build({ raw: "true" })).toEqual("raw:f");
    });
  });
});
