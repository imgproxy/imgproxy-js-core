import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/blurAreas";

describe("blurAreas", () => {
  describe("test", () => {
    it("should return true if blur_areas option is defined", () => {
      expect(
        test({
          blur_areas: {
            sigma: 2,
            areas: [{ left: 0, top: 0, width: 0.5, height: 0.5 }],
          },
        })
      ).toEqual(true);
    });

    it("should return true if ba option is defined", () => {
      expect(
        test({
          ba: {
            sigma: 2,
            areas: [{ left: 0, top: 0, width: 0.5, height: 0.5 }],
          },
        })
      ).toEqual(true);
    });

    it("should return false if blur_areas option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if blur_areas option is undefined", () => {
      expect(() => build({})).toThrow("blur_areas option is undefined");
    });

    it("should throw an error if blur_areas.sigma option is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ blur_areas: { areas: [] } })).toThrow(
        "blur_areas.sigma is not a number"
      );
    });

    it("should throw an error if blur_areas.sigma is not a number", () => {
      expect(() =>
        build({
          // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
          blur_areas: { sigma: "2", areas: [] },
        })
      ).toThrow("blur_areas.sigma is not a number");
    });

    it("should throw an error if blur_areas.sigma is less than 0", () => {
      expect(() => build({ blur_areas: { sigma: -1, areas: [] } })).toThrow(
        "blur_areas.sigma value can't be less than 0"
      );
    });

    it("should throw an error if blur_areas.areas is not an array", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ blur_areas: { sigma: 2 } })).toThrow(
        "blur_areas.areas is not an array"
      );
    });

    it("should throw an error if blur_areas.areas is empty", () => {
      expect(() => build({ blur_areas: { sigma: 2, areas: [] } })).toThrow(
        "blur_areas.areas is empty"
      );
    });

    it("should throw an error if area.left is not a number", () => {
      expect(() =>
        build({
          blur_areas: {
            sigma: 2,
            // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
            areas: [{ top: 0, width: 0.1, height: 0.1 }],
          },
        })
      ).toThrow("blur_areas.areas[0].left is not a number");
    });

    it("should throw an error if area.left is out of range", () => {
      expect(() =>
        build({
          blur_areas: {
            sigma: 2,
            areas: [{ left: 1.5, top: 0, width: 0.1, height: 0.1 }],
          },
        })
      ).toThrow("blur_areas.areas[0].left value can't be more than 1");
    });

    it("should build a url with a single area", () => {
      expect(
        build({
          blur_areas: {
            sigma: 2,
            areas: [{ left: 0.1, top: 0.2, width: 0.3, height: 0.4 }],
          },
        })
      ).toEqual("ba:2:0.1:0.2:0.3:0.4");
    });

    it("should build a url with multiple areas using `ba` alias", () => {
      expect(
        build({
          ba: {
            sigma: 5,
            areas: [
              { left: 0, top: 0, width: 0.5, height: 0.5 },
              { left: 0.5, top: 0.5, width: 0.25, height: 0.25 },
            ],
          },
        })
      ).toEqual("ba:5:0:0:0.5:0.5:0.5:0.5:0.25:0.25");
    });
  });
});
