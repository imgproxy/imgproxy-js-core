import type { Page, PageOptionsPartial } from "../typesShared/page";

const getOpt = (options: PageOptionsPartial): Page | undefined => {
  if ("page" in options) {
    return options.page;
  } else if ("pg" in options) {
    return options.pg;
  }
  return undefined;
};

const test = (options: PageOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: PageOptionsPartial): string => {
  const page = getOpt(options);

  if (page === undefined) {
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
