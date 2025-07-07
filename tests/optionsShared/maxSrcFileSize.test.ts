import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsShared/maxSrcFileSize";

describe("maxSrcFileSize", () => {
  describe("test", () => {
    it("should return true if max_src_file_size option is defined", () => {
      expect(test({ max_src_file_size: 18976 })).toEqual(true);
    });

    it("should return true if msfs option is defined", () => {
      expect(test({ msfs: 0 })).toEqual(true);
    });

    it("should return false if max_src_file_size option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if max_src_file_size option is undefined", () => {
      expect(() => build({})).toThrow("max_src_file_size option is undefined");
    });

    it("should throw an error if max_src_file_size is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ max_src_file_size: "150" })).toThrow(
        "max_src_file_size option is not a number"
      );
    });

    it("should throw an error if max_src_file_size is less than 0", () => {
      expect(() => build({ max_src_file_size: -1 })).toThrow(
        "max_src_file_size option value can't be less than 0"
      );
    });

    it("should return msfs:18976 if max_src_file_size option is 18976", () => {
      expect(build({ max_src_file_size: 18976 })).toEqual("msfs:18976");
    });

    it("should return msfs:48676 if msfs option is 48676", () => {
      expect(build({ msfs: 48676 })).toEqual("msfs:48676");
    });

    it("should return msfs:0 if msfs option is 0", () => {
      expect(build({ msfs: 0 })).toEqual("msfs:0");
    });
  });
});
