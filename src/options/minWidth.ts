import type { MinWidth, MinWidthOptionsPartial } from "../types/minWidth";
import { guardParamIsUndef } from "../utils";

const getOpt = (options: MinWidthOptionsPartial): MinWidth | undefined =>
  options.min_width || options.mw;

const test = (options: MinWidthOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: MinWidthOptionsPartial): string => {
  const minWidthOpts = getOpt(options);

  guardParamIsUndef(minWidthOpts, "min_width");
  if (typeof minWidthOpts !== "number") {
    throw new Error("min_width option is not a number");
  }
  if (minWidthOpts < 0) {
    throw new Error("min_width option is can't be less than 0");
  }

  return `mw:${minWidthOpts}`;
};

export { test, build };
