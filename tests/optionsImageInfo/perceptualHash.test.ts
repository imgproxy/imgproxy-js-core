import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/perceptualHash";

describe("perceptual_hash", () => {
  describe("test", () => {
    it("should return true if perceptual_hash option is defined", () => {
      expect(test({ perceptual_hash: 1 })).toEqual(true);
    });

    it("should return true if phash option is defined", () => {
      expect(test({ phash: true })).toEqual(true);
    });

    it("should return true if ph option is defined", () => {
      expect(test({ ph: "t" })).toEqual(true);
    });

    it("should return true if perceptual_hash option is false", () => {
      expect(test({ perceptual_hash: false })).toEqual(true);
    });

    it("should return false if perceptual_hash option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if perceptual_hash option is undefined", () => {
      expect(() => build({})).toThrow("perceptual_hash option is undefined");
    });

    it("should return ph:t if perceptual_hash option is 1", () => {
      expect(build({ perceptual_hash: 1 })).toEqual("ph:t");
    });

    it("should return ph:t if phash option is true", () => {
      expect(build({ phash: true })).toEqual("ph:t");
    });

    it("should return ph:t if ph option is 't'", () => {
      expect(build({ ph: "t" })).toEqual("ph:t");
    });

    it("should return ph:f if perceptual_hash option is false", () => {
      expect(build({ perceptual_hash: false })).toEqual("ph:f");
    });

    it("should return ph:f if perceptual_hash option is 0", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(build({ perceptual_hash: 0 })).toEqual("ph:f");
    });

    it("should return ph:f if perceptual_hash option is string (except 't')", () => {
      expect(build({ perceptual_hash: "true" })).toEqual("ph:f");
    });
  });
});
