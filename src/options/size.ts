import { SizeOptionsPartial, Size } from "../types";
import * as extendOpt from "./extend";

const getOpt = (options: SizeOptionsPartial): Size | undefined =>
  options.size || options.s;

const test = (options: SizeOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: SizeOptionsPartial): string => {
  const sizeOpts = getOpt(options);

  if (!sizeOpts) {
    throw new Error("size options are undefined");
  }

  const width = sizeOpts.width || "";
  const height = sizeOpts.height || "";
  const enlarge = sizeOpts.enlarge || "";
  const extend = extendOpt.test(sizeOpts)
    ? extendOpt.build(sizeOpts, { headless: true })
    : "";

  return `size:${width}:${height}:${enlarge}:${extend}`;
};

export { test, build };
