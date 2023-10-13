import { describe, expect, it } from "vitest";
import { test, build } from "../src/options/resizingAlgorithm";

describe("resizingAlgorithm", () => {
  describe("test", () => {
    it("should return true if resizing_algorithm option is defined", () => {
      expect(test({ resizing_algorithm: "lanczos3" })).toEqual(true);
    });

    it("should return false if resizing_algorithm option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if ra option is defined", () => {
      expect(test({ ra: "lanczos3" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if resizing_algorithm option is undefined", () => {
      expect(() => build({})).toThrow("resizing_algorithm option is undefined");
    });

    it("should throw an error if resizing_type is not one of 'nearest', 'linear', 'cubic', 'lanczos2', 'lanczos3'", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ resizing_algorithm: "invalid" })).toThrow(
        "resizing_algorithm option is not correct. You can use: 'nearest', 'linear', 'cubic', 'lanczos2', 'lanczos3'"
      );
    });

    it("should return ra:lanczos3 if resizing_algorithm option is 'lanczos3'", () => {
      expect(build({ resizing_algorithm: "lanczos3" })).toEqual("ra:lanczos3");
    });

    it("should return ra:nearest if ra option is 'nearest'", () => {
      expect(build({ ra: "nearest" })).toEqual("ra:nearest");
    });
  });
});
