import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/dpr";

describe("dpr", () => {
  describe("test", () => {
    it("should return true if dpr option is defined", () => {
      expect(test({ dpr: 1 })).toEqual(true);
    });

    it("should return false if dpr option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if dpr option is undefined", () => {
      expect(() => build({})).toThrow("dpr option is undefined");
    });

    it("should throw an error if dpr is not a number", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(() => build({ dpr: "1" })).toThrow("dpr option is not a number");
    });

    it("should throw an error if dpr is less than 0", () => {
      expect(() => build({ dpr: -1 })).toThrow(
        "dpr option value can't be less then 0"
      );
    });

    it("should return value of dpr if dpr option is defined", () => {
      expect(build({ dpr: 100 })).toEqual("dpr:100");
    });

    it("should correctly handle 0 value", () => {
      expect(build({ dpr: 0 })).toEqual("dpr:0");
    });
  });
});
