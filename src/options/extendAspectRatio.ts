import type {
  ExtendAspectRatioOptionsPartial,
  ExtendAspectRatio,
} from "../types/extendAspectRatio";
import * as gravityOpt from "./gravity";
import { guardIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: ExtendAspectRatioOptionsPartial
): ExtendAspectRatio | undefined =>
  options.extend_aspect_ratio || options.exar || options.extend_ar;

const test = (options: ExtendAspectRatioOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ExtendAspectRatioOptionsPartial): string => {
  const extendOpts = getOpt(options);

  guardIsUndef(extendOpts, "extend_aspect_ratio");
  guardIsUndef(extendOpts.extend, "extend_aspect_ratio.extend");

  const gravity = gravityOpt.test(extendOpts)
    ? `:${gravityOpt.build(extendOpts, { headless: true })}`
    : "";

  return `exar:${normalizeBoolean(extendOpts.extend)}${gravity}`;
};

export { test, build };
