import { it, expect, describe, assertType } from "vitest";
import { test, build } from "../../src/options/colorize";
import { Options } from "../../src/types";

describe("colorize", () => {
  describe("test", () => {
    it("should test true if colorize is set", () => {
      expect(test({ colorize: { opacity: 0.5 } })).toBe(true);
    });

    it("should test true if col is set", () => {
      expect(test({ col: { opacity: 0.5 } })).toBe(true);
    });

    it("should test false if colorize is not set", () => {
      expect(test({})).toBe(false);
    });
  });

  describe("build", () => {
    it("should work with opacity only", () => {
      expect(build({ colorize: { opacity: 0 } })).toBe("col:0");
      expect(build({ colorize: { opacity: 1 } })).toBe("col:1");
      expect(build({ colorize: { opacity: 0.4 } })).toBe("col:0.4");
    });

    it("should work with opacity and color", () => {
      expect(build({ colorize: { opacity: 0.5, color: "ff0000" } })).toBe(
        "col:0.5:ff0000"
      );
    });

    it("should work with opacity, color, and keepAlpha", () => {
      expect(
        build({ colorize: { opacity: 0.5, color: "ff0000", keepAlpha: true } })
      ).toBe("col:0.5:ff0000:1");
      expect(
        build({ colorize: { opacity: 0.5, color: "ff0000", keepAlpha: false } })
      ).toBe("col:0.5:ff0000:0");
    });

    it("should work with opacity and keepAlpha without color", () => {
      expect(build({ colorize: { opacity: 0.5, keepAlpha: true } })).toBe(
        "col:0.5::1"
      );
      expect(build({ colorize: { opacity: 0.5, keepAlpha: false } })).toBe(
        "col:0.5::0"
      );
    });

    it("should validate opacity", () => {
      expect(() => build({ colorize: { opacity: -1 } })).toThrow();
      expect(() => build({ colorize: { opacity: 2 } })).toThrow();
    });
  });

  describe("Check types", () => {
    it("check TS type declaration", () => {
      assertType<Options>({
        colorize: {
          opacity: 0.5,
          color: "ff0000",
          keepAlpha: true,
        },
        col: {
          opacity: 0.5,
          color: "ff0000",
          keepAlpha: false,
        },
      });
    });
  });
});
