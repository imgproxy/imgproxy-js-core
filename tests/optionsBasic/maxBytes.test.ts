import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/maxBytes";

describe("maxBytes", () => {
  describe("test", () => {
    it("should return true if max_bytes option is defined", () => {
      expect(test({ max_bytes: 150 })).toEqual(true);
    });

    it("should return true if mb option is defined", () => {
      expect(test({ mb: 500 })).toEqual(true);
    });

    it("should return false if max_bytes option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if max_bytes option is undefined", () => {
      expect(() => build({})).toThrow("max bytes option is undefined");
    });

    it("should throw an error if max_bytes is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ max_bytes: "150" })).toThrow(
        "max bytes option must be a number"
      );
    });

    it("should throw an error if max_bytes is less than 0", () => {
      expect(() => build({ max_bytes: -1 })).toThrow(
        "max bytes option must be a positive number"
      );
    });

    it("should return mb:150 if max_bytes option is 150", () => {
      expect(build({ max_bytes: 150 })).toEqual("mb:150");
    });

    it("should return mb:500 if mb option is 500", () => {
      expect(build({ mb: 500 })).toEqual("mb:500");
    });
  });
});
