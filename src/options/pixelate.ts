import type { Pixelate, PixelateOptionsPartial } from "../types/pixelate";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: PixelateOptionsPartial): Pixelate | undefined =>
  options.pixelate || options.pix;

const test = (options: PixelateOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: PixelateOptionsPartial): string => {
  const pixelateOpts = getOpt(options);

  guardIsUndef(pixelateOpts, "pixelate");
  guardIsNotNum(pixelateOpts, "pixelate", { addParam: { min: 0 } });

  return `pix:${pixelateOpts}`;
};

export { test, build };
