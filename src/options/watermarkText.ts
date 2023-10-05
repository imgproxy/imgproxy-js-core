import type {
  WatermarkText,
  WatermarkTextOptionsPartial,
} from "../types/watermarkText";

const getOpt = (
  options: WatermarkTextOptionsPartial
): WatermarkText | undefined => options.watermark_text || options.wmt;

const test = (options: WatermarkTextOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WatermarkTextOptionsPartial): string => {
  const watermarkTextOpts = getOpt(options);

  if (!watermarkTextOpts) {
    throw new Error("watermark_text option is undefined");
  }

  return `watermark_text:${watermarkTextOpts}`;
};

export { test, build };
