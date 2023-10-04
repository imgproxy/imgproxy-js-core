import type { Sharpen, SharpenOptionsPartial } from "../types/sharpen";

const getOpt = (options: SharpenOptionsPartial): Sharpen | undefined =>
  options.sharpen || options.sh;

const test = (options: SharpenOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: SharpenOptionsPartial): string => {
  const sharpenOpts = getOpt(options);

  if (!sharpenOpts) {
    throw new Error("sharpen option is undefined");
  } else if (typeof sharpenOpts !== "number") {
    throw new Error("sharpen option is not a number");
  }

  return `sharpen:${sharpenOpts}`;
};

export { test, build };
