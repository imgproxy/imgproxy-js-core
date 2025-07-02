import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/cropAspectRatio";

describe("cropAspectRatio", () => {
  describe("test", () => {
    it("should return true if crop_aspect_ratio option is defined", () => {
      expect(test({ crop_aspect_ratio: { aspect_ratio: 1.5 } })).toEqual(true);
    });

    it("should return true if crop_ar option is defined", () => {
      expect(test({ crop_ar: { aspect_ratio: 1.1 } })).toEqual(true);
    });

    it("should return true if car option is defined", () => {
      expect(test({ car: { aspect_ratio: 1.1 } })).toEqual(true);
    });

    it("should return false if crop_aspect_ratio option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if crop_aspect_ratio option is undefined", () => {
      expect(() => build({})).toThrow("crop_aspect_ratio option is undefined");
    });

    it("should throw an error if aspect_ratio option is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ crop_aspect_ratio: {} })).toThrow(
        "crop_aspect_ratio.aspect_ratio is undefined"
      );
    });

    it("should throw an error if aspect_ratio is not a number", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ crop_aspect_ratio: { aspect_ratio: "1.5" } })
      ).toThrow("crop_aspect_ratio.aspect_ratio is not a number");
    });

    it("should throw an error if aspect_ratio is less than 0", () => {
      expect(() =>
        build({ crop_aspect_ratio: { aspect_ratio: -1 } })
      ).toThrowError(
        "crop_aspect_ratio.aspect_ratio value can't be less then 0"
      );
    });

    it("should return crop_ar:1.5 if crop_aspect_ratio aspect_ratio is 1.5", () => {
      expect(build({ crop_aspect_ratio: { aspect_ratio: 1.5 } })).toEqual(
        "crop_ar:1.5"
      );
    });

    it("should return crop_ar:1.1 if crop_ar aspect_ratio is 1.1", () => {
      expect(build({ crop_ar: { aspect_ratio: 1.1 } })).toEqual("crop_ar:1.1");
    });

    it("should return crop_ar:0 if aspect_ratio is 0", () => {
      expect(build({ crop_aspect_ratio: { aspect_ratio: 0 } })).toEqual(
        "crop_ar:0"
      );
    });

    it("should return crop_ar:1.5:t if crop_aspect_ratio aspect_ratio is 1.5 and enlarge is true", () => {
      expect(
        build({ crop_aspect_ratio: { aspect_ratio: 1.5, enlarge: true } })
      ).toEqual("crop_ar:1.5:t");
    });

    it("should return crop_ar:1.1:t if crop_ar aspect_ratio is 1.1 and enlarge is 1", () => {
      expect(build({ crop_ar: { aspect_ratio: 1.1, enlarge: 1 } })).toEqual(
        "crop_ar:1.1:t"
      );
    });

    it("should return crop_ar:2:t if aspect_ratio is 2.0 and enlarge is 't'", () => {
      expect(
        build({ crop_aspect_ratio: { aspect_ratio: 2.0, enlarge: "t" } })
      ).toEqual("crop_ar:2:t");
    });

    it("should return crop_ar:1.5:f if aspect_ratio is 1.5 and enlarge is false", () => {
      expect(
        build({ crop_aspect_ratio: { aspect_ratio: 1.5, enlarge: false } })
      ).toEqual("crop_ar:1.5:f");
    });

    it("should return crop_ar:1.1:f if aspect_ratio is 1.1 and enlarge is 'f'", () => {
      expect(build({ crop_ar: { aspect_ratio: 1.1, enlarge: "f" } })).toEqual(
        "crop_ar:1.1:f"
      );
    });
  });
});
