import { describe, expect, it } from "vitest";
import { test, build } from "../src/options/extendAspectRatio";

describe("extendAspectRatio", () => {
  describe("test", () => {
    it("should return true if extend in extend aspect ratio option is defined and gravity is undefined", () => {
      expect(test({ exar: { extend: "t" } })).toEqual(true);
    });

    it("should return true if extend in extend_ar option is defined and gravity is undefined", () => {
      expect(test({ extend_ar: { extend: 1 } })).toEqual(true);
    });

    it("should return true if extend in extend aspect ratio option is defined and gravity is undefined", () => {
      expect(test({ extend_aspect_ratio: { extend: true } })).toEqual(true);
    });

    it("should return false if extend aspect ratio option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if extend aspect ratio options are undefined ", () => {
      expect(() => build({})).toThrow(
        "extend aspect ratio options are undefined"
      );
    });

    it("should throw an error if exar.extend is undefined", () => {
      expect(() =>
        // @ts-expect-error: Let's ignore an error.
        build({ exar: { gravity: { type: "we" } } })
      ).toThrow("extend in extend aspect ratio option is required");
    });

    it("should return exar:t if extend is true and gravity is undefined", () => {
      expect(build({ extend_ar: { extend: true } })).toEqual("exar:t");
    });

    it("should return exar:t if extend is 1 and gravity is undefined", () => {
      expect(build({ extend_aspect_ratio: { extend: 1 } })).toEqual("exar:t");
    });

    it("should return exar:t:soea:10:20 if extend is true and gravity is {type: 'soea', x_offset:10, y_offset:20}", () => {
      expect(
        build({
          exar: {
            extend: true,
            gravity: { type: "soea", x_offset: 10, y_offset: 20 },
          },
        })
      ).toEqual("exar:t:soea:10:20");
    });

    it("should return exar:t:nowe:20 if extend is 1 and gravity is {type: 'nowe', x_offset:20}", () => {
      expect(
        build({
          extend_aspect_ratio: {
            extend: 1,
            gravity: { type: "nowe", x_offset: 20 },
          },
        })
      ).toEqual("exar:t:nowe:20");
    });

    it("should return exar:t:we if draw is 't' and gravity is {type: 'we'}", () => {
      expect(
        build({
          extend_ar: { extend: "t", gravity: { type: "we" } },
        })
      ).toEqual("exar:t:we");
    });

    it("should return exar:f if extend is false and gravity is undefined", () => {
      expect(build({ exar: { extend: false } })).toEqual("exar:f");
    });

    it("should return exar:f:so::15 if extend is 0 and gravity is {type: 'so', y_offset: 15}", () => {
      expect(
        build({
          extend_aspect_ratio: {
            // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
            extend: 0,
            gravity: { type: "so", y_offset: 15 },
          },
        })
      ).toEqual("exar:f:so::15");
    });

    it("should return exar:f:ce:-10:-15 if extend is any string (except 't') and gravity is {type: 'ce', x_offset: -10, y_offset: -15}", () => {
      expect(
        build({
          exar: {
            extend: "true",
            gravity: { type: "ce", x_offset: -10, y_offset: -15 },
          },
        })
      ).toEqual("exar:f:ce:-10:-15");
    });
  });
});
