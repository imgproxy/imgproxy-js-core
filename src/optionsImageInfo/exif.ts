import type { Exif, ExifImageInfoOptionsPartial } from "../typesImageInfo/exif";
import { normalizeBoolean } from "../utils";

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

  if (exifOpts === undefined) {
    throw new Error("EXIF option is undefined");
  }

  return `exif:${normalizeBoolean(exifOpts)}`;
};

export { test, build };
