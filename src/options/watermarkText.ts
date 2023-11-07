import type {
  WatermarkText,
  WatermarkTextOptionsPartial,
} from "../types/watermarkText";
import { errorParamIsUndef } from "../utils";

const getOpt = (
  options: WatermarkTextOptionsPartial
): WatermarkText | undefined => options.watermark_text || options.wmt;

const test = (options: WatermarkTextOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WatermarkTextOptionsPartial): string => {
  const watermarkTextOpts = getOpt(options);

  errorParamIsUndef(watermarkTextOpts, "watermark_text");
  if (typeof watermarkTextOpts !== "string") {
    throw new Error("watermark_text option is not a string");
  }

  return `wmt:${watermarkTextOpts}`;
};

export { test, build };
