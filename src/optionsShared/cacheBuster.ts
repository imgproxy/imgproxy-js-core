import type {
  CacheBuster,
  CacheBusterOptionsPartial,
} from "../typesShared/cacheBuster";
import { guardParamIsUndef } from "../utils";

const getOpt = (options: CacheBusterOptionsPartial): CacheBuster | undefined =>
  options.cachebuster || options.cb;

const test = (options: CacheBusterOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: CacheBusterOptionsPartial): string => {
  const cachebuster = getOpt(options);

  guardParamIsUndef(cachebuster, "cachebuster");
  if (typeof cachebuster !== "string") {
    throw new Error("cachebuster option must be a string");
  }

  return `cb:${cachebuster}`;
};

export { test, build };
