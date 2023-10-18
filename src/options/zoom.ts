import type { Zoom, ZoomOptionsPartial } from "../types/zoom";

const validateValue = (value: number, optName: string): void => {
  if (!value) {
    throw new Error(`${optName} is undefined`);
  }

  if (value < 0) {
    throw new Error(`${optName} cannot be negative`);
  }

  if (typeof value !== "number") {
    throw new Error(`${optName} is not a number`);
  }
};

const getOpt = (options: ZoomOptionsPartial): Zoom | undefined =>
  options.zoom || options.z;

const test = (options: ZoomOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: ZoomOptionsPartial): string => {
  const zoomOpts = getOpt(options);

  if (!zoomOpts) {
    throw new Error("zoom options are undefined");
  }

  if (typeof zoomOpts === "string") {
    throw new Error("zoom option is not a number");
  }

  if (typeof zoomOpts === "number") {
    validateValue(zoomOpts, "zoom");
    return `z:${zoomOpts}`;
  }

  validateValue(zoomOpts.zoom_x, "zoom.zoom_x");
  validateValue(zoomOpts.zoom_y, "zoom.zoom_y");
  return `z:${zoomOpts.zoom_x}:${zoomOpts.zoom_y}`;
};

export { test, build };
