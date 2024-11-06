import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/padding";

describe("padding", () => {
  describe("test", () => {
    it("should return true if padding option is defined", () => {
      expect(test({ padding: 150 })).toEqual(true);
    });

    it("should return true if pd option is defined", () => {
      expect(test({ pd: 500 })).toEqual(true);
    });

    it("should return false if padding option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if padding option is undefined", () => {
      expect(() => build({})).toThrow("padding option is undefined");
    });

    it("should throw an error if padding is not a number or object", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ padding: "150" })).toThrow(
        "padding option is not a number or object"
      );
    });

    it("should throw an error if pd is less than 0", () => {
      expect(() => build({ pd: -1 })).toThrow(
        "padding option value can't be less then 0"
      );
    });

    it("should throw an error if padding.top is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ padding: { top: "150", right: 20 } })).toThrow(
        "padding.top is not a number"
      );
    });

    it("should throw an error if pd.right is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ pd: { top: 150, right: "20" } })).toThrow(
        "padding.right is not a number"
      );
    });

    it("should throw an error if padding.bottom is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ padding: { right: 20, bottom: "20" } })).toThrow(
        "padding.bottom is not a number"
      );
    });

    it("should throw an error if pd.left is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ pd: { top: 20, left: "20" } })).toThrow(
        "padding.left is not a number"
      );
    });

    it("should return pd:150 if padding option is 150", () => {
      expect(build({ padding: 150 })).toEqual("pd:150");
    });

    it("should return pd:20::10 if pd option is { top: 20, bottom: 10 }", () => {
      expect(build({ pd: { top: 20, bottom: 10 } })).toEqual("pd:20::10");
    });

    it("should return pd:20:10 if pd option is { top: 20, right: 10 }", () => {
      expect(build({ pd: { top: 20, right: 10 } })).toEqual("pd:20:10");
    });

    it("should return pd::::5 if pd option is { left: 5 }", () => {
      expect(build({ pd: { left: 5 } })).toEqual("pd::::5");
    });

    it("should return pd:5:0:0:5 if pd option is { top: 10, bottom: 0, left: 5, right: 0 }", () => {
      expect(build({ pd: { top: 10, bottom: 0, left: 5, right: 0 } })).toEqual(
        "pd:10:0:0:5"
      );
    });
  });
});
