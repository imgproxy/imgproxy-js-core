import type {
  WatermarkShadow,
  WatermarkShadowOptionsPartial,
} from "../types/watermarkShadow";
import { errorParamIsUndef } from "../utils";

const getOpt = (
  options: WatermarkShadowOptionsPartial
): WatermarkShadow | undefined => options.watermark_shadow || options.wmsh;

const test = (options: WatermarkShadowOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WatermarkShadowOptionsPartial): string => {
  const watermarkShadowOpts = getOpt(options);

  errorParamIsUndef(watermarkShadowOpts, "watermark_shadow");
  if (typeof watermarkShadowOpts !== "number") {
    throw new Error("watermark_shadow option is not a number");
  }
  if (watermarkShadowOpts < 0) {
    throw new Error("watermark_shadow option is can't be a negative");
  }

  return `wmsh:${watermarkShadowOpts}`;
};

export { test, build };
