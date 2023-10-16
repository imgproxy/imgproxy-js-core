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
  if (typeof styleOpts !== "string") {
    throw new Error("style option is not a string");
  }

  return `stl:${styleOpts}`;
};

export { test, build };
