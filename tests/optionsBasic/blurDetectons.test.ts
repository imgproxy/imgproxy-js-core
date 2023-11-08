import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/blurDetections";

describe("blurDetectons", () => {
  describe("test", () => {
    it("should return true if blur_detections option is defined", () => {
      expect(test({ blur_detections: { sigma: 2 } })).toEqual(true);
    });

    it("should return true if bd option is defined", () => {
      expect(test({ bd: { sigma: 2 } })).toEqual(true);
    });

    it("should return false if blur_detections option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if blur_detections option is undefined", () => {
      expect(() => build({})).toThrow("blur_detections option is undefined");
    });

    it("should throw an error if blur_detections.sigma option is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ blur_detections: {} })).toThrow(
        "blur_detections.sigma is undefined"
      );
    });

    it("should throw an error if blur_detections.sigma is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ blur_detections: { sigma: "2" } })).toThrow(
        "blur_detections.sigma is not a number"
      );
    });

    it("should return bd:2 if blur_detections.sigma option is 2", () => {
      expect(build({ blur_detections: { sigma: 2 } })).toEqual("bd:2");
    });

    it("should return bd:0.6:persona:mask if bd.sigma option is 0.6 and class_names is ['persona', 'mask']", () => {
      expect(
        build({ bd: { sigma: 2, class_names: ["persona", "mask"] } })
      ).toEqual("bd:2:persona:mask");
    });
  });
});
