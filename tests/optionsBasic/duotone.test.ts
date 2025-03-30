import { it, expect, describe, assertType } from "vitest";
import { test, build } from "../../src/options/duotone";
import { Options } from "../../src/types";

describe("duotone", () => {
  describe("test", () => {
    it("should test true if duotone is set", () => {
      expect(test({ duotone: { intensity: 1 } })).toBe(true);
    });

    it("should test true if shorthand is set", () => {
      expect(test({ dt: { intensity: 1 } })).toBe(true);
    });

    it("should test false if duotone is false", () => {
      expect(test({})).toBe(false);
    });
  });

  describe("build", () => {
    it("should work with various parameters", () => {
      expect(build({ duotone: { intensity: 0 } })).toBe("dt:0");
      expect(build({ duotone: { intensity: 1 } })).toBe("dt:1");
      expect(build({ duotone: { intensity: 0.4 } })).toBe("dt:0.4");
      expect(build({ duotone: { intensity: 0.4, color1: "b3b3b3" } })).toBe(
        "dt:0.4:b3b3b3"
      );
      expect(build({ duotone: { intensity: 0.4, color2: "b3b3b3" } })).toBe(
        "dt:0.4::b3b3b3"
      );
      expect(
        build({
          duotone: { intensity: 0.4, color1: "000000", color2: "b3b3b3" },
        })
      ).toBe("dt:0.4:000000:b3b3b3");
    });

    it("should validate intensity", () => {
      expect(() => build({ duotone: { intensity: -1 } })).toThrow();
      expect(() => build({ duotone: { intensity: 2 } })).toThrow();
    });
  });

  describe("Check types", () => {
    it("check TS type declaration", () => {
      assertType<Options>({
        duotone: {
          intensity: 0.5,
          color1: "000000",
          color2: "000000",
        },
        dt: {
          intensity: 0.5,
          color1: "000000",
          color2: "000000",
        },
      });
    });
  });
});
