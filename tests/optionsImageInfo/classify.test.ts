import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/classify";

describe("classify", () => {
  describe("test", () => {
    it("should return true if classify option is defined", () => {
      expect(test({ classify: { top_k: 3 } })).toEqual(true);
    });

    it("should return true if cl option is defined", () => {
      expect(test({ cl: { top_k: 0 } })).toEqual(true);
    });

    it("should return false if classify option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if classify option is undefined", () => {
      expect(() => build({})).toThrow("classify option is undefined");
    });

    it("should throw an error if classify.top_k is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ classify: { class_names: ["Bus"] } })).toThrow(
        "classify.top_k is undefined"
      );
    });

    it("should throw an error if classify.top_k is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ classify: { top_k: "3" } })).toThrow(
        "classify.top_k is not a number"
      );
    });

    it("should throw an error if classify.top_k is less than 0", () => {
      expect(() => build({ classify: { top_k: -1 } })).toThrow(
        "classify.top_k value can't be less than 0"
      );
    });

    it("should throw an error if classify.top_k is not an integer", () => {
      expect(() => build({ classify: { top_k: 1.5 } })).toThrow(
        "classify.top_k is must be an integer"
      );
    });

    it("should return cl:3 if classify is {top_k: 3}", () => {
      expect(build({ classify: { top_k: 3 } })).toEqual("cl:3");
    });

    it("should return cl:0 if classify is {top_k: 0}", () => {
      expect(build({ classify: { top_k: 0 } })).toEqual("cl:0");
    });

    it("should return cl:2:Bus:Person if class names are passed", () => {
      expect(
        build({ cl: { top_k: 2, class_names: ["Bus", "Person"] } })
      ).toEqual("cl:2:Bus:Person");
    });

    it("should return cl:3 if class names are empty", () => {
      expect(build({ classify: { top_k: 3, class_names: [] } })).toEqual(
        "cl:3"
      );
    });
  });
});
