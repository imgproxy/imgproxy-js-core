import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/size";

describe("size", () => {
  describe("test", () => {
    it("should return true if size option is defined", () => {
      expect(test({ size: 1 })).toEqual(true);
    });

    it("should return true if size option is false", () => {
      expect(test({ s: false })).toEqual(true);
    });

    it("should return false if size option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if s option is defined", () => {
      expect(test({ s: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if size option is undefined", () => {
      expect(() => build({})).toThrow("size option is undefined");
    });

    it("should return 't' if size option is 1", () => {
      expect(build({ size: 1 })).toEqual("s:t");
    });

    it("should return 't' if s option is 't'", () => {
      expect(build({ s: "t" })).toEqual("s:t");
    });

    it("should return 't' if size option is true", () => {
      expect(build({ size: true })).toEqual("s:t");
    });

    it("should return 'f' if size option is false", () => {
      expect(build({ size: false })).toEqual("s:f");
    });

    it("should return 'f' if size option is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ size: 0 })).toEqual("s:f");
    });

    it("should return 'f' if size option is string (except 't')", () => {
      expect(build({ size: "true" })).toEqual("s:f");
    });
  });
});
