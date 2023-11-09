import type {
  WatermarkSize,
  WatermarkSizeOptionsPartial,
} from "../types/watermarkSize";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (
  options: WatermarkSizeOptionsPartial
): WatermarkSize | undefined => options.watermark_size || options.wms;

const test = (options: WatermarkSizeOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WatermarkSizeOptionsPartial): string => {
  const watermarkSizeOpts = getOpt(options);

  guardIsUndef(watermarkSizeOpts, "watermark_size");
  const { width, height } = watermarkSizeOpts;
  if (width)
    guardIsNotNum(width, "watermark_size.width", { addParam: { min: 0 } });
  if (height)
    guardIsNotNum(height, "watermark_size.height", { addParam: { min: 0 } });

  const w = width || "";
  const h = height || "";

  return `wms:${w}:${h}`.replace(/:+$/, "");
};

export { test, build };
