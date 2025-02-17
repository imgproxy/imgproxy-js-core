import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/dpi";

describe("dpi", () => {
  describe("test", () => {
    it("should return true if dpi option is defined", () => {
      expect(test({ dpi: 150 })).toEqual(true);
    });

    it("should return false if dpi option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if dpi option is undefined", () => {
      expect(() => build({})).toThrow("dpi option is undefined");
    });

    it("should throw an error if dpi is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ dpi: "150" })).toThrow("dpi option is not a number");
    });

    it("should return dpi:150 if dpi option is 150", () => {
      expect(build({ dpi: 150 })).toEqual("dpi:150");
    });

    it("should correctly handle 0 value", () => {
      expect(build({ dpi: 0 })).toEqual("dpi:0");
    });
  });
});
