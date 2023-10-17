import type { Expires, ExpiresOptionsPartial } from "../types/expires";

const getOpt = (options: ExpiresOptionsPartial): Expires | undefined =>
  options.expires || options.exp;

const test = (options: ExpiresOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ExpiresOptionsPartial): string => {
  const expires = getOpt(options);

  if (!expires) {
    throw new Error("expires option is undefined");
  }
  if (typeof expires !== "number") {
    throw new Error("expires option must be a number");
  }

  return `exp:${expires}`;
};

export { test, build };
