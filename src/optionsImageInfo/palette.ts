import {
  Palette,
  PaletteImageInfoOptionsPartial,
} from "../typesImageInfo/palette";
import { guardIsUndef, guardIsNotNum } from "../utils";

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

  guardIsUndef(paletteOpts, "palette");
  guardIsNotNum(paletteOpts, "palette", {
    addParam: { min: 0, max: 256, isInt: true },
  });
  if (paletteOpts === 1)
    throw new Error("palette option is should be 0 or between 2 and 256");

  return `p:${paletteOpts}`;
};

export { test, build };
