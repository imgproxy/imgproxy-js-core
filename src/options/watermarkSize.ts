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
  if (watermarkSizeOpts.width) {
    if (typeof watermarkSizeOpts.width !== "number") {
      throw new Error("watermark_size.width option is not a number");
    }
    if (watermarkSizeOpts.width < 0) {
      throw new Error("watermark_size.width option is can't be a negative");
    }
  }
  if (watermarkSizeOpts.height) {
    if (typeof watermarkSizeOpts.height !== "number") {
      throw new Error("watermark_size.height option is not a number");
    }
    if (watermarkSizeOpts.height < 0) {
      throw new Error("watermark_size.height option is can't be a negative");
    }
  }

  const width = watermarkSizeOpts.width || "";
  const height = watermarkSizeOpts.height || "";

  return `wms:${width}:${height}`.replace(/:+$/, "");
};

export { test, build };
