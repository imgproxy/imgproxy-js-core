import type {
  BypassCache,
  BypassCacheOptionsPartial,
} from "../typesShared/bypassCache";
import { guardIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: BypassCacheOptionsPartial
): BypassCache | undefined => {
  if ("bypass_cache" in options) {
    return options.bypass_cache;
  }
  if ("bc" in options) {
    return options.bc;
  }

  return undefined;
};

const test = (options: BypassCacheOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: BypassCacheOptionsPartial): string => {
  const bypassCache = getOpt(options);

  guardIsUndef(bypassCache, "bypass_cache");

  return `bc:${normalizeBoolean(bypassCache)}`;
};

export { test, build };
