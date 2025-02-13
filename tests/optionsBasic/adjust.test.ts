import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/adjust";

describe("adjust", () => {
  describe("test", () => {
    it("should return true if adjust option is defined", () => {
      expect(test({ adjust: {} })).toEqual(true);
    });
    it("should return false if adjust option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if a option is defined", () => {
      expect(test({ a: {} })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if adjust options are undefined", () => {
      expect(() => build({})).toThrow("adjust option is undefined");
    });

    it("should throw an error if brightness begger than 255", () => {
      expect(() => build({ adjust: { brightness: 300 } })).toThrow(
        "adjust.brightness value can't be more than 255"
      );
    });

    it("should throw an error if brightness less than -255", () => {
      expect(() => build({ adjust: { brightness: -300 } })).toThrow(
        "adjust.brightness value can't be less then -255"
      );
    });

    it("should return value of brightness, contrast and saturation", () => {
      expect(
        build({ adjust: { brightness: 40, contrast: 1.5, saturation: 3 } })
      ).toEqual("a:40:1.5:3");
    });

    it("should return value of brightness, contrast and saturation if a option is defined", () => {
      expect(
        build({ a: { brightness: -100, contrast: 0.5, saturation: 0.1 } })
      ).toEqual("a:-100:0.5:0.1");
    });

    it("should return value of brightness and saturation if contrast is undefined", () => {
      expect(build({ adjust: { brightness: 150, saturation: 2.3 } })).toEqual(
        "a:150::2.3"
      );
    });

    it("should return value of brightness and contrast if saturation is undefined", () => {
      expect(build({ adjust: { brightness: 10, contrast: 0.5 } })).toEqual(
        "a:10:0.5:"
      );
    });

    it("should return value of contrast and saturation if brightness is undefined", () => {
      expect(build({ adjust: { contrast: 1.5, saturation: 3 } })).toEqual(
        "a::1.5:3"
      );
    });

    it("should return value of brightness if contrast and saturation are undefined", () => {
      expect(build({ adjust: { brightness: 10 } })).toEqual("a:10::");
    });

    it("should return value of contrast if brightness and saturation are undefined", () => {
      expect(build({ adjust: { contrast: 0.5 } })).toEqual("a::0.5:");
    });

    it("should return value of saturation if brightness and contrast are undefined", () => {
      expect(build({ adjust: { saturation: 1.2 } })).toEqual("a:::1.2");
    });

    it("should correctly handle 0 for `brightness`, `contrast`, and `saturation`", () => {
      expect(
        build({ adjust: { brightness: 0, contrast: 0, saturation: 0 } })
      ).toEqual("a:0:0:0");
    });
  });
});
