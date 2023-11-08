import type { Pixelate, PixelateOptionsPartial } from "../types/pixelate";
import { guardIsUndef } from "../utils";

const getOpt = (options: PixelateOptionsPartial): Pixelate | undefined =>
  options.pixelate || options.pix;

const test = (options: PixelateOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: PixelateOptionsPartial): string => {
  const pixelateOpts = getOpt(options);

  guardIsUndef(pixelateOpts, "pixelate");
  if (typeof pixelateOpts !== "number") {
    throw new Error("pixelate option is not a number");
  }
  if (pixelateOpts < 0) {
    throw new Error("pixelate option is can't be a negative number");
  }

  return `pix:${pixelateOpts}`;
};

export { test, build };
