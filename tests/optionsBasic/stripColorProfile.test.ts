import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/stripColorProfile";

describe("stripColorProfile", () => {
  describe("test", () => {
    it("should return true if strip_color_profile option is defined", () => {
      expect(test({ strip_color_profile: true })).toEqual(true);
    });

    it("should return true if strip_color_profile option is false", () => {
      expect(test({ scp: false })).toEqual(true);
    });

    it("should return false if strip_color_profile option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if scp option is defined", () => {
      expect(test({ scp: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if strip_color_profile option is undefined", () => {
      expect(() => build({})).toThrow(
        "strip_color_profile option is undefined"
      );
    });

    it("should return 't' if strip_color_profile option is true", () => {
      expect(build({ strip_color_profile: true })).toEqual("scp:t");
    });

    it("should return 't' if scp option is t", () => {
      expect(build({ scp: "t" })).toEqual("scp:t");
    });

    it("should return 't' if strip_color_profile is 1", () => {
      expect(build({ strip_color_profile: 1 })).toEqual("scp:t");
    });

    it("should return 'f' if scp is false", () => {
      expect(build({ scp: false })).toEqual("scp:f");
    });

    it("should return 'f' if strip_color_profile is 0", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(build({ strip_color_profile: 0 })).toEqual("scp:f");
    });

    it("should return 'f' if scp is string (except 't')", () => {
      expect(build({ scp: "true" })).toEqual("scp:f");
    });
  });
});
