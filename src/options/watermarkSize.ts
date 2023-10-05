import type {
  WatermarkSize,
  WatermarkSizeOptionsPartial,
} from "../types/watermarkSize";

const getOpt = (
  options: WatermarkSizeOptionsPartial
): WatermarkSize | undefined => options.watermark_size || options.wms;

const test = (options: WatermarkSizeOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WatermarkSizeOptionsPartial): string => {
  const watermarkSizeOpts = getOpt(options);

  if (!watermarkSizeOpts) {
    throw new Error("watermark_size option is undefined");
  }

  const width = watermarkSizeOpts.width || "";
  const height = watermarkSizeOpts.height || "";

  return `watermark_size:${width}:${height}`;
};

export { test, build };
