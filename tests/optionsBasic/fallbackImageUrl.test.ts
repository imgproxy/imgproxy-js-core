import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/fallbackImageUrl";

describe("fallbackImageUrl", () => {
  describe("test", () => {
    it("should return true if fallback_image_url option is defined", () => {
      expect(
        test({ fallback_image_url: "aHR0cHM6Ly9leGFtcGxlLmNvbS9pbWFnZS5qcGc=" })
      ).toEqual(true);
    });

    it("should return true if fiu option is defined", () => {
      expect(test({ fiu: "aHR0cHM6Ly9leGFtcGxlLmNvbS9waWMucG5n" })).toEqual(
        true
      );
    });

    it("should return false if fallback_image_url option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if fallback_image_url option is undefined", () => {
      expect(() => build({})).toThrow("fallback_image_url option is undefined");
    });

    it("should throw an error if fallback_image_url is not a string", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ fallback_image_url: 150 })).toThrow(
        "fallback_image_url option is not a string"
      );
    });

    it("should return fiu:aHR0cHM6Ly90ZXN0Lmhvc3RpbmcuY29tL3BpYy5wbmc= if fallback_image_url option is aHR0cHM6Ly9leGFtcGxlLmNvbS9waWMucG5n", () => {
      expect(
        build({
          fallback_image_url: "aHR0cHM6Ly90ZXN0Lmhvc3RpbmcuY29tL3BpYy5wbmc=",
        })
      ).toEqual("fiu:aHR0cHM6Ly90ZXN0Lmhvc3RpbmcuY29tL3BpYy5wbmc=");
    });

    it("should return fiu:aHR0cHM6Ly9leGFtcGxlLmNvbS9waWMucG5n if fiu option is aHR0cHM6Ly9leGFtcGxlLmNvbS9waWMucG5n", () => {
      expect(build({ fiu: "aHR0cHM6Ly9leGFtcGxlLmNvbS9waWMucG5n" })).toEqual(
        "fiu:aHR0cHM6Ly9leGFtcGxlLmNvbS9waWMucG5n"
      );
    });
  });
});
