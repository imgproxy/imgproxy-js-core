import type { Expires, ExpiresOptionsPartial } from "../typesShared/expires";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: ExpiresOptionsPartial): Expires | undefined =>
  options.expires || options.exp;

const test = (options: ExpiresOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ExpiresOptionsPartial): string => {
  const expires = getOpt(options);

  guardIsUndef(expires, "expires");
  guardIsNotNum(expires, "expires");

  return `exp:${expires}`;
};

export { test, build };
