import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/detectObjects";

describe("detect_objects", () => {
  describe("test", () => {
    it("should return true if detect_objects option is defined", () => {
      expect(test({ detect_objects: 1 })).toEqual(true);
    });

    it("should return true if detect_objects option is false", () => {
      expect(test({ do: false })).toEqual(true);
    });

    it("should return false if detect_objects option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if do option is defined", () => {
      expect(test({ do: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if detect_objects option is undefined", () => {
      expect(() => build({})).toThrow("detect_objects option is undefined");
    });

    it("should return 't' if detect_objects option is 1", () => {
      expect(build({ detect_objects: 1 })).toEqual("do:t");
    });

    it("should return 't' if s option is 't'", () => {
      expect(build({ do: "t" })).toEqual("do:t");
    });

    it("should return 't' if detect_objects option is true", () => {
      expect(build({ detect_objects: true })).toEqual("do:t");
    });

    it("should return 'f' if detect_objects option is false", () => {
      expect(build({ detect_objects: false })).toEqual("do:f");
    });

    it("should return 'f' if detect_objects option is 0", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(build({ detect_objects: 0 })).toEqual("do:f");
    });

    it("should return 'f' if detect_objects option is string (except 't')", () => {
      expect(build({ detect_objects: "true" })).toEqual("do:f");
    });
  });
});
