import type { Pixelate, PixelateOptionsPartial } from "../types/pixelate";

const getOpt = (options: PixelateOptionsPartial): Pixelate | undefined =>
  options.pixelate || options.pix;

const test = (options: PixelateOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: PixelateOptionsPartial): string => {
  const pixelateOpts = getOpt(options);

  if (!pixelateOpts) {
    throw new Error("pixelate option is undefined");
  } else if (typeof pixelateOpts !== "number") {
    throw new Error("pixelate option is not a number");
  } else if (pixelateOpts < 0) {
    throw new Error("pixelate option is can't be less than 0");
  }

  return `pixelate:${pixelateOpts}`;
};

export { test, build };
