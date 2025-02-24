import { describe, expect, expectTypeOf, it } from "vitest";
import { test, build } from "../../src/options/watermarkRotate";

const NAMES = ["watermark_rotate", "wm_rot", "wmr"] as const;

describe.each(NAMES)("%s", name => {
  describe("test", () => {
    it("should return true if option is defined", () => {
      expect(test({ [name]: 45 })).toEqual(true);
    });

    it("should return true if option is equal 0", () => {
      expect(test({ [name]: 0 })).toEqual(true);
    });

    it("should return false if option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if option is undefined", () => {
      expect(() => build({})).toThrow("watermark_rotate option is undefined");
    });

    it("should throw an error if option is not a number", () => {
      expect(() => build({ [name]: "150" })).toThrow(
        "watermark_rotate option is not a number"
      );
    });

    it("should buld result", () => {
      expect(build({ [name]: 45 })).toEqual("wmr:45");
    });

    it("should correctly handle 0 value", () => {
      expect(build({ [name]: 0 })).toEqual("wmr:0");
    });
  });
});

it("watermark_rotate option should have `number` type", () => {
  expectTypeOf(build).parameter(0).toEqualTypeOf<{
    watermark_rotate?: number;
    wm_rot?: number;
    wmr?: number;
  }>();
  expectTypeOf(build).returns.toEqualTypeOf<string>();
});
