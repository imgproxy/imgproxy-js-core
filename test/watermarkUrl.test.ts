import { describe, expect, it } from "vitest";
import { test, build } from "../src/options/watermarkUrl";

describe("watermarkUrl", () => {
  describe("test", () => {
    it("should return true if watermark_url option is defined", () => {
      expect(
        test({ watermark_url: "aHR0cHM6Ly9leGFtcGxlLmNvbS93YXRlcm1hcmsucG5n" })
      ).toEqual(true);
    });

    it("should return true if wmu option is defined", () => {
      expect(
        test({ wmu: "aHR0cHM6Ly9leGFtcGxlLmNvbS93YXRlcm1hcmsucG5n" })
      ).toEqual(true);
    });

    it("should return false if watermark_url option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should return throw an error if watermark_url option is undefined", () => {
      expect(() => build({})).toThrow("watermark_url option is undefined");
    });

    it("should return throw an error if watermark_url is not a string", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ watermark_url: 1 })).toThrow(
        "watermark_url option is not a string"
      );
    });

    it("should return wmu:aHR0cHM6Ly9leGFtcGxlLmNvbS93YXRlcm1hcmsucG5n if watermark_url option is aHR0cHM6Ly9leGFtcGxlLmNvbS93YXRlcm1hcmsucG5n", () => {
      expect(
        build({
          watermark_url: "aHR0cHM6Ly9leGFtcGxlLmNvbS93YXRlcm1hcmsucG5n",
        })
      ).toEqual("wmu:aHR0cHM6Ly9leGFtcGxlLmNvbS93YXRlcm1hcmsucG5n");
    });

    it("should return wmu:aHR0cHM6Ly9leGFtcGxlLmNvbS93YXRlcm1hcmsuanBn if wmu option is aHR0cHM6Ly9leGFtcGxlLmNvbS93YXRlcm1hcmsuanBn", () => {
      expect(
        build({
          wmu: "aHR0cHM6Ly9leGFtcGxlLmNvbS93YXRlcm1hcmsuanBn",
        })
      ).toEqual("wmu:aHR0cHM6Ly9leGFtcGxlLmNvbS93YXRlcm1hcmsuanBn");
    });
  });
});
