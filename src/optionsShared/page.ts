import type { Page, PageOptionsPartial } from "../typesShared/page";
import { guardIsUndef, guardIsNotNum } from "../utils";

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

  guardIsUndef(page, "page");
  guardIsNotNum(page, "page", { addParam: { min: 0, isInt: true } });

  return `pg:${page}`;
};

export { test, build };
