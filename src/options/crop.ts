import type { Crop, CropOptionsPartial } from "../types/crop";
import * as gravityOpt from "./gravity";

const getOpt = (options: CropOptionsPartial): Crop | undefined =>
  options.crop || options.c;

const test = (options: CropOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: CropOptionsPartial): string => {
  const cropOpts = getOpt(options);

  if (!cropOpts) {
    throw new Error("crop options are undefined");
  } else if (!cropOpts.width) {
    throw new Error("crop.width is undefined");
  } else if (!cropOpts.height) {
    throw new Error("crop.height is undefined");
  }

  const width = cropOpts.width;
  const height = cropOpts.height;
  const gravity = gravityOpt.test(cropOpts)
    ? gravityOpt.build(cropOpts, { headless: true })
    : "";

  return `crop:${width}:${height}:${gravity}`;
};

export { test, build };
