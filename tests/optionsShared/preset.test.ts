import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsShared/preset";

describe("preset", () => {
  describe("test", () => {
    it("should return true if preset option is defined", () => {
      expect(test({ preset: ["borders"] })).toEqual(true);
    });

    it("should return true if pr option is defined", () => {
      expect(test({ pr: [] })).toEqual(true);
    });

    it("should return false if preset option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if preset option is undefined", () => {
      expect(() => build({})).toThrow("preset option is undefined");
    });

    it("should throw an error if preset option is not an array", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ preset: "borders" })).toThrow(
        "preset option is not an array"
      );
    });

    it("should throw an error if preset option is empty array", () => {
      expect(() => build({ preset: [] })).toThrow("preset option is empty");
    });

    it("should throw an error if preset option contains non-string items", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ preset: ["paddings", "jpg", 1] })).toThrow(
        "preset option should contain only strings"
      );
    });

    it("should return 'pr:borders' if preset option is ['borders']", () => {
      expect(build({ preset: ["borders"] })).toEqual("pr:borders");
    });

    it("should return 'pr:paddings:jpg' if pr option is ['paddings', 'jpg']", () => {
      expect(build({ pr: ["paddings", "jpg"] })).toEqual("pr:paddings:jpg");
    });
  });
});
