import { describe, expect, it } from "vitest";
import { test, build } from "../src/options/crop";

describe("crop", () => {
  describe("test", () => {
    it("should return true if crop option is defined", () => {
      expect(test({ crop: { width: 150, height: 150 } })).toEqual(true);
    });

    it("should return true if c option is defined", () => {
      expect(test({ c: { width: 500, height: 500 } })).toEqual(true);
    });

    it("should return false if crop option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if crop option is undefined", () => {
      expect(() => build({})).toThrow("crop options are undefined");
    });

    it("should throw an error if width option is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ crop: { height: 150 } })).toThrow(
        "crop.width is undefined"
      );
    });

    it("should throw an error if height option is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ c: { width: 150 } })).toThrow(
        "crop.height is undefined"
      );
    });

    it("should throw an error if width is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ crop: { width: "150", height: 150 } })).toThrow(
        "crop.width is not a number"
      );
    });

    it("should throw an error if height is not a number", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ c: { width: 150, height: "150" } })).toThrow(
        "crop.height is not a number"
      );
    });

    it("should throw an error if width is less than 0", () => {
      expect(() => build({ crop: { width: -1, height: 150 } })).toThrowError(
        "crop.width is can't be negative"
      );
    });

    it("should throw an error if height is less than 0", () => {
      expect(() => build({ c: { width: 150, height: -1 } })).toThrowError(
        "crop.height is can't be negative"
      );
    });

    it("should return c:150:150 if crop option is 150x150", () => {
      expect(build({ crop: { width: 150, height: 150 } })).toEqual("c:150:150");
    });

    it("should return c:500:500 if c option is 500x500", () => {
      expect(build({ c: { width: 500, height: 500 } })).toEqual("c:500:500");
    });

    it("should return c:150:150:sm if crop option is 150x150 and type gravity is 'sm", () => {
      expect(
        build({ crop: { width: 150, height: 150, gravity: { type: "sm" } } })
      ).toEqual("c:150:150:sm");
    });

    it("should return c:150:150:obj:face:person if crop option is 150x150, type gravity is 'obj' and class_names is ['face', 'person']", () => {
      expect(
        build({
          crop: {
            width: 150,
            height: 150,
            gravity: { type: "obj", class_names: ["face", "person"] },
          },
        })
      ).toEqual("c:150:150:obj:face:person");
    });
  });
});
