import type { Sharpen, SharpenOptionsPartial } from "../types/sharpen";
import { guardParamIsUndef } from "../utils";

const getOpt = (options: SharpenOptionsPartial): Sharpen | undefined =>
  options.sharpen || options.sh;

const test = (options: SharpenOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: SharpenOptionsPartial): string => {
  const sharpenOpts = getOpt(options);

  guardParamIsUndef(sharpenOpts, "sharpen");
  if (typeof sharpenOpts !== "number") {
    throw new Error("sharpen option is not a number");
  }
  if (sharpenOpts < 0) {
    throw new Error(
      "sharpen is not correct. Set the value between 0 and any positive number"
    );
  }

  return `sh:${sharpenOpts}`;
};

export { test, build };
