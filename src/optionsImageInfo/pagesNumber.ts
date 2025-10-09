import type {
  NeedPagesNumber,
  PagesNumberInfoOptionsPartial,
} from "../typesImageInfo/pagesNumber";
import { guardIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: PagesNumberInfoOptionsPartial
): NeedPagesNumber | undefined => {
  if ("pages_number" in options) {
    return options.pages_number;
  } else if ("pn" in options) {
    return options.pn;
  }

  return undefined;
};

const test = (options: PagesNumberInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: PagesNumberInfoOptionsPartial): string => {
  const pagesNumberOpts = getOpt(options);
  guardIsUndef(pagesNumberOpts, "pages_number");
  return `pn:${normalizeBoolean(pagesNumberOpts)}`;
};

export { test, build };
