import { Width, WidthOptionsPartial } from "../types";

const getOpt = (options: WidthOptionsPartial): Width | undefined =>
  options.width || options.w;

const test = (options: WidthOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WidthOptionsPartial): string => {
  const widthOpts = getOpt(options);

  if (!widthOpts) {
    throw new Error("width options are undefined");
  }

  const width = widthOpts || "";

  return `width:${width}`;
};

export { test, build };
