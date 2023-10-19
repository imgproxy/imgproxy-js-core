import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/blurhash";

describe("blurhash", () => {
  describe("test", () => {
    it("should return true if blurhash option is defined", () => {
      expect(test({ blurhash: { x_components: 3, y_components: 3 } })).toEqual(
        true
      );
    });

    it("should return true if bh option is defined", () => {
      expect(test({ bh: { x_components: 8, y_components: 5 } })).toEqual(true);
    });

    it("should return false if blurhash option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if blurhash option is undefined", () => {
      expect(() => build({})).toThrow("blurhash option is undefined");
    });

    it("should throw an error if blurhash.x_components is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ blurhash: { y_components: 3 } })).toThrow(
        "blurhash.x_components option is undefined"
      );
    });

    it("should throw an error if blurhash.y_components is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ blurhash: { x_components: 3 } })).toThrow(
        "blurhash.y_components option is undefined"
      );
    });

    it("should throw an error if blurhash x or y components is not a number", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ blurhash: { x_components: "3", y_components: "1" } })
      ).toThrow(
        "blurhash.x_components and blurhash.y_components must be numbers"
      );
    });

    it("should throw an error if blurhash.x_components is less than 0", () => {
      expect(() =>
        build({ blurhash: { x_components: -1, y_components: 3 } })
      ).toThrow("blurhash.x_components can't be a negative");
    });

    it("should throw an error if blurhash.x_components is more than 9", () => {
      expect(() =>
        build({ blurhash: { x_components: 10, y_components: 7 } })
      ).toThrow("blurhash.x_components can't be more than 9");
    });

    it("should throw an error if blurhash.y_components is less than 0", () => {
      expect(() =>
        build({ blurhash: { x_components: 8, y_components: -4 } })
      ).toThrow("blurhash.y_components can't be a negative");
    });

    it("should throw an error if blurhash.y_components is more than 9", () => {
      expect(() =>
        build({ blurhash: { x_components: 3, y_components: 10 } })
      ).toThrow("blurhash.y_components can't be more than 9");
    });

    it("should return bh:3:3 if blurhash is {x_components: 3, y_components: 3}", () => {
      expect(build({ blurhash: { x_components: 3, y_components: 3 } })).toEqual(
        "bh:3:3"
      );
    });

    it("should return bh:8:5 if bh.x_components is 8 and bh.y_components is 5", () => {
      expect(build({ bh: { x_components: 8, y_components: 5 } })).toEqual(
        "bh:8:5"
      );
    });
  });
});
