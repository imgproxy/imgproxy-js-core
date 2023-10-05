import type { Watermark, WatermarkOptionsPartial } from "../types/watermark";

const getOpt = (options: WatermarkOptionsPartial): Watermark | undefined =>
  options.watermark || options.wm;

const test = (options: WatermarkOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WatermarkOptionsPartial): string => {
  const watermarkOpts = getOpt(options);

  if (!watermarkOpts) {
    throw new Error("watermark option is undefined");
  } else if (!watermarkOpts.opacity) {
    throw new Error("watermark opacity is mandatory parameter");
  }

  const opacity = watermarkOpts.opacity;
  const position = watermarkOpts.position || "";
  const xOffset = watermarkOpts.x_offset || "";
  const yOffset = watermarkOpts.y_offset || "";
  const scale = watermarkOpts.scale || "";

  return `watermark:${opacity}:${position}:${xOffset}:${yOffset}:${scale}`;
};

export { test, build };
