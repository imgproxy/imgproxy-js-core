import type {
  WatermarkRotate,
  WatermarkRotateOptionsPartial,
} from "../types/watermarkRotate";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (
  options: WatermarkRotateOptionsPartial
): WatermarkRotate | undefined =>
  options.watermark_rotate ?? options.wm_rot ?? options.wmr;

const test = (options: WatermarkRotateOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: WatermarkRotateOptionsPartial): string => {
  const watermarkRotateOpts = getOpt(options);

  guardIsUndef(watermarkRotateOpts, "watermark_rotate");
  guardIsNotNum(watermarkRotateOpts, "watermark_rotate");

  return `wmr:${watermarkRotateOpts}`;
};

export { test, build };
