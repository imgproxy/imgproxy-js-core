import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/drawDetections";

describe("drawDetections", () => {
  describe("test", () => {
    it("should return true if draw in draw_detections option is defined and class_names is undefined", () => {
      expect(test({ draw_detections: { draw: "t" } })).toEqual(true);
    });

    it("should return true if draw in dd option is defined and class_names is undefined", () => {
      expect(test({ dd: { draw: "t" } })).toEqual(true);
    });

    it("should return false if draw detections option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if draw_detections options are undefined ", () => {
      expect(() => build({})).toThrow("draw_detections option is undefined");
    });

    it("should throw an error if draw is undefined", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error.
        build({ draw_detections: { class_names: ["face", "comma"] } })
      ).toThrow("draw in draw_detections option is required");
    });

    it("should return dd:t if draw is true and class_names is undefined", () => {
      expect(build({ dd: { draw: true } })).toEqual("dd:t");
    });

    it("should return dd:t if draw is 1 and class_names is undefined", () => {
      expect(build({ draw_detections: { draw: 1 } })).toEqual("dd:t");
    });

    it("should return dd:t:face:comma if draw is true and class_names is ['face', 'comma']", () => {
      expect(
        build({
          dd: { draw: true, class_names: ["face", "comma"] },
        })
      ).toEqual("dd:t:face:comma");
    });

    it("should return dd:t:face:comma:pie if draw is 1 and class_names is ['face', 'comma', 'pie']", () => {
      expect(
        build({
          draw_detections: { draw: 1, class_names: ["face", "comma", "pie"] },
        })
      ).toEqual("dd:t:face:comma:pie");
    });

    it("should return dd:t:face if draw is 't' and class_names is ['face']", () => {
      expect(
        build({
          dd: { draw: "t", class_names: ["face"] },
        })
      ).toEqual("dd:t:face");
    });

    it("should return dd:f if draw is false and class_names is undefined", () => {
      expect(build({ dd: { draw: false } })).toEqual("dd:f");
    });

    it("should return dd:f:pad if draw is 0 and class_names is ['pad']", () => {
      expect(
        // @ts-expect-error: Let's ignore an error.
        build({ draw_detections: { draw: 0, class_names: ["pad"] } })
      ).toEqual("dd:f:pad");
    });

    it("should return dd:f:pad:border if draw is any string (except 't') and class_names is ['pad', 'border']", () => {
      expect(
        build({ dd: { draw: "true", class_names: ["pad", "border"] } })
      ).toEqual("dd:f:pad:border");
    });
  });
});
