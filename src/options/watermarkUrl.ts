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
  if (typeof watermarkUrlOpts !== "string") {
    throw new Error("watermark_url option is not a string");
  }

  return `wmu:${watermarkUrlOpts}`;
};

export { test, build };
