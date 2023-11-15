import type {
  WatermarkText,
  WatermarkTextOptionsPartial,
} from "../types/watermarkText";
import { guardIsUndef, guardIsNotStr } from "../utils";

const getOpt = (
  options: WatermarkTextOptionsPartial
): WatermarkText | undefined => options.watermark_text || options.wmt;

const test = (options: WatermarkTextOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WatermarkTextOptionsPartial): string => {
  const watermarkTextOpts = getOpt(options);

  guardIsUndef(watermarkTextOpts, "watermark_text");
  guardIsNotStr(watermarkTextOpts, "watermark_text");

  return `wmt:${watermarkTextOpts}`;
};

export { test, build };
