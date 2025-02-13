import type { Contrast, ContrastOptionsPartial } from "../types/contrast";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: ContrastOptionsPartial): Contrast | undefined =>
  options.contrast ?? options.co;

const test = (options: ContrastOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ContrastOptionsPartial): string => {
  const contrastOpts = getOpt(options);

  guardIsUndef(contrastOpts, "contrast");
  guardIsNotNum(contrastOpts, "contrast", { addParam: { min: 0 } });

  return `co:${contrastOpts}`;
};

export { test, build };
