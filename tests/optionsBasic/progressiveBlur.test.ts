import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/progressiveBlur";

describe("progressiveBlur", () => {
  describe("test", () => {
    it("should return true if progressive_blur option is defined", () => {
      expect(test({ progressive_blur: { sigma: 10 } })).toEqual(true);
    });

    it("should return false if progressive_blur option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if pbl option is defined", () => {
      expect(test({ pbl: { sigma: 5 } })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if progressive_blur option is undefined", () => {
      expect(() => build({})).toThrow("progressive_blur option is undefined");
    });

    it("should throw an error if sigma is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ progressive_blur: { direction: "up" } })).toThrow(
        "progressive_blur.sigma is undefined"
      );
    });

    it("should throw an error if sigma is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ progressive_blur: { sigma: "10" } })).toThrow(
        "progressive_blur.sigma is not a number"
      );
    });

    it("should throw an error if sigma is less than 0", () => {
      expect(() => build({ progressive_blur: { sigma: -1 } })).toThrow(
        "progressive_blur.sigma value can't be less than 0"
      );
    });

    it("should throw an error if direction is not a string or number", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ progressive_blur: { sigma: 10, direction: true } })
      ).toThrow("progressive_blur.direction is not a string");
    });

    it("should throw an error if direction is a string not among: down, up, right, left", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ progressive_blur: { sigma: 10, direction: "top" } })
      ).toThrow(
        "progressive_blur.direction is invalid. Valid values are: down, up, right, left"
      );
    });

    it("should accept numeric angle for direction", () => {
      expect(build({ progressive_blur: { sigma: 10, direction: 45 } })).toEqual(
        "pbl:10:45"
      );
    });

    it("should throw an error if start is not a number", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ progressive_blur: { sigma: 10, start: "0.5" } })
      ).toThrow("progressive_blur.start is not a number");
    });

    it("should throw an error if start is less than 0", () => {
      expect(() =>
        build({ progressive_blur: { sigma: 10, start: -0.5 } })
      ).toThrow("progressive_blur.start value can't be less than 0");
    });

    it("should throw an error if start is bigger than 1", () => {
      expect(() =>
        build({ progressive_blur: { sigma: 10, start: 1.5 } })
      ).toThrow("progressive_blur.start value can't be more than 1");
    });

    it("should throw an error if stop is not a number", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ progressive_blur: { sigma: 10, stop: "0.5" } })
      ).toThrow("progressive_blur.stop is not a number");
    });

    it("should throw an error if stop is less than 0", () => {
      expect(() =>
        build({ progressive_blur: { sigma: 10, stop: -0.5 } })
      ).toThrow("progressive_blur.stop value can't be less than 0");
    });

    it("should throw an error if stop is bigger than 1", () => {
      expect(() =>
        build({ progressive_blur: { sigma: 10, stop: 1.5 } })
      ).toThrow("progressive_blur.stop value can't be more than 1");
    });

    it("should return pbl:10:down:0.2:0.8 if all progressive_blur parametres is defined", () => {
      expect(
        build({
          progressive_blur: {
            sigma: 10,
            direction: "down",
            start: 0.2,
            stop: 0.8,
          },
        })
      ).toEqual("pbl:10:down:0.2:0.8");
    });

    it("should return pbl:10 if only sigma is defined", () => {
      expect(build({ progressive_blur: { sigma: 10 } })).toEqual("pbl:10");
    });

    it("should return pbl:10:right if only sigma and direction is defined", () => {
      expect(build({ pbl: { sigma: 10, direction: "right" } })).toEqual(
        "pbl:10:right"
      );
    });

    it("should return pbl:10:::0.85 if only sigma and stop is defined", () => {
      expect(build({ progressive_blur: { sigma: 10, stop: 0.85 } })).toEqual(
        "pbl:10:::0.85"
      );
    });

    it("should correctly handle 0 start", () => {
      expect(
        build({ progressive_blur: { sigma: 10, start: 0, stop: 0.85 } })
      ).toEqual("pbl:10::0:0.85");
    });

    it("should correctly handle 0 sigma", () => {
      expect(build({ progressive_blur: { sigma: 0 } })).toEqual("pbl:0");
    });
  });
});
