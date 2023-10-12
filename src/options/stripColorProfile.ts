import type {
  StripColorProfile,
  StripColorProfileOptionsPartial,
} from "../types/stripColorProfile";
import { normalizeBoolean } from "../utils";

const getOpt = (
  options: StripColorProfileOptionsPartial
): StripColorProfile | undefined => {
  if ("strip_color_profile" in options) {
    return options.strip_color_profile;
  } else if ("scp" in options) {
    return options.scp;
  }

  return undefined;
};

const test = (options: StripColorProfileOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: StripColorProfileOptionsPartial): string => {
  const stripColorProfileOpts = getOpt(options);

  if (stripColorProfileOpts === undefined) {
    throw new Error("strip color profile option is undefined");
  }

  return `scp:${normalizeBoolean(stripColorProfileOpts)}`;
};

export { test, build };
