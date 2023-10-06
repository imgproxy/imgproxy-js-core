import type { Page, PageOptionsPartial } from "../types/page";

const getOpt = (options: PageOptionsPartial): Page | undefined =>
  options.page || options.pg;

const test = (options: PageOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: PageOptionsPartial): string => {
  const page = getOpt(options);

  if (!page) {
    throw new Error("page option is undefined");
  } else if (typeof page !== "number") {
    throw new Error("page option is invalid. Must be a positive integer");
  } else if (page < 0) {
    throw new Error("page option is invalid. Must be a positive integer");
  }

  return `page:${page}`;
};

export { test, build };
