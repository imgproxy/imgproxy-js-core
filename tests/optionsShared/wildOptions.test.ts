import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsShared/wildOptions";

describe("rawOptions", () => {
  describe("test", () => {
    it("should return true if raw_options option is defined", () => {
      expect(test({ wild_options: [["foo", "bar"]] })).toEqual(true);
    });

    it("should return false if raw_options option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if raw_options option is undefined", () => {
      expect(() => build({})).toThrow("raw_options option is undefined");
    });

    it("should throw an error if raw_options is not an array", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ wild_options: "foo" })).toThrow(
        "raw_options is not an array"
      );
    });

    it("should throw an error if raw_options is not an array of arrays", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ wild_options: [["foo", "bar"], "foo"] })).toThrow(
        "raw_options is not an array of arrays"
      );
    });

    it("should return raw options string", () => {
      expect(
        build({
          wild_options: [
            ["foo", "bar"],
            ["baz", "qux"],
          ],
        })
      ).toEqual("foo:bar/baz:qux");
    });

    it("should return raw options string with one option and some parametres", () => {
      expect(
        build({
          wild_options: [["foo", "bar", 1, true]],
        })
      ).toEqual("foo:bar:1:true");
    });
  });
});
