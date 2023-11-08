import type { Blur, BlurOptionsPartial } from "../types/blur";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: BlurOptionsPartial): Blur | undefined =>
  options.blur || options.bl;

const test = (options: BlurOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: BlurOptionsPartial): string => {
  const blurOpts = getOpt(options);

  guardIsUndef(blurOpts, "blur");
  guardIsNotNum(blurOpts, "blur", { addParam: { type: "min", value: 0 } });

  return `bl:${blurOpts}`;
};

export { test, build };
