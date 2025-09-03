import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/colorProfile";

describe("colorProfile", () => {
  describe("test", () => {
    it("should return true if color_profile option is defined", () => {
      expect(test({ color_profile: "srgb" })).toEqual(true);
    });

    it("should return true if cp option is defined", () => {
      expect(test({ cp: "cmyk" })).toEqual(true);
    });

    it("should return true if icc option is defined", () => {
      expect(test({ icc: "custom_profile" })).toEqual(true);
    });

    it("should return false if color_profile option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if color_profile option is undefined", () => {
      expect(() => build({})).toThrow("color_profile option is undefined");
    });

    it("should return 'cp:srgb' if color_profile option is 'srgb'", () => {
      expect(build({ color_profile: "srgb" })).toEqual("cp:srgb");
    });

    it("should return 'cp:cmyk' if cp option is 'cmyk'", () => {
      expect(build({ cp: "cmyk" })).toEqual("cp:cmyk");
    });

    it("should return 'cp:custom_profile' if icc option is 'custom_profile'", () => {
      expect(build({ icc: "custom_profile" })).toEqual("cp:custom_profile");
    });

    it("should handle custom profile filename", () => {
      expect(build({ color_profile: "my-custom-profile" })).toEqual(
        "cp:my-custom-profile"
      );
    });

    it("should handle percent-encoded filename", () => {
      expect(build({ cp: "profile%20with%20spaces" })).toEqual(
        "cp:profile%20with%20spaces"
      );
    });
  });
});
