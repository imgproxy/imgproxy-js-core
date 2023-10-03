import { Height, HeightOptionsPartial } from "../types";

const getOpt = (options: HeightOptionsPartial): Height | undefined =>
  options.height || options.h;

const test = (options: HeightOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: HeightOptionsPartial): string => {
  const heightOpts = getOpt(options);

  if (!heightOpts) {
    throw new Error("height option is undefined");
  } else if (typeof heightOpts === "string") {
    throw new Error("height cannot be a string");
  }

  return `height:${heightOpts}`;
};

export { test, build };
