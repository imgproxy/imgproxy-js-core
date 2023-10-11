import { describe, expect, it } from "vitest";
import { test, build } from "../src/options/autoRotate";

describe("ajust", () => {
  describe("test", () => {
    it("should return true if ajust option is defined", () => {
      expect(test({ auto_rotate: 1 })).toEqual(true);
    });
    it("should return false if ajust option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if aj option is defined", () => {
      expect(test({ ar: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should return value of auto rotate if auto_rotate option is defined", () => {
      expect(build({ auto_rotate: 1 })).toEqual("auto_rotate:1");
    });

    it("should return value of auto rotate if ar option is defined", () => {
      expect(build({ ar: "t" })).toEqual("auto_rotate:t");
    });

    it("should throw an error if auto rotate option is undefined", () => {
      expect(() => build({})).toThrow("auto rotate option is undefined");
    });
  });
});
