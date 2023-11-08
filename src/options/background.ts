import type { Background, BackgroundOptionsPartial } from "../types/background";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: BackgroundOptionsPartial): Background | undefined =>
  options.background || options.bg;

const test = (options: BackgroundOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: BackgroundOptionsPartial): string => {
  const backgroundOpts = getOpt(options);

  guardIsUndef(backgroundOpts, "background");
  if (typeof backgroundOpts === "number") {
    throw new Error("background option is not a string or object");
  }

  if (typeof backgroundOpts === "string") {
    if (!backgroundOpts.match(/^[0-9a-fA-F]+$/)) {
      throw new Error("color in trim option must be hexadecimal");
    }

    if (
      backgroundOpts.length !== 6 &&
      backgroundOpts.length !== 3 &&
      backgroundOpts.length !== 8
    ) {
      throw new Error("color in trim option must be 3, 6 or 8 characters");
    }

    return `bg:${backgroundOpts}`;
  }

  guardIsUndef(backgroundOpts.r, "background.r");
  guardIsUndef(backgroundOpts.g, "background.g");
  guardIsUndef(backgroundOpts.b, "background.b");
  guardIsNotNum(backgroundOpts.r, "background.r");
  guardIsNotNum(backgroundOpts.g, "background.g");
  guardIsNotNum(backgroundOpts.b, "background.b");

  return `bg:${backgroundOpts.r}:${backgroundOpts.g}:${backgroundOpts.b}`;
};

export { test, build };
