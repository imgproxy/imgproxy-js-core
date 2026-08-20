import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsShared/cacheTags";

describe("cacheTags", () => {
  describe("test", () => {
    it("should return true if cache_tags option is defined", () => {
      expect(test({ cache_tags: ["tag1"] })).toEqual(true);
    });

    it("should return true if ct option is defined", () => {
      expect(test({ ct: [] })).toEqual(true);
    });

    it("should return false if cache_tags option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if cache_tags option is undefined", () => {
      expect(() => build({})).toThrow("cache_tags option is undefined");
    });

    it("should throw an error if cache_tags option is not an array", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ cache_tags: "tag1" })).toThrow(
        "cache_tags option is not an array"
      );
    });

    it("should throw an error if cache_tags option is empty array", () => {
      expect(() => build({ cache_tags: [] })).toThrow(
        "cache_tags option is empty"
      );
    });

    it("should throw an error if cache_tags option contains non-string items", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ cache_tags: ["tag1", 1] })).toThrow(
        "cache_tags option should contain only strings"
      );
    });

    it("should return 'ct:tag1' if cache_tags option is ['tag1']", () => {
      expect(build({ cache_tags: ["tag1"] })).toEqual("ct:tag1");
    });

    it("should return 'ct:tag1:tag2' if ct option is ['tag1', 'tag2']", () => {
      expect(build({ ct: ["tag1", "tag2"] })).toEqual("ct:tag1:tag2");
    });
  });
});
