import type { Crop, CropOptionsPartial } from "../typesShared/crop";
import * as gravityOpt from "../options/gravity";

const getOpt = (options: CropOptionsPartial): Crop | undefined =>
  options.crop || options.c;

const test = (options: CropOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: CropOptionsPartial): string => {
  const cropOpts = getOpt(options);

  if (!cropOpts) {
    throw new Error("crop options are undefined");
  }
  if (!cropOpts.width) {
    throw new Error("crop.width is undefined");
  }
  if (!cropOpts.height) {
    throw new Error("crop.height is undefined");
  }
  if (typeof cropOpts.width !== "number") {
    throw new Error("crop.width is not a number");
  }
  if (typeof cropOpts.height !== "number") {
    throw new Error("crop.height is not a number");
  }
  if (cropOpts.width < 0) {
    throw new Error("crop.width is can't be negative");
  }
  if (cropOpts.height < 0) {
    throw new Error("crop.height is can't be negative");
  }

  const width = cropOpts.width;
  const height = cropOpts.height;
  const gravity = gravityOpt.test(cropOpts)
    ? gravityOpt.build(cropOpts, { headless: true })
    : "";

  return `c:${width}:${height}:${gravity}`.replace(/:+$/, "");
};

export { test, build };
