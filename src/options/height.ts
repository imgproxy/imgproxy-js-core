import type { Height, HeightOptionsPartial } from "../types/height";

const getOpt = (options: HeightOptionsPartial): Height | undefined =>
  options.height || options.h;

const test = (options: HeightOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: HeightOptionsPartial): string => {
  const heightOpts = getOpt(options);

  if (!heightOpts) {
    throw new Error("height option is undefined");
  }

  if (typeof heightOpts !== "number") {
    throw new Error("height option is not a number");
  }

  if (heightOpts < 0) {
    throw new Error("height option is can't be less than 0");
  }

  return `h:${heightOpts}`;
};

export { test, build };
