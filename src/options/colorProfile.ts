import type {
  ColorProfile,
  ColorProfileOptionsPartial,
} from "../types/colorProfile";
import { guardIsUndef } from "../utils";

const getOpt = (
  options: ColorProfileOptionsPartial
): ColorProfile | undefined => {
  if ("color_profile" in options) {
    return options.color_profile;
  } else if ("cp" in options) {
    return options.cp;
  } else if ("icc" in options) {
    return options.icc;
  }

  return undefined;
};

const test = (options: ColorProfileOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: ColorProfileOptionsPartial): string => {
  const colorProfileOpts = getOpt(options);
  guardIsUndef(colorProfileOpts, "color_profile");
  return `cp:${colorProfileOpts}`;
};

export { test, build };
