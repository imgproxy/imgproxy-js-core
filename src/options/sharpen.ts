import type { Sharpen, SharpenOptionsPartial } from "../types/sharpen";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: SharpenOptionsPartial): Sharpen | undefined =>
  options.sharpen ?? options.sh;

const test = (options: SharpenOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: SharpenOptionsPartial): string => {
  const sharpenOpts = getOpt(options);

  guardIsUndef(sharpenOpts, "sharpen");
  guardIsNotNum(sharpenOpts, "sharpen", { addParam: { min: 0 } });

  return `sh:${sharpenOpts}`;
};

export { test, build };
