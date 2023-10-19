import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/extend";

describe("extend", () => {
  describe("test", () => {
    it("should return true if extend in extend option is defined and gravity is undefined", () => {
      expect(test({ extend: { extend: "t" } })).toEqual(true);
    });

    it("should return true if extend in ex option is defined and gravity is undefined", () => {
      expect(test({ ex: { extend: "t" } })).toEqual(true);
    });

    it("should return false if extend option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if extend options are undefined ", () => {
      expect(() => build({})).toThrow("extend options are undefined");
    });

    it("should throw an error if extend.extend is undefined", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error.
        build({ extend: { gravity: { type: "we" } } })
      ).toThrow("extend in extend option is required");
    });

    it("should return ex:t if extend is true and gravity is undefined", () => {
      expect(build({ ex: { extend: true } })).toEqual("ex:t");
    });

    it("should return ex:t if extend is 1 and gravity is undefined", () => {
      expect(build({ extend: { extend: 1 } })).toEqual("ex:t");
    });

    it("should return ex:t:soea:10:20 if extend is true and gravity is {type: 'soea', x_offset:10, y_offset:20}", () => {
      expect(
        build({
          ex: {
            extend: true,
            gravity: { type: "soea", x_offset: 10, y_offset: 20 },
          },
        })
      ).toEqual("ex:t:soea:10:20");
    });

    it("should return ex:t:nowe:20 if extend is 1 and gravity is {type: 'nowe', x_offset:20}", () => {
      expect(
        build({
          extend: { extend: 1, gravity: { type: "nowe", x_offset: 20 } },
        })
      ).toEqual("ex:t:nowe:20");
    });

    it("should return ex:t:we if extend is 't' and gravity is {type: 'we'}", () => {
      expect(
        build({
          ex: { extend: "t", gravity: { type: "we" } },
        })
      ).toEqual("ex:t:we");
    });

    it("should return ex:f if extend is false and gravity is undefined", () => {
      expect(build({ ex: { extend: false } })).toEqual("ex:f");
    });

    it("should return ex:f:so::15 if extend is 0 and gravity is {type: 'so', y_offset: 15}", () => {
      expect(
        // @ts-expect-error: Let's ignore an error.
        build({ extend: { extend: 0, gravity: { type: "so", y_offset: 15 } } })
      ).toEqual("ex:f:so::15");
    });

    it("should return ex:f:ce:-10:-15 if extend is any string (except 't') and gravity is {type: 'ce', x_offset: -10, y_offset: -15}", () => {
      expect(
        build({
          ex: {
            extend: "true",
            gravity: { type: "ce", x_offset: -10, y_offset: -15 },
          },
        })
      ).toEqual("ex:f:ce:-10:-15");
    });
  });
});
