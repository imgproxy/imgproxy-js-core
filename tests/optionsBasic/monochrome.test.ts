import { it, expect, describe, assertType } from "vitest";
import { test, build } from "../../src/options/monochrome";
import { Options } from "../../src/types";

describe("monochrome", () => {
  describe("test", () => {
    it("should test true if monochrome is set", () => {
      expect(test({ monochrome: { intensity: 1 } })).toBe(true);
    });

    it("should test true if mc is set", () => {
      expect(test({ mc: { intensity: 1 } })).toBe(true);
    });

    it("should test false if monochrome is false", () => {
      expect(test({})).toBe(false);
    });
  });

  describe("build", () => {
    it("should work with various parameters", () => {
      expect(build({ monochrome: { intensity: 0 } })).toBe("mc:0");
      expect(build({ monochrome: { intensity: 1 } })).toBe("mc:1");
      expect(build({ monochrome: { intensity: 0.4 } })).toBe("mc:0.4");
      expect(build({ monochrome: { intensity: 0.4, color: "b3b3b3" } })).toBe(
        "mc:0.4:b3b3b3"
      );
    });

    it("should validate intensity", () => {
      expect(() => build({ monochrome: { intensity: -1 } })).toThrow();
      expect(() => build({ monochrome: { intensity: 2 } })).toThrow();
    });
  });

  describe("Check types", () => {
    it("check TS type declaration", () => {
      assertType<Options>({
        monochrome: {
          intensity: 0.5,
          color: "000000",
        },
        mc: {
          intensity: 0.5,
          color: "000000",
        },
      });
    });
  });
});
