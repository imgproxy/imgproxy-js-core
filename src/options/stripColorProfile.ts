import type {
  StripColorProfile,
  StripColorProfileOptionsPartial,
} from "../types/stripColorProfile";

const getOpt = (
  options: StripColorProfileOptionsPartial
): StripColorProfile | undefined => options.strip_color_profile || options.scp;

const test = (options: StripColorProfileOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: StripColorProfileOptionsPartial): string => {
  const stripColorProfileOpts = getOpt(options);

  if (!stripColorProfileOpts) {
    throw new Error("strip color profile option is undefined");
  }

  return `strip_color_profile:${stripColorProfileOpts}`;
};

export { test, build };
