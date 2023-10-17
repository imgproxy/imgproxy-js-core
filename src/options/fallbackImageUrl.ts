import type {
  FallbackImageUrl,
  FallbackImageUrlOptionsPartial,
} from "../types/fallbackImageUrl";

const getOpt = (
  options: FallbackImageUrlOptionsPartial
): FallbackImageUrl | undefined => options.fallback_image_url || options.fiu;

const test = (options: FallbackImageUrlOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: FallbackImageUrlOptionsPartial): string => {
  const fallbackImageUrl = getOpt(options);

  if (!fallbackImageUrl) {
    throw new Error("fallback_image_url option is undefined");
  }
  if (typeof fallbackImageUrl !== "string") {
    throw new Error("fallback_image_url option is not a string");
  }

  return `fiu:${fallbackImageUrl}`;
};

export { test, build };
