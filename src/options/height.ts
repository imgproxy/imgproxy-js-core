import { Height, HeightOptionsPartial } from "../types";

const getOpt = (options: HeightOptionsPartial): Height | undefined =>
  options.height || options.h;

const test = (options: HeightOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: HeightOptionsPartial): string => {
  const heightOpts = getOpt(options);

  if (!heightOpts) {
    throw new Error("height options are undefined");
  }

  const height = heightOpts || "";

  return `height:${height}`;
};

export { test, build };
