import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/ajust";

describe("ajust", () => {
  describe("test", () => {
    it("should return true if ajust option is defined", () => {
      expect(test({ aj: {} })).toEqual(true);
    });
    it("should return false if ajust option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if aj option is defined", () => {
      expect(test({ aj: {} })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if ajust options are undefined", () => {
      expect(() => build({})).toThrow("ajust option is undefined");
    });

    it("should throw an error if brightness begger than 255", () => {
      expect(() => build({ ajust: { brightness: 300 } })).toThrow(
        "ajust.brightness value can't be more than 255"
      );
    });

    it("should throw an error if brightness less than -255", () => {
      expect(() => build({ ajust: { brightness: -300 } })).toThrow(
        "ajust.brightness value can't be less then -255"
      );
    });

    it("should return value of brightness, contrast and saturation", () => {
      expect(
        build({ ajust: { brightness: 40, contrast: 1.5, saturation: 3 } })
      ).toEqual("aj:40:1.5:3");
    });

    it("should return value of brightness, contrast and saturation if aj option is defined", () => {
      expect(
        build({ aj: { brightness: -100, contrast: 0.5, saturation: 0.1 } })
      ).toEqual("aj:-100:0.5:0.1");
    });

    it("should return value of brightness and saturation if contrast is undefined", () => {
      expect(build({ ajust: { brightness: 150, saturation: 2.3 } })).toEqual(
        "aj:150::2.3"
      );
    });

    it("should return value of brightness and contrast if saturation is undefined", () => {
      expect(build({ ajust: { brightness: 10, contrast: 0.5 } })).toEqual(
        "aj:10:0.5:"
      );
    });

    it("should return value of contrast and saturation if brightness is undefined", () => {
      expect(build({ ajust: { contrast: 1.5, saturation: 3 } })).toEqual(
        "aj::1.5:3"
      );
    });

    it("should return value of brightness if contrast and saturation are undefined", () => {
      expect(build({ ajust: { brightness: 10 } })).toEqual("aj:10::");
    });

    it("should return value of contrast if brightness and saturation are undefined", () => {
      expect(build({ ajust: { contrast: 0.5 } })).toEqual("aj::0.5:");
    });

    it("should return value of saturation if brightness and contrast are undefined", () => {
      expect(build({ ajust: { saturation: 1.2 } })).toEqual("aj:::1.2");
    });
  });
});
