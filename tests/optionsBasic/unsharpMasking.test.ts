import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/unsharpMasking";

describe("unsharpMasking", () => {
  describe("test", () => {
    it("should return true if unsharp_masking option is defined", () => {
      expect(test({ unsharp_masking: {} })).toEqual(true);
    });

    it("should return true if ush option is defined", () => {
      expect(test({ ush: {} })).toEqual(true);
    });

    it("should return false if unsharp_masking option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if unsharp_masking option is undefined", () => {
      expect(() => build({})).toThrow("unsharp_masking option is undefined");
    });

    it("should throw an error if unsharp_masking.mode is not correct", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ unsharp_masking: { mode: "test" } })).toThrow(
        "unsharp_masking.mode is invalid. Valid values are: auto, none, always"
      );
    });

    it("should throw an error if unsharp_masking.weight is not correct", () => {
      expect(() => build({ unsharp_masking: { weight: -1 } })).toThrow(
        "unsharp_masking.weight value can't be less or equal than 0"
      );
    });

    it("should throw an error if unsharp_masking.weight is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ unsharp_masking: { weight: "test" } })).toThrow(
        "unsharp_masking.weight is not a number"
      );
    });

    it("should throw an error if unsharp_masking.divider is not correct", () => {
      expect(() => build({ unsharp_masking: { divider: -1 } })).toThrow(
        "unsharp_masking.divider value can't be less or equal than 0"
      );
      expect(() => build({ unsharp_masking: { divider: 0 } })).toThrow(
        "unsharp_masking.divider value can't be less or equal than 0"
      );
    });

    it("should throw an error if unsharp_masking.divider is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ unsharp_masking: { divider: "test" } })).toThrow(
        "unsharp_masking.divider is not a number"
      );
    });

    it("should throw an error if unsharp_masking.weight is not greater than zero", () => {
      expect(() => build({ unsharp_masking: { weight: 0 } })).toThrow(
        "unsharp_masking.weight value can't be less or equal than 0"
      );
    });

    it("should return ush:always:0.6:20 if unsharp_masking option is {mode: 'always', weight: 0.6, divider: 20}", () => {
      expect(
        build({ unsharp_masking: { mode: "always", weight: 0.6, divider: 20 } })
      ).toEqual("ush:always:0.6:20");
    });

    it("should return ush:auto if ush option is {mode: 'auto'}", () => {
      expect(build({ ush: { mode: "auto" } })).toEqual("ush:auto");
    });

    it("should return ush::2 if ush option is {weight: 2}", () => {
      expect(build({ ush: { weight: 2 } })).toEqual("ush::2");
    });

    it("should return ush:::7 if ush option is {divider: 7}", () => {
      expect(build({ ush: { divider: 7 } })).toEqual("ush:::7");
    });

    it("should return ush:auto::10 if unsharp_masking option is {mode: 'auto', divider: 10}", () => {
      expect(build({ unsharp_masking: { mode: "auto", divider: 10 } })).toEqual(
        "ush:auto::10"
      );
    });

    it("should return ush::0.6:14 if unsharp_masking option is {weight: '0.6', divider: 14}", () => {
      expect(build({ unsharp_masking: { weight: 0.6, divider: 14 } })).toEqual(
        "ush::0.6:14"
      );
    });
  });
});
