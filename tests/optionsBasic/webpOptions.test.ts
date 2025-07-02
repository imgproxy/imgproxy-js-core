import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/webpOptions";

describe("webpOptions", () => {
  describe("test", () => {
    it("should return true if webp_options option is defined", () => {
      expect(test({ webp_options: "lossy" })).toEqual(true);
    });

    it("should return true if webpo option is defined", () => {
      expect(test({ webpo: "lossless" })).toEqual(true);
    });

    it("should return false if webp_options option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if webp_options is undefined", () => {
      expect(() => build({})).toThrow("webp_options option is undefined");
    });

    it("should throw an error if webp_options is invalid", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ webp_options: "invalid" })).toThrow(
        "webp_options option is invalid. Valid values are: lossy, near_lossless, lossless"
      );
    });

    it("should throw an error if webp_options is a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ webp_options: 1 })).toThrow(
        "webp_options option is invalid. Valid values are: lossy, near_lossless, lossless"
      );
    });

    it("should return webpo:lossy if webp_options is lossy", () => {
      expect(build({ webp_options: "lossy" })).toEqual("webpo:lossy");
    });

    it("should return webpo:near_lossless if webpo option is near_lossless", () => {
      expect(build({ webpo: "near_lossless" })).toEqual("webpo:near_lossless");
    });

    it("should support `smart_subsample` option", () => {
      expect(build({ webp_options: { compression: "lossy" } })).toEqual(
        "webpo:lossy"
      );

      expect(
        build({ webp_options: { compression: "lossy", smart_subsample: true } })
      ).toEqual("webpo:lossy:true");

      expect(
        build({
          webp_options: { compression: "lossy", smart_subsample: false },
        })
      ).toEqual("webpo:lossy:false");
    });

    it("should support `preset` option", () => {
      expect(
        build({ webp_options: { compression: "lossy", preset: "photo" } })
      ).toEqual("webpo:lossy::photo");

      expect(
        build({
          webp_options: {
            compression: "lossy",
            smart_subsample: true,
            preset: "picture",
          },
        })
      ).toEqual("webpo:lossy:true:picture");

      expect(
        build({
          webp_options: {
            compression: "lossless",
            smart_subsample: false,
            preset: "drawing",
          },
        })
      ).toEqual("webpo:lossless:false:drawing");
    });

    it("should throw an error if preset is invalid", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ webp_options: { compression: "lossy", preset: "invalid" } })
      ).toThrow(
        "webp_options.preset is invalid. Valid values are: default, photo, picture, drawing, icon, text"
      );
    });
  });
});
