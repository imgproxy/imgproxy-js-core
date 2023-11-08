import type {
  FallbackImageUrl,
  FallbackImageUrlOptionsPartial,
} from "../types/fallbackImageUrl";
import { guardParamIsUndef } from "../utils";

const getOpt = (
  options: FallbackImageUrlOptionsPartial
): FallbackImageUrl | undefined => options.fallback_image_url || options.fiu;

const test = (options: FallbackImageUrlOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: FallbackImageUrlOptionsPartial): string => {
  const fallbackImageUrl = getOpt(options);

  guardParamIsUndef(fallbackImageUrl, "fallback_image_url");
  if (typeof fallbackImageUrl !== "string") {
    throw new Error("fallback_image_url option is not a string");
  }

  return `fiu:${fallbackImageUrl}`;
};

export { test, build };
