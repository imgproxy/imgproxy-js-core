import type { PNGOptions, PNGOptionsPartial } from "../types/pngOptions";
import { guardParamIsUndef } from "../utils";

const getOpt = (options: PNGOptionsPartial): PNGOptions | undefined =>
  options.png_options || options.pngo;

const test = (options: PNGOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: PNGOptionsPartial): string => {
  const pngOptions = getOpt(options);

  guardParamIsUndef(pngOptions, "png_options");
  if (pngOptions.interlaced && typeof pngOptions.interlaced !== "boolean") {
    throw new Error("png_options.interlaced is not a boolean");
  }
  if (pngOptions.quantize && typeof pngOptions.quantize !== "boolean") {
    throw new Error("png_options.quantize is not a boolean");
  }
  if (pngOptions.quantization_colors) {
    if (typeof pngOptions.quantization_colors !== "number") {
      throw new Error("png_options.quantization_colors is not a number");
    }
    if (
      pngOptions.quantization_colors < 2 ||
      pngOptions.quantization_colors > 256
    ) {
      throw new Error(
        "png_options.quantization_colors should be between 2 and 256"
      );
    }
  }

  const interlaced =
    pngOptions.interlaced === undefined ? "" : pngOptions.interlaced;
  const quantize = pngOptions.quantize === undefined ? "" : pngOptions.quantize;
  const qc = pngOptions.quantization_colors || "";

  return `pngo:${interlaced}:${quantize}:${qc}`.replace(/:+$/, "");
};

export { test, build };
