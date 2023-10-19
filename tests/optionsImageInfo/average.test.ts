import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/average";

describe("average", () => {
  describe("test", () => {
    it("should return true if average option is defined", () => {
      expect(test({ average: { average: 1 } })).toEqual(true);
    });

    it("should return true if avg option is defined", () => {
      expect(test({ avg: { average: "none" } })).toEqual(true);
    });

    it("should return false if average option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if average option is undefined", () => {
      expect(() => build({})).toThrow("average option is undefined");
    });

    it("should throw an error if average.average is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ average: { ignore_transparent: "t" } })).toThrow(
        "average.average option is undefined"
      );
    });

    it("should return avg:t if average.average option is 1", () => {
      expect(build({ average: { average: 1 } })).toEqual("avg:t");
    });

    it("should return avg:f:t if average is {average: 0, ignore_transparent: true}", () => {
      expect(
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        build({ average: { average: 0, ignore_transparent: true } })
      ).toEqual("avg:f:t");
    });

    it("should return avg:t:f if avg option is {average: 't', ignore_transparent: 'empty'}", () => {
      expect(
        build({ avg: { average: "t", ignore_transparent: "empty" } })
      ).toEqual("avg:t:f");
    });
  });
});
