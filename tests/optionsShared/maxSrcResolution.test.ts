import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsShared/maxSrcResolution";

describe("maxSrcResolution", () => {
  describe("test", () => {
    it("should return true if max_src_resolution option is defined", () => {
      expect(test({ max_src_resolution: 8 })).toEqual(true);
    });

    it("should return true if msr option is defined", () => {
      expect(test({ msr: 76 })).toEqual(true);
    });

    it("should return false if max_src_resolution option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if max_src_resolution option is undefined", () => {
      expect(() => build({})).toThrow("max_src_resolution option is undefined");
    });

    it("should throw an error if max_src_resolution option is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ max_src_resolution: "76" })).toThrow(
        "max_src_resolution option is not a number"
      );
    });

    it("should throw an error if max_src_resolution option is less than 0", () => {
      expect(() => build({ max_src_resolution: -1 })).toThrow(
        "max_src_resolution option can't be 0 or less"
      );
    });

    it("should throw an error if max_src_resolution option is 0", () => {
      expect(() => build({ max_src_resolution: 0 })).toThrow(
        "max_src_resolution option can't be 0 or less"
      );
    });

    it("should return 'msr:4' if max_src_resolution option is 4", () => {
      expect(build({ max_src_resolution: 4 })).toEqual("msr:4");
    });

    it("should return 'msr:76' if msr option is 76", () => {
      expect(build({ msr: 76 })).toEqual("msr:76");
    });
  });
});
