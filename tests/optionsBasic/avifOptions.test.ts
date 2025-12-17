import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/avifOptions";

describe("avifOptions", () => {
  describe("test", () => {
    it("should return true if avif_options option is defined", () => {
      expect(test({ avif_options: "auto" })).toEqual(true);
    });

    it("should return true if avifo option is defined", () => {
      expect(test({ avifo: "on" })).toEqual(true);
    });

    it("should return false if avif_options option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if avif_options is undefined", () => {
      expect(() => build({})).toThrow("avif_options option is undefined");
    });

    it("should throw an error if avif_options is invalid", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ avif_options: "invalid" })).toThrow(
        "avif_options option is invalid. Valid values are: auto, on, off"
      );
    });

    it("should throw an error if avif_options is a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ avif_options: 1 })).toThrow(
        "avif_options option is invalid. Valid values are: auto, on, off"
      );
    });

    it("should return avifo:auto if avif_options is auto", () => {
      expect(build({ avif_options: "auto" })).toEqual("avifo:auto");
    });

    it("should return avifo:on if avifo option is on", () => {
      expect(build({ avifo: "on" })).toEqual("avifo:on");
    });

    it("should return avifo:off if avif_options is off", () => {
      expect(build({ avif_options: "off" })).toEqual("avifo:off");
    });

    it("should support object notation with subsample property", () => {
      expect(build({ avif_options: { subsample: "auto" } })).toEqual(
        "avifo:auto"
      );

      expect(build({ avif_options: { subsample: "on" } })).toEqual("avifo:on");

      expect(build({ avif_options: { subsample: "off" } })).toEqual(
        "avifo:off"
      );
    });

    it("should throw an error if subsample is invalid in object notation", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ avif_options: { subsample: "invalid" } })
      ).toThrow(
        "avif_options option is invalid. Valid values are: auto, on, off"
      );
    });
  });
});
