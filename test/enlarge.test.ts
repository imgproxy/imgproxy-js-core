import { describe, expect, it } from "vitest";
import { test, build } from "../src/options/enlarge";

describe("enlarge", () => {
  describe("test", () => {
    it("should return true if enlarge option is defined", () => {
      expect(test({ enlarge: true })).toEqual(true);
    });

    it("should return true if enlarge option is false", () => {
      expect(test({ el: false })).toEqual(true);
    });

    it("should return false if enlarge option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if el option is defined", () => {
      expect(test({ el: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should return 't' if enlarge option is true", () => {
      expect(build({ enlarge: true })).toEqual("el:t");
    });

    it("should return 't' if el option is t", () => {
      expect(build({ el: "t" })).toEqual("el:t");
    });

    it("should return 't' if enlarge is 1", () => {
      expect(build({ enlarge: 1 })).toEqual("el:t");
    });

    it("should return 'f' if el is false", () => {
      expect(build({ el: false })).toEqual("el:f");
    });

    it("should return 'f' if enlarge is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ enlarge: 0 })).toEqual("el:f");
    });

    it("should return 'f' if el is string (except 't')", () => {
      expect(build({ el: "true" })).toEqual("el:f");
    });

    it("should throw an error if enlarge option is undefined", () => {
      expect(() => build({})).toThrow("enlarge option is undefined");
    });
  });
});
