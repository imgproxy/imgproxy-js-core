import type { Style, StyleOptionsPartial } from "../types/style";

const getOpt = (options: StyleOptionsPartial): Style | undefined =>
  options.style || options.stl;

const test = (options: StyleOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: StyleOptionsPartial): string => {
  const styleOpts = getOpt(options);

  if (!styleOpts) {
    throw new Error("style option is undefined");
  }

  return `style:${styleOpts}`;
};

export { test, build };
