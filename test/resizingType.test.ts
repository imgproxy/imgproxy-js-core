import { describe, expect, it } from "vitest";
import { test, build } from "../src/options/resizingType";

describe("resizingType", () => {
  describe("test", () => {
    it("should return true if resizing_type option is defined", () => {
      expect(test({ resizing_type: "fill" })).toEqual(true);
    });

    it("should return false if resizing_type option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if rt option is defined", () => {
      expect(test({ rt: "fill" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if resizing_type option is undefined", () => {
      expect(() => build({})).toThrow("resizing_type option is undefined");
    });

    it("should throw an error if resizing_type is not one of 'fit', 'fill', 'fill_down', 'force', 'auto'", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ resizing_type: "foo" })).toThrow(
        "resizing_type option is not correct. You can use: fit, fill, fill_down, force, auto"
      );
    });

    it("should return rt:fill if resizing_type option is 'fill'", () => {
      expect(build({ resizing_type: "fill" })).toEqual("rt:fill");
    });

    it("should return rt:fit if rt option is 'fit'", () => {
      expect(build({ rt: "fit" })).toEqual("rt:fit");
    });
  });
});
