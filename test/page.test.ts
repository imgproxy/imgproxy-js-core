import { describe, expect, it } from "vitest";
import { test, build } from "../src/options/page";

describe("page", () => {
  describe("test", () => {
    it("should return true if page option is defined", () => {
      expect(test({ page: 5 })).toEqual(true);
    });

    it("should return true if pg option is defined", () => {
      expect(test({ pg: 2 })).toEqual(true);
    });

    it("should return false if page option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if page option is undefined", () => {
      expect(() => build({})).toThrow("page option is undefined");
    });

    it("should throw an error if page is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ page: "150" })).toThrow(
        "page option is invalid. Must be a positive integer"
      );
    });

    it("should throw an error if page is less than 0", () => {
      expect(() => build({ page: -1 })).toThrow(
        "page option is invalid. Must be a positive integer"
      );
    });

    it("should throw an error if page is not an integer", () => {
      expect(() => build({ page: 1.5 })).toThrow(
        "page option is invalid. Must be a positive integer"
      );
    });

    it("should return pg:3 if page option is 3", () => {
      expect(build({ page: 3 })).toEqual("pg:3");
    });

    it("should return pg:12 if pg option is 12", () => {
      expect(build({ pg: 12 })).toEqual("pg:12");
    });
  });
});
