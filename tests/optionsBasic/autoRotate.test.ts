import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/autoRotate";

describe("autoRotate", () => {
  describe("test", () => {
    it("should return true if auto_rotate option is defined", () => {
      expect(test({ auto_rotate: 1 })).toEqual(true);
    });

    it("should return true if auto_rotate option is false", () => {
      expect(test({ ar: false })).toEqual(true);
    });

    it("should return false if auto_rotate option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if ar option is defined", () => {
      expect(test({ ar: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should return 't' if auto_rotate option is 1", () => {
      expect(build({ auto_rotate: 1 })).toEqual("ar:t");
    });

    it("should return 't' if ar option is 't'", () => {
      expect(build({ ar: "t" })).toEqual("ar:t");
    });

    it("should return 't' if auto_rotate is true", () => {
      expect(build({ auto_rotate: true })).toEqual("ar:t");
    });

    it("should return 'f' if auto_rotate is false", () => {
      expect(build({ auto_rotate: false })).toEqual("ar:f");
    });

    it("should return 'f' if auto_rotate is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ auto_rotate: 0 })).toEqual("ar:f");
    });

    it("should return 'f' if auto_rotate is string (except 't')", () => {
      expect(build({ auto_rotate: "true" })).toEqual("ar:f");
    });

    it("should throw an error if auto_rotate option is undefined", () => {
      expect(() => build({})).toThrow("auto rotate option is undefined");
    });
  });
});
