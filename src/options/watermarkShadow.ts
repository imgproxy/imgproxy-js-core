import type {
  WatermarkShadow,
  WatermarkShadowOptionsPartial,
} from "../types/watermarkShadow";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (
  options: WatermarkShadowOptionsPartial
): WatermarkShadow | undefined => options.watermark_shadow ?? options.wmsh;

const test = (options: WatermarkShadowOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WatermarkShadowOptionsPartial): string => {
  const watermarkShadowOpts = getOpt(options);

  guardIsUndef(watermarkShadowOpts, "watermark_shadow");
  guardIsNotNum(watermarkShadowOpts, "watermark_shadow", {
    addParam: { min: 0 },
  });

  return `wmsh:${watermarkShadowOpts}`;
};

export { test, build };
