import type { Padding, PaddingOptionsPartial } from "../types/padding";
import { guardParamIsUndef } from "../utils";

const getOpt = (options: PaddingOptionsPartial): Padding | undefined =>
  options.padding || options.pd;

const test = (options: PaddingOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: PaddingOptionsPartial): string => {
  const paddingOpts = getOpt(options);

  guardParamIsUndef(paddingOpts, "padding");
  if (typeof paddingOpts === "string") {
    throw new Error("padding option is not a number or object");
  }
  if (typeof paddingOpts === "number") {
    if (paddingOpts < 0) {
      throw new Error("padding option is can't be a negative number");
    }

    return `pd:${paddingOpts}`;
  }

  if (paddingOpts.top && typeof paddingOpts.top !== "number") {
    throw new Error("padding.top option is not a number");
  }
  if (paddingOpts.right && typeof paddingOpts.right !== "number") {
    throw new Error("padding.right option is not a number");
  }
  if (paddingOpts.bottom && typeof paddingOpts.bottom !== "number") {
    throw new Error("padding.bottom option is not a number");
  }
  if (paddingOpts.left && typeof paddingOpts.left !== "number") {
    throw new Error("padding.left option is not a number");
  }

  const top = paddingOpts.top || "";
  const right = paddingOpts.right || "";
  const bottom = paddingOpts.bottom || "";
  const left = paddingOpts.left || "";

  return `pd:${top}:${right}:${bottom}:${left}`.replace(/:+$/, "");
};

export { test, build };
