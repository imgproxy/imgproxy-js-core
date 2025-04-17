import type { Colorize, ColorizeOptionsPartial } from "../types/colorize";
import { guardIsNotNum, guardIsUndef } from "../utils";

const getOpt = (options: ColorizeOptionsPartial): Colorize | undefined =>
  options.colorize ?? options.col;

const test = (options: ColorizeOptionsPartial): boolean => {
  return Boolean(getOpt(options));
};

const build = (options: ColorizeOptionsPartial): string => {
  const colorizeOpt = getOpt(options);

  guardIsUndef(colorizeOpt, "colorize");

  const { opacity, color, keepAlpha } = colorizeOpt;

  guardIsNotNum(opacity, "colorize.opacity", {
    addParam: {
      min: 0,
      max: 1,
    },
  });

  let result = `col:${opacity}`;

  if (color) {
    result += `:${color}`;
  }

  if (keepAlpha !== undefined) {
    // Add color parameter if it wasn't provided but keepAlpha is set
    if (!color) {
      result += ":";
    }
    result += `:${keepAlpha ? 1 : 0}`;
  }

  return result;
};

export { test, build };
