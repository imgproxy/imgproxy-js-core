import type { Format, FormatOptionsPartial } from "../types/format";

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
};

const getOpt = (options: FormatOptionsPartial): Format | undefined =>
  options.format || options.f || options.ext;

const test = (options: FormatOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: FormatOptionsPartial): string => {
  const format = getOpt(options);

  if (!format) {
    throw new Error("format option is undefined");
  } else if (!formatValues[format]) {
    throw new Error(
      "format option is invalid. Must be one of: 'png', 'jpg', 'webp', 'avif', 'gif', 'ico', 'svg', 'bmp', 'tiff', 'mp4'"
    );
  }

  return `format:${format}`;
};

export { test, build };
