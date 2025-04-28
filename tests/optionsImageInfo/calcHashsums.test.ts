import { describe, expect, it } from "vitest";
import { test, build } from "../../src/optionsImageInfo/calcHashsums";

describe("calcHashsums", () => {
  describe("test", () => {
    it("should return true if calcHashsums option is defined", () => {
      expect(test({ calcHashsums: ["md5", "sha256"] })).toEqual(true);
    });

    it("should return true if chs option is defined", () => {
      expect(test({ chs: ["sha1"] })).toEqual(true);
    });

    it("should return true if calcHashsums is an empty array", () => {
      expect(test({ calcHashsums: [] })).toEqual(true);
    });

    it("should return false if calcHashsums option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if calcHashsums option is undefined", () => {
      expect(() => build({})).toThrow("calcHashsums option is undefined");
    });

    it("should return 'chs:' if calcHashsums is an empty array", () => {
      expect(build({ calcHashsums: [] })).toEqual("chs:");
    });

    it("should return 'chs:md5' for a single hashsum type", () => {
      expect(build({ calcHashsums: ["md5"] })).toEqual("chs:md5");
    });

    it("should return 'chs:md5:sha256' for multiple hashsum types", () => {
      expect(build({ calcHashsums: ["md5", "sha256"] })).toEqual(
        "chs:md5:sha256"
      );
    });

    it("should work with the chs alias", () => {
      expect(build({ chs: ["sha1", "sha512"] })).toEqual("chs:sha1:sha512");
    });
  });
});
