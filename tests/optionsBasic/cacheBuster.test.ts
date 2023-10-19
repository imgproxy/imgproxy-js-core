import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/cacheBuster";

describe("cacheBuster", () => {
  describe("test", () => {
    it("should return true if cacheBuster option is defined", () => {
      expect(test({ cachebuster: "reset" })).toEqual(true);
    });

    it("should return true if cacheBuster option is false", () => {
      expect(test({ cb: "empty" })).toEqual(true);
    });

    it("should return false if cacheBuster option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if cacheBuster option is undefined", () => {
      expect(() => build({})).toThrow("cachebuster option is undefined");
    });

    it("should throw an error if cacheBuster option is not a string", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(() => build({ cachebuster: 1 })).toThrow(
        "cachebuster option must be a string"
      );
    });

    it("should return 'cb:reset' if cacheBuster option is 'reset'", () => {
      expect(build({ cachebuster: "reset" })).toEqual("cb:reset");
    });

    it("should return 'cb:empty' if cb option is 'empty'", () => {
      expect(build({ cb: "empty" })).toEqual("cb:empty");
    });
  });
});
