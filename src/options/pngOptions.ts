import type { PNGOptions, PNGOptionsPartial } from "../types/pngOptions";
import { guardIsUndef, guardIsNotNum, guardIsNotBool } from "../utils";

const getOpt = (options: PNGOptionsPartial): PNGOptions | undefined =>
  options.png_options || options.pngo;

const test = (options: PNGOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: PNGOptionsPartial): string => {
  const pngOptions = getOpt(options);

  guardIsUndef(pngOptions, "png_options");
  const { interlaced, quantize, quantization_colors } = pngOptions;

  if (interlaced) guardIsNotBool(interlaced, "png_options.interlaced");
  if (quantize) guardIsNotBool(quantize, "png_options.quantize");
  if (quantization_colors)
    guardIsNotNum(quantization_colors, "png_options.quantization_colors", {
      addParam: { min: 2, max: 256 },
    });

  const inter = interlaced === undefined ? "" : interlaced;
  const quant = quantize === undefined ? "" : quantize;
  const qc = quantization_colors || "";

  return `pngo:${inter}:${quant}:${qc}`.replace(/:+$/, "");
};

export { test, build };
