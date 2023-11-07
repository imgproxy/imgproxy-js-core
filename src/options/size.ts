import type { SizeOptionsPartial, Size } from "../types/size";
import * as extendOpt from "./extend";
import { errorParamIsUndef, normalizeBoolean } from "../utils";

const getOpt = (options: SizeOptionsPartial): Size | undefined =>
  options.size || options.s;

const test = (options: SizeOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: SizeOptionsPartial): string => {
  const sizeOpts = getOpt(options);

  errorParamIsUndef(sizeOpts, "size");
  if (sizeOpts?.width && typeof sizeOpts.width !== "number") {
    throw new Error(`incorrect width. width must be a number`);
  }
  if (sizeOpts?.height && typeof sizeOpts.height !== "number") {
    throw new Error(`incorrect height. height must be a number`);
  }
  if (sizeOpts?.width && sizeOpts.width < 0) {
    throw new Error(`incorrect width. width must be more than 0`);
  }
  if (sizeOpts?.height && sizeOpts.height < 0) {
    throw new Error(`incorrect height. height must be more than 0`);
  }

  const width = sizeOpts?.width || "";
  const height = sizeOpts?.height || "";
  const enlarge =
    sizeOpts?.enlarge === undefined ? "" : normalizeBoolean(sizeOpts.enlarge);
  const extend = extendOpt.test(sizeOpts as Size)
    ? extendOpt.build(sizeOpts as Size, { headless: true })
    : "";

  const result = `${width}:${height}:${enlarge}:${extend}`.replace(/:+$/, "");

  return `s:${result}`;
};

export { test, build };
