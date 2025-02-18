import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/objectsPosition";

describe("objectsPosition", () => {
  describe("test", () => {
    it.each(["objects_position", "obj_pos", "op"])(
      "Should return true if %s option is defined",
      option => {
        expect(test({ [option]: {} })).toBe(true);
      }
    );

    it("Should return false if it is undefined", () => {
      expect(test({})).toBe(false);
    });
  });

  describe("build", () => {
    it("Should return objects_position with empty xOffset and yOffset", () => {
      expect(build({ objects_position: { type: "ce" } })).toEqual("op:ce::");
    });

    it("Should return objects_position with defined xOffset and yOffset", () => {
      expect(
        build({ objects_position: { type: "ce", xOffset: 10, yOffset: 15 } })
      ).toEqual("op:ce:10:15");
    });

    it("Should return objects_position with defined xOffset and yOffset", () => {
      expect(
        build({ objects_position: { type: "ce", xOffset: 0, yOffset: 0 } })
      ).toEqual("op:ce:0:0");
    });

    it("Should return objects_position with `fp` type and default `x` and `y`", () => {
      expect(build({ objects_position: { type: "fp" } })).toEqual("op:fp::");
    });

    it("Should return objects_position with `fp` type and specified `x` and `y`", () => {
      expect(
        build({ objects_position: { type: "fp", x: 0.1, y: 0.2 } })
      ).toEqual("op:fp:0.1:0.2");
    });

    it("Should correctly handle min and max values for `fp` type", () => {
      expect(build({ objects_position: { type: "fp", x: 0, y: 0 } })).toEqual(
        "op:fp:0:0"
      );
      expect(build({ objects_position: { type: "fp", x: 1, y: 1 } })).toEqual(
        "op:fp:1:1"
      );
    });

    it("Should return objects_position with `prop` type", () => {
      expect(build({ objects_position: { type: "prop" } })).toEqual("op:prop");
    });

    it.each([
      { type: "ddd" },
      { type: "ce", xOffset: "10" },
      { type: "ce", yOffset: "10" },
      { type: "fp", x: 10 },
      { type: "fp", x: -0.1 },
      { type: "fp", x: "0.1" },
      { type: "fp", y: 10 },
      { type: "fp", y: -0.1 },
      { type: "fp", y: "0.1" },
    ])(`Should throw when incorrect params are provided %j`, op => {
      // @ts-expect-error: ignore an error for js clients
      expect(() => build({ objects_position: op })).toThrow();
    });
  });
});
