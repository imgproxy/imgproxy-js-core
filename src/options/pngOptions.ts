import type { PNGOptions, PNGOptionsPartial } from "../types/pngOptions";

const getOpt = (options: PNGOptionsPartial): PNGOptions | undefined =>
  options.png_options || options.pngo;

const test = (options: PNGOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: PNGOptionsPartial): string => {
  const pngOptions = getOpt(options);

  if (!pngOptions) {
    throw new Error("png options option is undefined");
  }

  const interlaced = pngOptions.interlaced || "";
  const quantize = pngOptions.quantize || "";
  const qc = pngOptions.quantization_colors || "";

  return `png_options:${interlaced}:${quantize}:${qc}`;
};

export { test, build };
