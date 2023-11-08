import type { MinHeight, MinHeightOptionsPartial } from "../types/minHeight";
import { guardParamIsUndef } from "../utils";

const getOpt = (options: MinHeightOptionsPartial): MinHeight | undefined =>
  options.min_height || options.mh;

const test = (options: MinHeightOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: MinHeightOptionsPartial): string => {
  const minHeightOpts = getOpt(options);

  guardParamIsUndef(minHeightOpts, "min_height");
  if (typeof minHeightOpts !== "number") {
    throw new Error("min_height option is not a number");
  }
  if (minHeightOpts < 0) {
    throw new Error("min_height option is can't be less than 0");
  }

  return `mh:${minHeightOpts}`;
};

export { test, build };
