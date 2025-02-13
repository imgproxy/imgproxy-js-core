import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/gradient";

describe("gradient", () => {
  describe("test", () => {
    it("should return true if gradient option is defined", () => {
      expect(test({ gradient: { opacity: 0.5 } })).toEqual(true);
    });

    it("should return false if gradient option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if gr option is defined", () => {
      expect(test({ gr: { opacity: 0.3 } })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should return throw an error if gradient option is undefined", () => {
      expect(() => build({})).toThrow("gradient option is undefined");
    });

    it("should throw an error if opacity is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ gradient: { color: "964b00" } })).toThrow(
        "gradient.opacity is undefined"
      );
    });

    it("should throw an error if opacity is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ gradient: { opacity: "0.5" } })).toThrow(
        "gradient.opacity is not a number"
      );
    });

    it("should throw an error if opacity is less than 0", () => {
      expect(() => build({ gradient: { opacity: -0.5 } })).toThrow(
        "gradient.opacity value can't be less then 0"
      );
    });

    it("should throw an error if opacity is bigger than 1", () => {
      expect(() => build({ gradient: { opacity: 1.5 } })).toThrow(
        "gradient.opacity value can't be more than 1"
      );
    });

    it("should throw an error if color is not a string", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ gradient: { opacity: 0.5, color: 250 } })).toThrow(
        "gradient.color is not a string"
      );
    });

    it("should throw an error if color is not hexadecimal", () => {
      expect(() =>
        build({ gradient: { opacity: 0.5, color: "#964b0" } })
      ).toThrow("gradient.color must be hexadecimal");
    });

    it("should throw an error if color is not 3, 6 or 8 characters long", () => {
      expect(() =>
        build({ gradient: { opacity: 0.5, color: "964b0" } })
      ).toThrow(
        "gradient.color must be 3, 6 or 8 characters long (with alpha)"
      );
    });

    it("should throw an error if direction is not a string", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ gradient: { opacity: 0.5, direction: 250 } })
      ).toThrow("gradient.direction is not a string");
    });

    it("should throw an error if direction is not one of: down, up, right, left", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ gradient: { opacity: 0.5, direction: "top" } })
      ).toThrow(
        "gradient.direction is invalid. Valid values are: down, up, right, left"
      );
    });

    it("should throw an error if start is not a number", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ gradient: { opacity: 0.5, start: "0.5" } })
      ).toThrow("gradient.start is not a number");
    });

    it("should throw an error if start is less than 0", () => {
      expect(() => build({ gradient: { opacity: 0.5, start: -0.5 } })).toThrow(
        "gradient.start value can't be less then 0"
      );
    });

    it("should throw an error if start is bigger than 1", () => {
      expect(() => build({ gradient: { opacity: 0.5, start: 1.5 } })).toThrow(
        "gradient.start value can't be more than 1"
      );
    });

    it("should throw an error if stop is not a number", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ gradient: { opacity: 0.5, stop: "0.5" } })
      ).toThrow("gradient.stop is not a number");
    });

    it("should throw an error if stop is less than 0", () => {
      expect(() => build({ gradient: { opacity: 0.5, stop: -0.5 } })).toThrow(
        "gradient.stop value can't be less then 0"
      );
    });

    it("should throw an error if stop is bigger than 1", () => {
      expect(() => build({ gradient: { opacity: 0.5, stop: 1.5 } })).toThrow(
        "gradient.stop value can't be more than 1"
      );
    });

    it("should return gr:0.5:964b00:down:0.2:0.8 if all gradient parametres is defined", () => {
      expect(
        build({
          gradient: {
            opacity: 0.5,
            color: "964b00",
            direction: "down",
            start: 0.2,
            stop: 0.8,
          },
        })
      ).toEqual("gr:0.5:964b00:down:0.2:0.8");
    });

    it("should return gr:0.5:964b00 if only opacity and color is defined", () => {
      expect(
        build({
          gradient: {
            opacity: 0.5,
            color: "964b00",
          },
        })
      ).toEqual("gr:0.5:964b00");
    });

    it("should return gr:0.2::down if only opacity and direction is defined", () => {
      expect(
        build({
          gradient: {
            opacity: 0.2,
            direction: "down",
          },
        })
      ).toEqual("gr:0.2::down");
    });

    it("should return gr:0.15::::0.85 if only opacity and stop is defined", () => {
      expect(
        build({
          gradient: {
            opacity: 0.15,
            stop: 0.85,
          },
        })
      ).toEqual("gr:0.15::::0.85");
    });

    it("should correctly handle 0 opacity", () => {
      expect(
        build({
          gradient: {
            opacity: 0,
            stop: 0.85,
          },
        })
      ).toEqual("gr:0::::0.85");
    });
  });
});
