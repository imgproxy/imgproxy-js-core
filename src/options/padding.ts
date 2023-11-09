import type { Padding, PaddingOptionsPartial } from "../types/padding";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: PaddingOptionsPartial): Padding | undefined =>
  options.padding || options.pd;

const test = (options: PaddingOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: PaddingOptionsPartial): string => {
  const paddingOpts = getOpt(options);

  guardIsUndef(paddingOpts, "padding");
  if (typeof paddingOpts === "string")
    throw new Error("padding option is not a number or object");

  if (typeof paddingOpts === "number") {
    guardIsNotNum(paddingOpts, "padding", { addParam: { min: 0 } });
    return `pd:${paddingOpts}`;
  }

  if (paddingOpts.top) guardIsNotNum(paddingOpts.top, "padding.top");
  if (paddingOpts.right) guardIsNotNum(paddingOpts.right, "padding.right");
  if (paddingOpts.bottom) guardIsNotNum(paddingOpts.bottom, "padding.bottom");
  if (paddingOpts.left) guardIsNotNum(paddingOpts.left, "padding.left");

  const top = paddingOpts.top || "";
  const right = paddingOpts.right || "";
  const bottom = paddingOpts.bottom || "";
  const left = paddingOpts.left || "";

  return `pd:${top}:${right}:${bottom}:${left}`.replace(/:+$/, "");
};

export { test, build };
