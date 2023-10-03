import { MinHeight, MinHeightOptionsPartial } from "../types";

const getOpt = (options: MinHeightOptionsPartial): MinHeight | undefined =>
  options.min_height || options.mh;

const test = (options: MinHeightOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: MinHeightOptionsPartial): string => {
  const minHeightOpts = getOpt(options);

  if (!minHeightOpts) {
    throw new Error("min height option is undefined");
  } else if (typeof minHeightOpts === "string") {
    throw new Error("min height option cannot be a string");
  }

  return `min-height:${minHeightOpts}`;
};

export { test, build };
