import type {
  EnforceThumbnail,
  EnforceThumbnailOptionsPartial,
} from "../types/enforceThumbnail";

const getOpt = (
  options: EnforceThumbnailOptionsPartial
): EnforceThumbnail | undefined => options.enforce_thumbnail || options.eth;

const test = (options: EnforceThumbnailOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: EnforceThumbnailOptionsPartial): string => {
  const enforceThumbnailOpts = getOpt(options);

  if (!enforceThumbnailOpts) {
    throw new Error("enforce thumbnail option is undefined");
  }

  return `enforce_thumbnail:${enforceThumbnailOpts}`;
};

export { test, build };
