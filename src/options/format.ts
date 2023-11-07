import type { Format, FormatOptionsPartial } from "../types/format";
import { errorParamIsUndef } from "../utils";

const formatValues = {
  png: true,
  jpg: true,
  webp: true,
  avif: true,
  gif: true,
  ico: true,
  svg: true,
  bmp: true,
  tiff: true,
  mp4: true,
  best: true,
};

const getOpt = (options: FormatOptionsPartial): Format | undefined =>
  options.format || options.f || options.ext;

const test = (options: FormatOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: FormatOptionsPartial): string => {
  const format = getOpt(options);

  errorParamIsUndef(format, "format");
  if (!formatValues[format as Format]) {
    throw new Error(
      `format option is invalid. Must be one of: ${Object.keys(
        formatValues
      ).join(",")}`
    );
  }

  return `f:${format}`;
};

export { test, build };
