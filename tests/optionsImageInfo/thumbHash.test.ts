import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/thumbHash";

describe("thumb_hash", () => {
  describe("test", () => {
    it("should return true if thumb_hash option is defined", () => {
      expect(test({ thumb_hash: 1 })).toEqual(true);
    });

    it("should return true if th option is defined", () => {
      expect(test({ th: "t" })).toEqual(true);
    });

    it("should return true if thumb_hash option is false", () => {
      expect(test({ thumb_hash: false })).toEqual(true);
    });

    it("should return false if thumb_hash option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if thumb_hash option is undefined", () => {
      expect(() => build({})).toThrow("thumb_hash option is undefined");
    });

    it("should return th:t if thumb_hash option is 1", () => {
      expect(build({ thumb_hash: 1 })).toEqual("th:t");
    });

    it("should return th:t if th option is 't'", () => {
      expect(build({ th: "t" })).toEqual("th:t");
    });

    it("should return th:t if thumb_hash option is true", () => {
      expect(build({ thumb_hash: true })).toEqual("th:t");
    });

    it("should return th:f if thumb_hash option is false", () => {
      expect(build({ thumb_hash: false })).toEqual("th:f");
    });

    it("should return th:f if thumb_hash option is 0", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(build({ thumb_hash: 0 })).toEqual("th:f");
    });

    it("should return th:f if thumb_hash option is string (except 't')", () => {
      expect(build({ thumb_hash: "true" })).toEqual("th:f");
    });
  });
});
