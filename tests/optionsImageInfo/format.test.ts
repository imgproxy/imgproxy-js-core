import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/format";

describe("format", () => {
  describe("test", () => {
    it("should return true if format option is defined", () => {
      expect(test({ format: 1 })).toEqual(true);
    });

    it("should return true if format option is false", () => {
      expect(test({ f: false })).toEqual(true);
    });

    it("should return false if format option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if s option is defined", () => {
      expect(test({ f: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if format option is undefined", () => {
      expect(() => build({})).toThrow("format option is undefined");
    });

    it("should return 't' if format option is 1", () => {
      expect(build({ format: 1 })).toEqual("f:t");
    });

    it("should return 't' if f option is 't'", () => {
      expect(build({ f: "t" })).toEqual("f:t");
    });

    it("should return 't' if format is true", () => {
      expect(build({ format: true })).toEqual("f:t");
    });

    it("should return 'f' if format is false", () => {
      expect(build({ format: false })).toEqual("f:f");
    });

    it("should return 'f' if format is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ format: 0 })).toEqual("f:f");
    });

    it("should return 'f' if f is string (except 't')", () => {
      expect(build({ f: "true" })).toEqual("f:f");
    });
  });
});
