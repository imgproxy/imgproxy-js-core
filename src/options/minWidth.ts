import type { MinWidth, MinWidthOptionsPartial } from "../types/minWidth";

const getOpt = (options: MinWidthOptionsPartial): MinWidth | undefined =>
  options.min_width || options.mw;

const test = (options: MinWidthOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: MinWidthOptionsPartial): string => {
  const minWidthOpts = getOpt(options);

  if (!minWidthOpts) {
    throw new Error("min width option is undefined");
  } else if (typeof minWidthOpts === "string") {
    throw new Error("min width option cannot be a string");
  }

  return `min-width:${minWidthOpts}`;
};

export { test, build };
