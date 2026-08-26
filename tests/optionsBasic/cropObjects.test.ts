import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/cropObjects";

describe("crop_objects", () => {
  describe("test", () => {
    it("should return true if crop_objects option is defined", () => {
      expect(test({ crop_objects: { scale_factor: 1.2 } })).toEqual(true);
    });

    it("should return true if c_obj option is defined", () => {
      expect(test({ c_obj: { scale_factor: 1 } })).toEqual(true);
    });

    it("should return false if the co option is used (co is the contrast keyword)", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(test({ co: { scale_factor: 1 } })).toEqual(false);
    });

    it("should return false if crop_objects option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if crop_objects option is undefined", () => {
      expect(() => build({})).toThrow("crop_objects option is undefined");
    });

    it("should throw an error if crop_objects.scale_factor is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ crop_objects: { class_names: ["face"] } })).toThrow(
        "crop_objects.scale_factor is undefined"
      );
    });

    it("should throw an error if crop_objects.scale_factor is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ crop_objects: { scale_factor: "1.2" } })).toThrow(
        "crop_objects.scale_factor is not a number"
      );
    });

    it("should throw an error if crop_objects.scale_factor is less than 0", () => {
      expect(() => build({ crop_objects: { scale_factor: -1 } })).toThrow(
        "crop_objects.scale_factor value can't be less than 0"
      );
    });

    it("should throw an error if crop_objects.class_names is not an array", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ crop_objects: { scale_factor: 1, class_names: "face" } })
      ).toThrow("crop_objects.class_names is not an array");
    });

    it("should return c_obj:1.2 if crop_objects is {scale_factor: 1.2}", () => {
      expect(build({ crop_objects: { scale_factor: 1.2 } })).toEqual(
        "c_obj:1.2"
      );
    });

    it("should return c_obj:1.2 if c_obj is {scale_factor: 1.2}", () => {
      expect(build({ c_obj: { scale_factor: 1.2 } })).toEqual("c_obj:1.2");
    });

    it("should return c_obj:0 if crop_objects is {scale_factor: 0}", () => {
      expect(build({ crop_objects: { scale_factor: 0 } })).toEqual("c_obj:0");
    });

    it("should return c_obj:1:face if class names are passed", () => {
      expect(
        build({ c_obj: { scale_factor: 1, class_names: ["face"] } })
      ).toEqual("c_obj:1:face");
    });

    it("should return c_obj:1.5:cat:dog if several class names are passed", () => {
      expect(
        build({
          crop_objects: { scale_factor: 1.5, class_names: ["cat", "dog"] },
        })
      ).toEqual("c_obj:1.5:cat:dog");
    });

    it("should return c_obj:1 if class names are empty", () => {
      expect(
        build({ crop_objects: { scale_factor: 1, class_names: [] } })
      ).toEqual("c_obj:1");
    });
  });
});
