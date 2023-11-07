import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/zoom";

describe("zoom", () => {
  describe("test", () => {
    it("should return true if zoom option is defined", () => {
      expect(test({ zoom: 1 })).toEqual(true);
    });

    it("should return false if zoom option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if z option is defined", () => {
      expect(test({ z: 1 })).toEqual(true);
    });

    it("should return true if zoom option is object", () => {
      expect(test({ zoom: { zoom_x: 0.4, zoom_y: 0.5 } })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if zoom option is undefined", () => {
      expect(() => build({})).toThrow("zoom option is undefined");
    });

    it("should throw an error if zoom is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ zoom: "1" })).toThrow("zoom option is not a number");
    });

    it("should throw an error if zoom is less than 0", () => {
      expect(() => build({ z: -1 })).toThrow("zoom cannot be negative");
    });

    it("should throw an error if zoom_x is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ zoom: { zoom_x: "1", zoom_y: 0.5 } })).toThrow(
        "zoom.zoom_x is not a number"
      );
    });

    it("should throw an error if zoom_x is less than 0", () => {
      expect(() => build({ zoom: { zoom_x: -1, zoom_y: 0.5 } })).toThrow(
        "zoom.zoom_x cannot be negative"
      );
    });

    it("should throw an error if zoom_x is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ zoom: { zoom_y: 0.5 } })).toThrow(
        "zoom.zoom_x is undefined"
      );
    });

    it("should throw an error if zoom_y is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ zoom: { zoom_x: 1.5 } })).toThrow(
        "zoom.zoom_y is undefined"
      );
    });

    it("should return z:15 if z option is 15", () => {
      expect(build({ z: 15 })).toEqual("z:15");
    });

    it("should return z:0.4:0.5 if zoom option is { zoom_x: 0.4, zoom_y: 0.5 }", () => {
      expect(build({ zoom: { zoom_x: 0.4, zoom_y: 0.5 } })).toEqual(
        "z:0.4:0.5"
      );
    });
  });
});
