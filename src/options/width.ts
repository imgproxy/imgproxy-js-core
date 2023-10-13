import type { Width, WidthOptionsPartial } from "../types/width";

const getOpt = (options: WidthOptionsPartial): Width | undefined =>
  options.width || options.w;

const test = (options: WidthOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WidthOptionsPartial): string => {
  const widthOpts = getOpt(options);

  if (!widthOpts) {
    throw new Error("width option is undefined");
  }

  if (typeof widthOpts !== "number") {
    throw new Error("width option is not a number");
  }

  if (widthOpts < 0) {
    throw new Error("width option is can't be less than 0");
  }

  return `w:${widthOpts}`;
};

export { test, build };
