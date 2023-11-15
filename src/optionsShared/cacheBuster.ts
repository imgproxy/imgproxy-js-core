import type {
  CacheBuster,
  CacheBusterOptionsPartial,
} from "../typesShared/cacheBuster";
import { guardIsUndef, guardIsNotStr } from "../utils";

const getOpt = (options: CacheBusterOptionsPartial): CacheBuster | undefined =>
  options.cachebuster || options.cb;

const test = (options: CacheBusterOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: CacheBusterOptionsPartial): string => {
  const cachebuster = getOpt(options);

  guardIsUndef(cachebuster, "cachebuster");
  guardIsNotStr(cachebuster, "cachebuster");

  return `cb:${cachebuster}`;
};

export { test, build };
