import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/filename";

describe("filename", () => {
  describe("test", () => {
    it("should return true if name in filename option is defined and encoded is undefined", () => {
      expect(test({ filename: { name: "sunset" } })).toEqual(true);
    });

    it("should return true if name in fn option is defined and encoded is undefined", () => {
      expect(test({ filename: { name: "sunrise" } })).toEqual(true);
    });

    it("should return false if filename option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if filename option is undefined ", () => {
      expect(() => build({})).toThrow("filename option is undefined");
    });

    it("should throw an error if name in filename option is undefined", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ filename: { encoded: 1 } })
      ).toThrow("filename.name is undefined");
    });

    it("should throw an error if name in filename option is not a string", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ filename: { name: 25 } })
      ).toThrow("filename.name is not a string");
    });

    it("should return fn:sunset if extend is defined and encoded is undefined", () => {
      expect(build({ fn: { name: "sunset" } })).toEqual("fn:sunset");
    });

    it("should return fn:sunset:t if name is sunset and encoded is true", () => {
      expect(build({ filename: { name: "sunset", encoded: true } })).toEqual(
        "fn:sunset:t"
      );
    });

    it("should return fn:sunset:t if name is sunset and encoded is 1", () => {
      expect(build({ filename: { name: "sunset", encoded: 1 } })).toEqual(
        "fn:sunset:t"
      );
    });

    it("should return fn:clouds:t if name is clouds and encoded is 't'", () => {
      expect(
        build({
          fn: {
            name: "clouds",
            encoded: "t",
          },
        })
      ).toEqual("fn:clouds:t");
    });

    it("should return fn:clouds:f if name is clouds and encoded is 0", () => {
      expect(
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ filename: { name: "clouds", encoded: 0 } })
      ).toEqual("fn:clouds:f");
    });

    it("should return fn:sky:f if encoded is any string (except 't')", () => {
      expect(
        build({
          fn: {
            name: "sky",
            encoded: "true",
          },
        })
      ).toEqual("fn:sky:f");
    });
  });
});
