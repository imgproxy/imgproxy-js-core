import type {
  CacheBuster,
  CacheBusterOptionsPartial,
} from "../types/cacheBuster";

const getOpt = (options: CacheBusterOptionsPartial): CacheBuster | undefined =>
  options.cachebuster || options.cb;

const test = (options: CacheBusterOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: CacheBusterOptionsPartial): string => {
  const cachebuster = getOpt(options);

  if (!cachebuster) {
    throw new Error("cachebuster option is undefined");
  }
  if (typeof cachebuster !== "string") {
    throw new Error("cachebuster option must be a string");
  }

  return `cb:${cachebuster}`;
};

export { test, build };
