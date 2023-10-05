import type {
  WatermarkShadow,
  WatermarkShadowOptionsPartial,
} from "../types/watermarkShadow";

const getOpt = (
  options: WatermarkShadowOptionsPartial
): WatermarkShadow | undefined => options.watermark_shadow || options.wmsh;

const test = (options: WatermarkShadowOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WatermarkShadowOptionsPartial): string => {
  const watermarkShadowOpts = getOpt(options);

  if (!watermarkShadowOpts) {
    throw new Error("watermark shadow option is undefined");
  }

  return `watermark_shadow:${watermarkShadowOpts}`;
};

export { test, build };