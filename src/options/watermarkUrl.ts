import type {
  WatermarkUrl,
  WatermarkUrlOptionsPartial,
} from "../types/watermarkUrl";
import { guardIsUndef, guardIsNotStr } from "../utils";

const getOpt = (
  options: WatermarkUrlOptionsPartial
): WatermarkUrl | undefined => options.watermark_url || options.wmu;

const test = (options: WatermarkUrlOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WatermarkUrlOptionsPartial): string => {
  const watermarkUrlOpts = getOpt(options);

  guardIsUndef(watermarkUrlOpts, "watermark_url");
  guardIsNotStr(watermarkUrlOpts, "watermark_url");

  return `wmu:${watermarkUrlOpts}`;
};

export { test, build };
