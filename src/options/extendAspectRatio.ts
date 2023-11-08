import type {
  ExtendAspectRatioOptionsPartial,
  ExtendAspectRatio,
} from "../types/extendAspectRatio";
import * as gravityOpt from "./gravity";
import { guardParamIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: ExtendAspectRatioOptionsPartial
): ExtendAspectRatio | undefined =>
  options.extend_aspect_ratio || options.exar || options.extend_ar;

const test = (options: ExtendAspectRatioOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ExtendAspectRatioOptionsPartial): string => {
  const extendOpts = getOpt(options);

  guardParamIsUndef(extendOpts, "extend_aspect_ratio");
  guardParamIsUndef(extendOpts.extend, "extend_aspect_ratio.extend");

  const gravity = gravityOpt.test(extendOpts)
    ? `:${gravityOpt.build(extendOpts, { headless: true })}`
    : "";

  return `exar:${normalizeBoolean(extendOpts.extend)}${gravity}`;
};

export { test, build };
