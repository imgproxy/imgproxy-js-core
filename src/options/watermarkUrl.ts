import type {
  WatermarkUrl,
  WatermarkUrlOptionsPartial,
} from "../types/watermarkUrl";
import { guardIsUndef } from "../utils";

const getOpt = (
  options: WatermarkUrlOptionsPartial
): WatermarkUrl | undefined => options.watermark_url || options.wmu;

const test = (options: WatermarkUrlOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WatermarkUrlOptionsPartial): string => {
  const watermarkUrlOpts = getOpt(options);

  guardIsUndef(watermarkUrlOpts, "watermark_url");
  if (typeof watermarkUrlOpts !== "string") {
    throw new Error("watermark_url option is not a string");
  }

  return `wmu:${watermarkUrlOpts}`;
};

export { test, build };
