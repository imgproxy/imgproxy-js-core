import * as extendOpt from "./extend";
import { ResizeOptionsPartial, Resize } from "../types";

const getOpt = (options: ResizeOptionsPartial): Resize | undefined =>
  options.resize || options.rs;

const test = (options: ResizeOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ResizeOptionsPartial): string => {
  const resizeOpts = getOpt(options);

  if (!resizeOpts) {
    throw new Error("resize options are undefined");
  }

  const resizingType = resizeOpts.resizing_type || "";
  const width = resizeOpts.width || "";
  const height = resizeOpts.height || "";
  const enlarge = resizeOpts.enlarge || "";
  const extend = extendOpt.test(resizeOpts) ? extendOpt.build(resizeOpts) : "";

  return `resize:${resizingType}:${width}:${height}:${enlarge}:${extend}`;
};

export { test, build };
