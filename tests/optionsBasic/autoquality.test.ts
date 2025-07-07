import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/autoquality";

describe("autoquality", () => {
  describe("test", () => {
    it("should return true if autoquality option is defined", () => {
      expect(test({ autoquality: {} })).toEqual(true);
    });

    it("should return true if aq option is defined", () => {
      expect(test({ aq: {} })).toEqual(true);
    });

    it("should return false if autoquality option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if autoquality option is undefined", () => {
      expect(() => build({})).toThrow("autoquality option is undefined");
    });

    it("should throw an error if autoquality.method is not supported", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ autoquality: { method: "unsupported" } })).toThrow(
        "autoquality.method is invalid. Valid values are: none, size, dssim, ml"
      );
    });

    it("should throw an error if autoquality.target is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ autoquality: { target: "0.02" } })).toThrow(
        "autoquality.target is not a number"
      );
    });

    it("should throw an error if autoquality.target is less than 0", () => {
      expect(() => build({ autoquality: { target: -1 } })).toThrow(
        "autoquality.target value can't be less than 0"
      );
    });

    it("should throw an error if autoquality.min_quality is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ autoquality: { min_quality: "70" } })).toThrow(
        "autoquality.min_quality is not a number"
      );
    });

    it("should throw an error if autoquality.min_quality is less than 0", () => {
      expect(() => build({ autoquality: { min_quality: -1 } })).toThrow(
        "autoquality.min_quality value can't be less than 0"
      );
    });

    it("should throw an error if autoquality.min_quality is more than 100", () => {
      expect(() => build({ autoquality: { min_quality: 101 } })).toThrow(
        "autoquality.min_quality value can't be more than 100"
      );
    });

    it("should throw an error if autoquality.max_quality is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ autoquality: { max_quality: "80" } })).toThrow(
        "autoquality.max_quality is not a number"
      );
    });

    it("should throw an error if autoquality.max_quality is less than 0", () => {
      expect(() => build({ autoquality: { max_quality: -1 } })).toThrow(
        "autoquality.max_quality value can't be less than 0"
      );
    });

    it("should throw an error if autoquality.max_quality is more than 100", () => {
      expect(() => build({ autoquality: { max_quality: 101 } })).toThrow(
        "autoquality.max_quality value can't be more than 100"
      );
    });

    it("should throw an error if autoquality.allowed_error is not a number", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ autoquality: { method: "dssim", allowed_error: "0.001" } })
      ).toThrow("autoquality.allowed_error is not a number");
    });

    it("should throw an error if autoquality.allowed_error is less than 0", () => {
      expect(() =>
        build({ autoquality: { method: "ml", allowed_error: -1 } })
      ).toThrow("autoquality.allowed_error value can't be less than 0");
    });

    it("should throw an error if autoquality.allowed_error is more than 1", () => {
      expect(() =>
        build({ autoquality: { method: "dssim", allowed_error: 1.1 } })
      ).toThrow("autoquality.allowed_error value can't be more than 1");
    });

    it("should throw an error if autoquality.allowed_error is defined and autoquality.method is not dssim or ml", () => {
      expect(() =>
        build({ autoquality: { method: "size", allowed_error: 0.001 } })
      ).toThrow(
        "autoquality.allowed_error is applicable only to dssim and ml methods"
      );
    });

    it("should return aq:dssim:0.3:60:85:0.001 if autoquality is {method: dssim, target: 0.03, min_quality: 60, max_quality: 85, allowed_error: 0.001}", () => {
      expect(
        build({
          autoquality: {
            method: "dssim",
            target: 0.03,
            min_quality: 60,
            max_quality: 85,
            allowed_error: 0.001,
          },
        })
      ).toEqual("aq:dssim:0.03:60:85:0.001");
    });

    it("should return aq:::65:95 if aq is {min_quality: 65, max_quality: 95}", () => {
      expect(
        build({
          aq: {
            min_quality: 65,
            max_quality: 95,
          },
        })
      ).toEqual("aq:::65:95");
    });

    it("should return aq:ml::::0.007 if aq is {method: ml, allowed_error: 0.007}", () => {
      expect(
        build({
          aq: {
            method: "ml",
            allowed_error: 0.007,
          },
        })
      ).toEqual("aq:ml::::0.007");
    });

    it("should correctly handle 0 values for numeric properties", () => {
      expect(
        build({
          aq: {
            method: "dssim",
            min_quality: 0,
            max_quality: 0,
            allowed_error: 0,
            target: 0,
          },
        })
      ).toEqual("aq:dssim:0:0:0:0");
    });
  });
});
