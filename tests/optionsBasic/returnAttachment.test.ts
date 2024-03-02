import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/returnAttachment";

describe("disableAnimation", () => {
  describe("test", () => {
    it("should return true if return_attachment option is defined", () => {
      expect(test({ return_attachment: true })).toEqual(true);
    });

    it("should return true if return_attachment option is false", () => {
      expect(test({ return_attachment: false })).toEqual(true);
    });

    it("should return false if return_attachment option is undefined", () => {
      expect(test({})).toEqual(false);
    });

    it("should return true if att option is defined", () => {
      expect(test({ att: "t" })).toEqual(true);
    });
  });

  describe("build", () => {
    it("should throw an error if return_attachment option is undefined", () => {
      expect(() => build({})).toThrow("return_attachment option is undefined");
    });

    it("should return 't' if return_attachment option is true", () => {
      expect(build({ return_attachment: true })).toEqual("att:t");
    });

    it("should return 't' if att option is t", () => {
      expect(build({ att: "t" })).toEqual("att:t");
    });

    it("should return 't' if return_attachment is 1", () => {
      expect(build({ return_attachment: 1 })).toEqual("att:t");
    });

    it("should return 'f' if att is false", () => {
      expect(build({ att: false })).toEqual("att:f");
    });

    it("should return 'f' if return_attachment is 0", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(build({ return_attachment: 0 })).toEqual("att:f");
    });

    it("should return 'f' if att is string (except 't')", () => {
      expect(build({ att: "true" })).toEqual("att:f");
    });
  });
});
