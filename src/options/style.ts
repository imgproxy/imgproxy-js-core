import type { Style, StyleOptionsPartial } from "../types/style";
import { guardIsUndef, guardIsNotStr } from "../utils";

const getOpt = (options: StyleOptionsPartial): Style | undefined =>
  options.style || options.stl;

const test = (options: StyleOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: StyleOptionsPartial): string => {
  const styleOpts = getOpt(options);

  guardIsUndef(styleOpts, "style");
  guardIsNotStr(styleOpts, "style");

  return `stl:${styleOpts}`;
};

export { test, build };
