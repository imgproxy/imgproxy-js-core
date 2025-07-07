import type { Format, FormatOptionsPartial } from "../types/format";
import { guardIsUndef, guardIsValidVal } from "../utils";

const formatValues = {
  png: true,
  jpg: true,
  jxl: true,
  webp: true,
  avif: true,
  gif: true,
  ico: true,
  svg: true,
  bmp: true,
  tiff: true,
  mp4: true,
  pdf: true,
  best: true,
};

const getOpt = (options: FormatOptionsPartial): Format | undefined =>
  options.format || options.f || options.ext;

const test = (options: FormatOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: FormatOptionsPartial): string => {
  const format = getOpt(options);

  guardIsUndef(format, "format");
  guardIsValidVal(formatValues, format, "format");

  return `f:${format}`;
};

export { test, build };
