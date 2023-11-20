import type { Exif, ExifImageInfoOptionsPartial } from "../typesImageInfo/exif";
import { guardIsUndef, normalizeBoolean } from "../utils";

const getOpt = (options: ExifImageInfoOptionsPartial): Exif | undefined => {
  if ("exif" in options) {
    return options.exif;
  }

  return undefined;
};

const test = (options: ExifImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: ExifImageInfoOptionsPartial): string => {
  const exifOpts = getOpt(options);
  guardIsUndef(exifOpts, "EXIF");
  return `exif:${normalizeBoolean(exifOpts)}`;
};

export { test, build };
