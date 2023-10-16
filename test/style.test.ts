import { describe, expect, it } from "vitest";
import { test, build } from "../src/options/style";

describe("style", () => {
  describe("test", () => {
    it("should return true if style option is defined", () => {
      expect(test({ style: "text" })).toEqual(true);
    });

    it("should return true if stl option is defined", () => {
      expect(test({ stl: "text" })).toEqual(true);
    });

    it("should return false if style option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if style option is undefined", () => {
      expect(() => build({})).toThrow("style option is undefined");
    });

    it("should throw an error if style option is not a string", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ style: 150 })).toThrow(
        "style option is not a string"
      );
    });

    it("should return stl:ew0KcGFkZGluZzogMjRweDsNCmJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7DQp9 if style option is ew0KcGFkZGluZzogMjRweDsNCmJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7DQp9", () => {
      expect(
        build({
          style:
            "ew0KcGFkZGluZzogMjRweDsNCmJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7DQp9",
        })
      ).toEqual(
        "stl:ew0KcGFkZGluZzogMjRweDsNCmJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7DQp9"
      );
    });

    it("should return stl:ew0KY29sb3I6IGZmMDBmZjsNCn0= if stl option is ew0KY29sb3I6IGZmMDBmZjsNCn0=", () => {
      expect(build({ stl: "ew0KY29sb3I6IGZmMDBmZjsNCn0=" })).toEqual(
        "stl:ew0KY29sb3I6IGZmMDBmZjsNCn0="
      );
    });
  });
});
