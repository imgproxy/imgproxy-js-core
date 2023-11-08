import {
  Palette,
  PaletteImageInfoOptionsPartial,
} from "../typesImageInfo/palette";
import { guardParamIsUndef } from "../utils";

const getOpt = (
  options: PaletteImageInfoOptionsPartial
): Palette | undefined => {
  if ("palette" in options) {
    return options.palette;
  } else if ("p" in options) {
    return options.p;
  }

  return undefined;
};

const test = (options: PaletteImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: PaletteImageInfoOptionsPartial): string => {
  const paletteOpts = getOpt(options);

  guardParamIsUndef(paletteOpts, "palette");
  if (typeof paletteOpts !== "number") {
    throw new Error("palette option is not a number");
  }
  if (paletteOpts < 0) {
    throw new Error("palette option is can't be a negative");
  }
  if (paletteOpts > 256) {
    throw new Error("palette option is can't be more than 256");
  }
  if (paletteOpts > 0 && paletteOpts < 2) {
    throw new Error("palette option is should be 0 or more than 2");
  }
  if (!Number.isInteger(paletteOpts)) {
    throw new Error("palette option is should be integer");
  }

  return `p:${paletteOpts}`;
};

export { test, build };
