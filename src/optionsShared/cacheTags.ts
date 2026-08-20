import type {
  CacheTags,
  CacheTagsOptionsPartial,
} from "../typesShared/cacheTags";
import { guardIsUndef, guardIsNotArray } from "../utils";

const getOpt = (options: CacheTagsOptionsPartial): CacheTags | undefined =>
  options.cache_tags || options.ct;

const test = (options: CacheTagsOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: CacheTagsOptionsPartial): string => {
  const cacheTags = getOpt(options);

  guardIsUndef(cacheTags, "cache_tags");
  guardIsNotArray(cacheTags, "cache_tags");

  if (cacheTags.some(item => typeof item !== "string")) {
    throw new Error("cache_tags option should contain only strings");
  }

  return `ct:${cacheTags.join(":")}`;
};

export { test, build };
