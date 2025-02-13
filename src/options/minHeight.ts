import type { MinHeight, MinHeightOptionsPartial } from "../types/minHeight";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: MinHeightOptionsPartial): MinHeight | undefined =>
  options.min_height ?? options.mh;

const test = (options: MinHeightOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: MinHeightOptionsPartial): string => {
  const minHeightOpts = getOpt(options);

  guardIsUndef(minHeightOpts, "min_height");
  guardIsNotNum(minHeightOpts, "min_height", { addParam: { min: 0 } });

  return `mh:${minHeightOpts}`;
};

export { test, build };
