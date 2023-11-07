import type { Pages, PagesOptionsPartial } from "../types/pages";
import { errorParamIsUndef } from "../utils";

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

  errorParamIsUndef(pages, "pages");
  if (typeof pages !== "number") {
    throw new Error(
      "pages option is invalid. Must be a positive integer starting with 1"
    );
  }
  if (pages < 1) {
    throw new Error(
      "pages option is invalid. Must be a positive integer starting with 1"
    );
  }
  if (!Number.isInteger(pages)) {
    throw new Error(
      "pages option is invalid. Must be a positive integer starting with 1"
    );
  }

  return `pgs:${pages}`;
};

export { test, build };
