import type { MinWidth, MinWidthOptionsPartial } from "../types/minWidth";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: MinWidthOptionsPartial): MinWidth | undefined =>
  options.min_width || options.mw;

const test = (options: MinWidthOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: MinWidthOptionsPartial): string => {
  const minWidthOpts = getOpt(options);

  guardIsUndef(minWidthOpts, "min_width");
  guardIsNotNum(minWidthOpts, "min_width", { addParam: { min: 0 } });

  return `mw:${minWidthOpts}`;
};

export { test, build };
