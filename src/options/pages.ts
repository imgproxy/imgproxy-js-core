import type { Pages, PagesOptionsPartial } from "../types/pages";

const getOpt = (options: PagesOptionsPartial): Pages | undefined =>
  options.pages || options.pgs;

const test = (options: PagesOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: PagesOptionsPartial): string => {
  const pages = getOpt(options);

  if (!pages) {
    throw new Error("pages option is undefined");
  } else if (typeof pages !== "number") {
    throw new Error(
      "pages option is invalid. Must be a positive integer starting with 1"
    );
  } else if (pages < 1) {
    throw new Error(
      "pages option is invalid. Must be a positive integer starting with 1"
    );
  }

  return `pages:${pages}`;
};

export { test, build };
