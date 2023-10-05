import type {
  WatermarkUrl,
  WatermarkUrlOptionsPartial,
} from "../types/watermarkUrl";

const getOpt = (
  options: WatermarkUrlOptionsPartial
): WatermarkUrl | undefined => options.watermark_url || options.wmu;

const test = (options: WatermarkUrlOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WatermarkUrlOptionsPartial): string => {
  const watermarkUrlOpts = getOpt(options);

  if (!watermarkUrlOpts) {
    throw new Error("watermark_url option is undefined");
  }

  return `watermark_url:${watermarkUrlOpts}`;
};

export { test, build };
