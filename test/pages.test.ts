import { describe, expect, it } from "vitest";
import { test, build } from "../src/options/pages";

describe("pages", () => {
  describe("test", () => {
    it("should return true if pages option is defined", () => {
      expect(test({ pages: 10 })).toEqual(true);
    });

    it("should return true if pgs option is defined", () => {
      expect(test({ pgs: 0 })).toEqual(true);
    });

    it("should return false if pages option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if pages option is undefined", () => {
      expect(() => build({})).toThrow("pages option is undefined");
    });

    it("should throw an error if pages is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ pages: "150" })).toThrow(
        "pages option is invalid. Must be a positive integer starting with 1"
      );
    });

    it("should throw an error if pages is less than 1", () => {
      expect(() => build({ pages: 0 })).toThrow(
        "pages option is invalid. Must be a positive integer starting with 1"
      );
    });

    it("should throw an error if pages is not an integer", () => {
      expect(() => build({ pages: 1.5 })).toThrow(
        "pages option is invalid. Must be a positive integer starting with 1"
      );
    });

    it("should return pgs:10 if pages option is 10", () => {
      expect(build({ pages: 10 })).toEqual("pgs:10");
    });

    it("should return pgs:6 if pgs option is 6", () => {
      expect(build({ pgs: 6 })).toEqual("pgs:6");
    });
  });
});
