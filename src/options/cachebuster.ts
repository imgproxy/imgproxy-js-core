import type {
  CacheBuster,
  CacheBusterOptionsPartial,
} from "../types/cachebuster";

const getOpt = (options: CacheBusterOptionsPartial): CacheBuster | undefined =>
  options.cachebuster || options.cb;

const test = (options: CacheBusterOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: CacheBusterOptionsPartial): string => {
  const cachebuster = getOpt(options);

  if (!cachebuster) {
    throw new Error("cache buster option is undefined");
  }

  return `cachebuster:${cachebuster}`;
};

export { test, build };
