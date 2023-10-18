import { describe, expect, it } from "vitest";
import { test, build } from "../src/options/gravity";

describe("gravity", () => {
  describe("test", () => {
    it("should return true if gravity option is defined", () => {
      expect(test({ gravity: { type: "sm" } })).toEqual(true);
    });

    it("should return true if g option is defined", () => {
      expect(test({ g: { type: "fp", x: 0.2, y: 0.6 } })).toEqual(true);
    });

    it("should return false if gravity option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if gravity option is undefined", () => {
      expect(() => build({})).toThrow("gravity options are undefined");
    });

    it("should throw an error if type is undefined", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ gravity: {} })).toThrow("gravity.type is undefined");
    });

    it("should throw an error if type is not supported", () => {
      // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
      expect(() => build({ gravity: { type: "empty" } })).toThrow(
        `gravity type "empty" is not supported. Supported types: no,so,ea,we,ce,noea,nowe,soea,sowe,sm,fp,obj`
      );
    });

    describe("BaseGravity", () => {
      it("should throw an error if type is not supported", () => {
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        expect(() => build({ gravity: { type: "empty" } })).toThrow(
          `gravity type "empty" is not supported. Supported types: no,so,ea,we,ce,noea,nowe,soea,sowe`
        );
      });

      it("should throw an error if gravity includes property x_offset but type is not from BaseGravity", () => {
        // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
        expect(() => build({ gravity: { type: "fp", x_offset: 10 } })).toThrow(
          `gravity type "fp" is not supported. Supported types: no,so,ea,we,ce,noea,nowe,soea,sowe`
        );
      });

      it("should return g:no if type is no", () => {
        expect(build({ gravity: { type: "no" } })).toEqual("g:no");
      });

      it("should return g:so::-20 if gravity is {type: 'so', y_offset: -20} ", () => {
        expect(build({ gravity: { type: "so", y_offset: -20 } })).toEqual(
          "g:so::-20"
        );
      });

      it("should return g:so::0 if gravity is {type: 'soea', y_offset: 0} ", () => {
        expect(build({ gravity: { type: "soea", y_offset: 0 } })).toEqual(
          "g:soea::0"
        );
      });

      it("should return g:nowe:10 if gravity is {type: 'nowe', x_offset: 10} ", () => {
        expect(build({ gravity: { type: "nowe", x_offset: 10 } })).toEqual(
          "g:nowe:10"
        );
      });
    });

    describe("ObjGravity", () => {
      it("should throw an error if gravity includes property class_names but type is not 'obj'", () => {
        expect(() =>
          build({
            gravity: {
              type: "no",
              // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
              class_names: ["class1", "class2"],
            },
          })
        ).toThrow(
          `gravity.class_names can be used only with gravityOpts.type obj`
        );
      });

      it("should throw an error if class_names is undefined", () => {
        expect(() =>
          build({
            // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
            gravity: {
              type: "obj",
            },
          })
        ).toThrow(`gravity.class_names is undefined`);
      });

      it("should throw an error if class_names is not an array", () => {
        expect(() =>
          build({
            gravity: {
              type: "obj",
              // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
              class_names: "class1",
            },
          })
        ).toThrow(`gravity.class_names is not an array`);
      });

      it("should throw an error if class_names is empty", () => {
        expect(() =>
          build({
            gravity: {
              type: "obj",
              class_names: [],
            },
          })
        ).toThrow(`gravity.class_names is empty`);
      });

      it("should return g:obj:class1:class2 if gravity is {type: 'obj', class_names: ['class1', 'class2']} ", () => {
        expect(
          build({
            gravity: {
              type: "obj",
              class_names: ["class1", "class2"],
            },
          })
        ).toEqual("g:obj:class1:class2");
      });
    });

    describe("FPGravity", () => {
      it("should throw an error if gravity includes property x or y but type is not 'fp'", () => {
        expect(() =>
          build({
            gravity: {
              type: "no",
              // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
              x: 0.5,
              y: 0.5,
            },
          })
        ).toThrow(
          `gravity.x and gravity.y can be used only with gravityOpts.type fp`
        );
      });

      it("should throw an error if x is undefined", () => {
        expect(() =>
          build({
            // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
            gravity: {
              type: "fp",
              y: 0.5,
            },
          })
        ).toThrow(`gravity.x or gravity.y is undefined`);
      });

      it("should throw an error if y is undefined", () => {
        expect(() =>
          build({
            // @ts-expect-error: Let's ignore an error (check for users with vanilla js).
            gravity: {
              type: "fp",
              x: 0.5,
            },
          })
        ).toThrow(`gravity.x or gravity.y is undefined`);
      });

      it("should throw an error if x is less than 0", () => {
        expect(() =>
          build({
            gravity: {
              type: "fp",
              x: -0.5,
              y: 0.5,
            },
          })
        ).toThrow(`gravity.x must be between 0 and 1`);
      });

      it("should throw an error if x is greater than 1", () => {
        expect(() =>
          build({
            gravity: {
              type: "fp",
              x: 1.5,
              y: 0.5,
            },
          })
        ).toThrow(`gravity.x must be between 0 and 1`);
      });

      it("should throw an error if y is less than 0", () => {
        expect(() =>
          build({
            gravity: {
              type: "fp",
              x: 0.5,
              y: -0.5,
            },
          })
        ).toThrow(`gravity.y must be between 0 and 1`);
      });

      it("should throw an error if y is greater than 1", () => {
        expect(() =>
          build({
            gravity: {
              type: "fp",
              x: 0.5,
              y: 1.5,
            },
          })
        ).toThrow(`gravity.y must be between 0 and 1`);
      });

      it("should return g:fp:0.5:0.5 if gravity is {type: 'fp', x: 0.5, y: 0.5} ", () => {
        expect(
          build({
            gravity: {
              type: "fp",
              x: 0.5,
              y: 0.5,
            },
          })
        ).toEqual("g:fp:0.5:0.5");
      });

      it("should return g:fp:0:0 if gravity is {type: 'fp', x: 0, y: 0} ", () => {
        expect(
          build({
            gravity: {
              type: "fp",
              x: 0,
              y: 0,
            },
          })
        ).toEqual("g:fp:0:0");
      });
    });
  });
});
