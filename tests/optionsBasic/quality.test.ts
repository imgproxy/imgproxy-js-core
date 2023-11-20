import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/quality";

describe("quality", () => {
  describe("test", () => {
    it("should return true if quality option is defined", () => {
      expect(test({ quality: 77 })).toEqual(true);
    });

    it("should return true if q option is defined", () => {
      expect(test({ q: 25 })).toEqual(true);
    });

    it("should return false if quality option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if quality option is undefined", () => {
      expect(() => build({})).toThrow("quality option is undefined");
    });

    it("should throw an error if quality is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ quality: "test" })).toThrow(
        "quality option is not a number"
      );
    });

    it("should throw an error if quality is less than 0", () => {
      expect(() => build({ quality: -1 })).toThrow(
        "quality option value can't be less then 0"
      );
    });

    it("should throw an error if quality is greater than 100", () => {
      expect(() => build({ quality: 101 })).toThrow(
        "quality option value can't be more than 100"
      );
    });

    it("should return q:77 if quality option is 77", () => {
      expect(build({ quality: 77 })).toEqual("q:77");
    });
  });
});
