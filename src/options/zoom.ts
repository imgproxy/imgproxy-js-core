import type { Zoom, ZoomOptionsPartial } from "../types/zoom";
import { guardIsUndef, guardIsNotNum } from "../utils";

const validateValue = (value: number, optName: string): void => {
  guardIsUndef(value, optName);
  guardIsNotNum(value, optName, { addParam: { min: 0 } });
};

const getOpt = (options: ZoomOptionsPartial): Zoom | undefined =>
  options.zoom || options.z;

const test = (options: ZoomOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: ZoomOptionsPartial): string => {
  const zoomOpts = getOpt(options);

  guardIsUndef(zoomOpts, "zoom");
  if (typeof zoomOpts === "string") guardIsNotNum(zoomOpts, "zoom");

  if (typeof zoomOpts === "number") {
    validateValue(zoomOpts, "zoom");
    return `z:${zoomOpts}`;
  }

  validateValue(zoomOpts.zoom_x, "zoom.zoom_x");
  validateValue(zoomOpts.zoom_y, "zoom.zoom_y");
  return `z:${zoomOpts.zoom_x}:${zoomOpts.zoom_y}`;
};

export { test, build };
