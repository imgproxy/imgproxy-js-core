import type {
  FallbackImageUrl,
  FallbackImageUrlOptionsPartial,
} from "../types/fallbackImageUrl";
import { guardIsUndef, guardIsNotStr } from "../utils";

const getOpt = (
  options: FallbackImageUrlOptionsPartial
): FallbackImageUrl | undefined => options.fallback_image_url || options.fiu;

const test = (options: FallbackImageUrlOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: FallbackImageUrlOptionsPartial): string => {
  const fallbackImageUrl = getOpt(options);

  guardIsUndef(fallbackImageUrl, "fallback_image_url");
  guardIsNotStr(fallbackImageUrl, "fallback_image_url");

  return `fiu:${fallbackImageUrl}`;
};

export { test, build };
