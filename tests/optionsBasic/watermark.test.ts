import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/watermark";

describe("watermark", () => {
  describe("test", () => {
    it("should return true if watermark option is defined", () => {
      expect(test({ watermark: { opacity: 0.2 } })).toEqual(true);
    });

    it("should return true if wm option is defined", () => {
      expect(test({ wm: { opacity: 0.8 } })).toEqual(true);
    });

    it("should return false if watermark option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should return throw an error if watermark option is undefined", () => {
      expect(() => build({})).toThrow("watermark option is undefined");
    });

    it("should return throw an error if opacity is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ watermark: {} })).toThrow(
        "watermark.opacity is undefined"
      );
    });

    it("should return throw an error if opacity is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ watermark: { opacity: "0.2" } })).toThrow(
        "watermark.opacity is not a number"
      );
    });

    it("should return throw an error if opacity is less than 0", () => {
      expect(() => build({ watermark: { opacity: -1 } })).toThrow(
        "watermark.opacity value can't be less then 0"
      );
    });

    it("should return throw an error if opacity is greater than 1", () => {
      expect(() => build({ watermark: { opacity: 2 } })).toThrow(
        "watermark.opacity value can't be more than 1"
      );
    });

    it("should return throw an error if position is not a string", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ watermark: { opacity: 0.2, position: 1 } })).toThrow(
        "watermark.position is not a string"
      );
    });

    it("should return throw an error if position is not correct", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ watermark: { opacity: 0.2, position: "top" } })
      ).toThrow(
        "watermark.position is invalid. Valid values are: ce, no, so, ea, we, noea, nowe, soea, sowe, re, ch"
      );
    });

    it("should accept ch position", () => {
      expect(build({ watermark: { opacity: 0.2, position: "ch" } })).toEqual(
        "wm:0.2:ch"
      );
    });

    it("should return throw an error if x_offset is not a number", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ watermark: { opacity: 0.2, x_offset: "1" } })
      ).toThrow("watermark.x_offset is not a number");
    });

    it("should return throw an error if y_offset is not a number", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ watermark: { opacity: 0.2, y_offset: "1" } })
      ).toThrow("watermark.y_offset is not a number");
    });

    it("should return throw an error if scale is not a number", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ watermark: { opacity: 0.2, scale: "1" } })
      ).toThrow("watermark.scale is not a number");
    });

    it("should return wm:0.2 if watermark option is { opacity: 0.2 }", () => {
      expect(build({ watermark: { opacity: 0.2 } })).toEqual("wm:0.2");
    });

    it("should return wm:0.8:::-5 if wm option is { opacity: 0.8, y_offset: -5 }", () => {
      expect(build({ wm: { opacity: 0.8, y_offset: -5 } })).toEqual(
        "wm:0.8:::-5"
      );
    });

    it("should return wm:0.8:nowe:5:10:0.2 if wm option is { opacity: 0.8, position: 'nowe', x_offset: 5, y_offset: 10, scale: 0.2 }", () => {
      expect(
        build({
          wm: {
            opacity: 0.8,
            position: "nowe",
            x_offset: 5,
            y_offset: 10,
            scale: 0.2,
          },
        })
      ).toEqual("wm:0.8:nowe:5:10:0.2");
    });

    it("should return wm:0.8:re:::2 if wm option is { opacity: 0.8, position: 're', scale: 2 }", () => {
      expect(
        build({
          wm: {
            opacity: 0.8,
            position: "re",
            scale: 2,
          },
        })
      ).toEqual("wm:0.8:re:::2");
    });

    it("should return wm:0.8:soea if watermark option is { opacity: 0.8, position: 'soea' }", () => {
      expect(
        build({
          watermark: {
            opacity: 0.8,
            position: "soea",
          },
        })
      ).toEqual("wm:0.8:soea");
    });
  });
});
