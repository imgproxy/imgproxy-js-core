import type { Page, PageOptionsPartial } from "../types/page";

const getOpt = (options: PageOptionsPartial): Page | undefined =>
  options.page || options.pg;

const test = (options: PageOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: PageOptionsPartial): string => {
  const page = getOpt(options);

  if (!page) {
    throw new Error("page option is undefined");
  }
  if (typeof page !== "number") {
    throw new Error("page option is invalid. Must be a positive integer");
  }
  if (page < 0) {
    throw new Error("page option is invalid. Must be a positive integer");
  }
  if (!Number.isInteger(page)) {
    throw new Error("page option is invalid. Must be a positive integer");
  }

  return `pg:${page}`;
};

export { test, build };
