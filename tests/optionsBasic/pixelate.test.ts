import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/pixelate";

describe("pixelate", () => {
  describe("test", () => {
    it("should return true if pixelate option is defined", () => {
      expect(test({ pixelate: 33 })).toEqual(true);
    });

    it("should return false if pixelate option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if pix option is defined", () => {
      expect(test({ pix: 55 })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if pixelate option is undefined", () => {
      expect(() => build({})).toThrow("pixelate option is undefined");
    });

    it("should throw an error if pixelate is not a number", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(() => build({ pixelate: "33" })).toThrow(
        "pixelate option is not a number"
      );
    });

    it("should throw an error if pixelate is less than 0", () => {
      expect(() => build({ pixelate: -1 })).toThrow(
        "pixelate option value can't be less then 0"
      );
    });

    it("should return pix:11 if pixelate option is 11", () => {
      expect(build({ pixelate: 11 })).toEqual("pix:11");
    });

    it("should return pix:7 if pix option is 7", () => {
      expect(build({ pix: 7 })).toEqual("pix:7");
    });
  });
});
