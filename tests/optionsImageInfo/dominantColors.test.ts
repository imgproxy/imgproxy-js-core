import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/dominantColors";

describe("dominant_colors", () => {
  describe("test", () => {
    it("should return true if dominant_colors option is defined", () => {
      expect(test({ dominant_colors: { dominant_colors: 1 } })).toEqual(true);
    });

    it("should return true if dc option is defined", () => {
      expect(test({ dc: { dominant_colors: "none" } })).toEqual(true);
    });

    it("should return false if dominant_colors option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if dominant_colors option is undefined", () => {
      expect(() => build({})).toThrow("dominant_colors option is undefined");
    });

    it("should throw an error if dominant_colors.dominant_colors is undefined", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ dominant_colors: { build_missed: "t" } })
      ).toThrow("dominant_colors.dominant_colors is undefined");
    });

    it("should return dc:t if dominant_colors.dominant_colors option is 1", () => {
      expect(build({ dominant_colors: { dominant_colors: 1 } })).toEqual(
        "dc:t"
      );
    });

    it("should return dc:f:t if dominant_colors is {dominant_colors: 0, ignore_transparent: true}", () => {
      expect(
        build({
          // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
          dominant_colors: { dominant_colors: 0, build_missed: true },
        })
      ).toEqual("dc:f:t");
    });

    it("should return dc:t:f if dc option is {dominant_colors: 't', ignore_transparent: 'empty'}", () => {
      expect(
        build({ dc: { dominant_colors: "t", build_missed: "empty" } })
      ).toEqual("dc:t:f");
    });
  });
});
