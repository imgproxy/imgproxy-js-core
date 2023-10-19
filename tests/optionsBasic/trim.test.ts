import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/trim";

describe("trim", () => {
  describe("test", () => {
    it("should return true if trim option is defined", () => {
      expect(test({ trim: { threshold: 20 } })).toEqual(true);
    });

    it("should return false if trim option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if t option is defined", () => {
      expect(test({ t: { threshold: 100 } })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if trim option is undefined", () => {
      expect(() => build({})).toThrow("trim options are undefined");
    });

    it("should throw an error if threshold is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ trim: { color: "00ff00", equal_hor: 1 } })).toThrow(
        "threshold in trim option is required"
      );
    });

    it("should throw an error if trim is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ trim: { threshold: "1" } })).toThrow(
        "threshold in trim is not a number"
      );
    });

    it("should throw an error if color has invalid format", () => {
      expect(() => build({ trim: { threshold: 25, color: "#ff" } })).toThrow(
        "color in trim option must be hexadecimal"
      );
    });

    it("should throw an error if color has invalid length", () => {
      expect(() => build({ trim: { threshold: 25, color: "fff0" } })).toThrow(
        "color in trim option must be 3, 6 or 8 characters"
      );
    });

    it("should return t:20 if trim option is defined and other parametres are undefined", () => {
      expect(build({ trim: { threshold: 20 } })).toEqual("t:20");
    });

    it("should return t:20:ff0000 if threshold and color are defined", () => {
      expect(build({ trim: { threshold: 20, color: "ff0000" } })).toEqual(
        "t:20:ff0000"
      );
    });

    it("should return t:20::t if threshold, color and equal_hor are defined", () => {
      expect(
        build({ trim: { threshold: 20, color: "ff0000", equal_hor: 1 } })
      ).toEqual("t:20:ff0000:t");
    });

    it("should return t:20:::t if threshold and equal_ver are defined", () => {
      expect(build({ trim: { threshold: 20, equal_ver: "t" } })).toEqual(
        "t:20:::t"
      );
    });

    it("should return t:70:f:t if threshold is 70, equal_hor is false and equal_ver is true", () => {
      expect(
        build({ trim: { threshold: 70, equal_hor: false, equal_ver: true } })
      ).toEqual("t:70::f:t");
    });

    it("should return t:66::f:f if threshold is 66, equal_hor is 'need' and equal_ver is 0", () => {
      expect(
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ trim: { threshold: 66, equal_hor: "need", equal_ver: 0 } })
      ).toEqual("t:66::f:f");
    });
  });
});
