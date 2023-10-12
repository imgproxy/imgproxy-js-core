import { describe, expect, it } from "vitest";
import { test, build } from "../src/options/disableAnimation";

describe("disableAnimation", () => {
  describe("test", () => {
    it("should return true if disable animation option is defined", () => {
      expect(test({ disable_animation: true })).toEqual(true);
    });

    it("should return true if disable animation option is false", () => {
      expect(test({ da: false })).toEqual(true);
    });

    it("should return false if disable animation option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if da option is defined", () => {
      expect(test({ da: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should return 't' if disable_animation option is true", () => {
      expect(build({ disable_animation: true })).toEqual("da:t");
    });

    it("should return 't' if da option is t", () => {
      expect(build({ da: "t" })).toEqual("da:t");
    });

    it("should return 't' if disable animation is 1", () => {
      expect(build({ disable_animation: 1 })).toEqual("da:t");
    });

    it("should return 'f' if da is false", () => {
      expect(build({ da: false })).toEqual("da:f");
    });

    it("should return 'f' if disable animation is 0", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(build({ disable_animation: 0 })).toEqual("da:f");
    });

    it("should return 'f' if da is string (except 't')", () => {
      expect(build({ da: "true" })).toEqual("da:f");
    });

    it("should throw an error if disable animation option is undefined", () => {
      expect(() => build({})).toThrow("disable animation option is undefined");
    });
  });
});
