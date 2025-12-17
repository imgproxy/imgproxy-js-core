import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/flip";

describe("flip", () => {
  describe("test", () => {
    it("should return true if flip option is defined", () => {
      expect(test({ flip: { horizontal: true } })).toEqual(true);
    });

    it("should return true if fl option is defined", () => {
      expect(test({ fl: { vertical: true } })).toEqual(true);
    });

    it("should return false if flip option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if flip is undefined", () => {
      expect(() => build({})).toThrow("flip option is undefined");
    });

    it("should return fl:f:f if both horizontal and vertical are false", () => {
      expect(build({ flip: { horizontal: false, vertical: false } })).toEqual(
        "fl:f:f"
      );
    });

    it("should return fl:f:f if flip object is empty (defaults)", () => {
      expect(build({ flip: {} })).toEqual("fl:f:f");
    });

    it("should return fl:t:f if horizontal is true", () => {
      expect(build({ flip: { horizontal: true } })).toEqual("fl:t:f");
    });

    it("should return fl:f:t if vertical is true", () => {
      expect(build({ flip: { vertical: true } })).toEqual("fl:f:t");
    });

    it("should return fl:t:t if both are true", () => {
      expect(build({ flip: { horizontal: true, vertical: true } })).toEqual(
        "fl:t:t"
      );
    });

    it("should support horizontal as 1", () => {
      expect(build({ flip: { horizontal: 1 } })).toEqual("fl:t:f");
    });

    it("should support horizontal as 't'", () => {
      expect(build({ flip: { horizontal: "t" } })).toEqual("fl:t:f");
    });

    it("should support vertical as 1", () => {
      expect(build({ flip: { vertical: 1 } })).toEqual("fl:f:t");
    });

    it("should support vertical as 't'", () => {
      expect(build({ flip: { vertical: "t" } })).toEqual("fl:f:t");
    });

    it("should support both with various truthy values", () => {
      expect(build({ flip: { horizontal: 1, vertical: "t" } })).toEqual(
        "fl:t:t"
      );
    });

    it("should support 0 as false for horizontal", () => {
      expect(build({ flip: { horizontal: 0, vertical: true } })).toEqual(
        "fl:f:t"
      );
    });

    it("should work with fl shorthand", () => {
      expect(build({ fl: { horizontal: true, vertical: false } })).toEqual(
        "fl:t:f"
      );
    });

    it("should work with both horizontal and vertical using different value types", () => {
      expect(build({ flip: { horizontal: true, vertical: 1 } })).toEqual(
        "fl:t:t"
      );
    });
  });
});
