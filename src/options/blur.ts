import type { Blur, BlurOptionsPartial } from "../types/blur";

const getOpt = (options: BlurOptionsPartial): Blur | undefined =>
  options.blur || options.bl;

const test = (options: BlurOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: BlurOptionsPartial): string => {
  const blurOpts = getOpt(options);

  if (!blurOpts) {
    throw new Error("blur option is undefined");
  } else if (typeof blurOpts !== "number") {
    throw new Error("blur option is not a number");
  } else if (blurOpts < 0) {
    throw new Error("blur option is can't be less than 0");
  }

  return `bl:${blurOpts}`;
};

export { test, build };
