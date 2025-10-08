import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/pagesNumber";

describe("pages_number", () => {
  describe("test", () => {
    it("should return true if pages_number option is defined", () => {
      expect(test({ pages_number: 1 })).toEqual(true);
    });

    it("should return true if pages_number option is false", () => {
      expect(test({ pn: false })).toEqual(true);
    });

    it("should return false if pages_number option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if pn option is defined", () => {
      expect(test({ pn: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if pages_number option is undefined", () => {
      expect(() => build({})).toThrow("pages_number option is undefined");
    });

    it("should return 't' if pages_number option is 1", () => {
      expect(build({ pages_number: 1 })).toEqual("pn:t");
    });

    it("should return 't' if s option is 't'", () => {
      expect(build({ pn: "t" })).toEqual("pn:t");
    });

    it("should return 't' if pages_number option is true", () => {
      expect(build({ pages_number: true })).toEqual("pn:t");
    });

    it("should return 'f' if pages_number option is false", () => {
      expect(build({ pages_number: false })).toEqual("pn:f");
    });

    it("should return 'f' if pages_number option is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ pages_number: 0 })).toEqual("pn:f");
    });

    it("should return 'f' if pages_number option is string (except 't')", () => {
      expect(build({ pages_number: "true" })).toEqual("pn:f");
    });
  });
});
