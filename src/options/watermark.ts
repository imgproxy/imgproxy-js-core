import type { Watermark, WatermarkOptionsPartial } from "../types/watermark";
import { errorParamIsUndef } from "../utils";

const currentPositions = {
  ce: true,
  no: true,
  so: true,
  ea: true,
  we: true,
  noea: true,
  nowe: true,
  soea: true,
  sowe: true,
  re: true,
};

const getOpt = (options: WatermarkOptionsPartial): Watermark | undefined =>
  options.watermark || options.wm;

const test = (options: WatermarkOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WatermarkOptionsPartial): string => {
  const watermarkOpts = getOpt(options);

  errorParamIsUndef(watermarkOpts, "watermark");
  // watermarkOpts.opacity
  errorParamIsUndef(watermarkOpts?.opacity, "watermark.opacity");
  if (typeof watermarkOpts?.opacity !== "number") {
    throw new Error("watermark.opacity is not a number");
  }
  if (watermarkOpts.opacity < 0 || watermarkOpts.opacity > 1) {
    throw new Error(
      "watermark.opacity is not correct. Set the value between 0 and 1"
    );
  }

  // watermarkOpts.position
  if (watermarkOpts.position) {
    if (typeof watermarkOpts.position !== "string") {
      throw new Error("watermark.position is not a string");
    }
    if (!currentPositions[watermarkOpts.position]) {
      throw new Error(
        `watermark.position is not correct. Set the value from ${Object.keys(
          currentPositions
        ).join(", ")}`
      );
    }
  }

  // watermarkOpts.x_offset
  if (watermarkOpts.x_offset && typeof watermarkOpts.x_offset !== "number") {
    throw new Error("watermark.x_offset is not a number");
  }
  // watermarkOpts.y_offset
  if (watermarkOpts.y_offset && typeof watermarkOpts.y_offset !== "number") {
    throw new Error("watermark.y_offset is not a number");
  }
  // watermarkOpts.scale
  if (watermarkOpts.scale && typeof watermarkOpts.scale !== "number") {
    throw new Error("watermark.scale is not a number");
  }

  const opacity = watermarkOpts.opacity;
  const position = watermarkOpts.position || "";
  const xOffset = watermarkOpts.x_offset || "";
  const yOffset = watermarkOpts.y_offset || "";
  const scale = watermarkOpts.scale || "";

  return `wm:${opacity}:${position}:${xOffset}:${yOffset}:${scale}`.replace(
    /:+$/,
    ""
  );
};

export { test, build };
