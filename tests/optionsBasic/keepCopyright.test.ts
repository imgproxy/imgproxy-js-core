import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/keepCopyright";

describe("keepCopyright", () => {
  describe("test", () => {
    it("should return true if keep_copyright option is defined", () => {
      expect(test({ keep_copyright: true })).toEqual(true);
    });

    it("should return true if keep_copyright option is false", () => {
      expect(test({ kcr: false })).toEqual(true);
    });

    it("should return false if keep_copyright option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if kcr option is defined", () => {
      expect(test({ kcr: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if keep_copyright option is undefined", () => {
      expect(() => build({})).toThrow("keep_copyright option is undefined");
    });

    it("should return 't' if keep_copyright option is true", () => {
      expect(build({ keep_copyright: true })).toEqual("kcr:t");
    });

    it("should return 't' if kcr option is t", () => {
      expect(build({ kcr: "t" })).toEqual("kcr:t");
    });

    it("should return 't' if keep_copyright is 1", () => {
      expect(build({ keep_copyright: 1 })).toEqual("kcr:t");
    });

    it("should return 'f' if kcr is false", () => {
      expect(build({ kcr: false })).toEqual("kcr:f");
    });

    it("should return 'f' if keep_copyright is 0", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(build({ keep_copyright: 0 })).toEqual("kcr:f");
    });

    it("should return 'f' if kcr is string (except 't')", () => {
      expect(build({ kcr: "true" })).toEqual("kcr:f");
    });
  });
});
