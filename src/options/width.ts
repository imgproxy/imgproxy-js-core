import { Width, WidthOptionsPartial } from "../types";

const getOpt = (options: WidthOptionsPartial): Width | undefined =>
  options.width || options.w;

const test = (options: WidthOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WidthOptionsPartial): string => {
  const widthOpts = getOpt(options);

  if (!widthOpts) {
    throw new Error("width option is undefined");
  } else if (typeof widthOpts === "string") {
    throw new Error("width cannot be a string");
  }

  return `width:${widthOpts}`;
};

export { test, build };
