import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsShared/expires";

describe("expires", () => {
  describe("test", () => {
    it("should return true if expires option is defined", () => {
      expect(test({ expires: 1697799691 })).toEqual(true);
    });

    it("should return true if exp option is defined", () => {
      expect(test({ exp: 1686826891 })).toEqual(true);
    });

    it("should return false if expires option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if expires option is undefined", () => {
      expect(() => build({})).toThrow("expires option is undefined");
    });

    it("should throw an error if expires option is not a number", () => {
      // @ts-expect-error: Let's ignore an error.
      expect(() => build({ expires: "1" })).toThrow(
        "expires option is not a number"
      );
    });

    it("should return 'exp:1697799691' if expires option is 1697799691", () => {
      expect(build({ expires: 1697799691 })).toEqual("exp:1697799691");
    });

    it("should return 'exp:1686826891' if exp option is 1686826891", () => {
      expect(build({ exp: 1686826891 })).toEqual("exp:1686826891");
    });
  });
});
