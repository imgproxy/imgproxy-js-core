import { ExtendAspectRatioOptionsPartial, ExtendAspectRatio } from "../types";
import * as gravityOpt from "./gravity";

const getOpt = (
  options: ExtendAspectRatioOptionsPartial
): ExtendAspectRatio | undefined =>
  options.extend_aspect_ratio || options.exar || options.extend_ar;

const test = (options: ExtendAspectRatioOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ExtendAspectRatioOptionsPartial): string => {
  const extendOpts = getOpt(options);

  if (!extendOpts) {
    throw new Error("extend options are undefined");
  } else if (!extendOpts.extend) {
    throw new Error("extend option is undefined");
  }

  const extend = extendOpts.extend;

  const gravity = gravityOpt.test(extendOpts)
    ? gravityOpt.build(extendOpts, { headless: true })
    : "";

  return `extend_aspect_ratio:${extend}:${gravity}`;
};

export { test, build };
