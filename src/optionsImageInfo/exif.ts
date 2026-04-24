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

const isExifObject = (
  value: Exclude<Exif, undefined>
): value is Exclude<Exif, 1 | 0 | "t" | "f" | boolean | string> =>
  typeof value === "object" && value !== null;

const build = (options: ExifImageInfoOptionsPartial): string => {
  const exifOpts = getOpt(options);
  guardIsUndef(exifOpts, "EXIF");

  if (!isExifObject(exifOpts)) {
    return `exif:${normalizeBoolean(exifOpts)}`;
  }

  const { enabled, canonical_names } = exifOpts;
  const enabledPart = enabled !== undefined ? normalizeBoolean(enabled) : "t";

  if (canonical_names === undefined) {
    return `exif:${enabledPart}`;
  }

  return `exif:${enabledPart}:${normalizeBoolean(canonical_names)}`;
};

export { test, build };
