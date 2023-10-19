import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/dimensions";

describe("dimensions", () => {
  describe("test", () => {
    it("should return true if dimensions option is defined", () => {
      expect(test({ dimensions: 1 })).toEqual(true);
    });

    it("should return true if dimensions option is false", () => {
      expect(test({ d: false })).toEqual(true);
    });

    it("should return false if dimensions option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if d option is defined", () => {
      expect(test({ d: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if dimensions option is undefined", () => {
      expect(() => build({})).toThrow("dimensions option is undefined");
    });

    it("should return 't' if dimensions option is 1", () => {
      expect(build({ dimensions: 1 })).toEqual("d:t");
    });

    it("should return 't' if d option is 't'", () => {
      expect(build({ d: "t" })).toEqual("d:t");
    });

    it("should return 't' if dimensions is true", () => {
      expect(build({ dimensions: true })).toEqual("d:t");
    });

    it("should return 'f' if dimensions is false", () => {
      expect(build({ dimensions: false })).toEqual("d:f");
    });

    it("should return 'f' if dimensions is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ dimensions: 0 })).toEqual("d:f");
    });

    it("should return 'f' if dimensions is string (except 't')", () => {
      expect(build({ dimensions: "true" })).toEqual("d:f");
    });
  });
});
