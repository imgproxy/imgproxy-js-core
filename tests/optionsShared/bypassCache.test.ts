import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsShared/bypassCache";

describe("bypassCache", () => {
  describe("test", () => {
    it("should return true if bypass_cache option is defined", () => {
      expect(test({ bypass_cache: true })).toEqual(true);
    });

    it("should return true if bypass_cache option is false", () => {
      expect(test({ bc: false })).toEqual(true);
    });

    it("should return false if bypass_cache option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if bc option is defined", () => {
      expect(test({ bc: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should return 't' if bypass_cache option is true", () => {
      expect(build({ bypass_cache: true })).toEqual("bc:t");
    });

    it("should return 't' if bc option is 't'", () => {
      expect(build({ bc: "t" })).toEqual("bc:t");
    });

    it("should return 't' if bypass_cache is 1", () => {
      expect(build({ bypass_cache: 1 })).toEqual("bc:t");
    });

    it("should return 'f' if bc is false", () => {
      expect(build({ bc: false })).toEqual("bc:f");
    });

    it("should return 'f' if bypass_cache is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ bypass_cache: 0 })).toEqual("bc:f");
    });

    it("should return 'f' if bc is string (except 't')", () => {
      expect(build({ bc: "true" })).toEqual("bc:f");
    });

    it("should throw an error if bypass_cache option is undefined", () => {
      expect(() => build({})).toThrow("bypass_cache option is undefined");
    });
  });
});
