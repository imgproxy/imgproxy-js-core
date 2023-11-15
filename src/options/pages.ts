import type { Pages, PagesOptionsPartial } from "../types/pages";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: PagesOptionsPartial): Pages | undefined => {
  if ("pages" in options) {
    return options.pages;
  } else if ("pgs" in options) {
    return options.pgs;
  }
  return undefined;
};

const test = (options: PagesOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: PagesOptionsPartial): string => {
  const pages = getOpt(options);

  guardIsUndef(pages, "pages");
  guardIsNotNum(pages, "pages", { addParam: { min: 1, isInt: true } });

  return `pgs:${pages}`;
};

export { test, build };
