import type {
  ExtendAspectRatioOptionsPartial,
  ExtendAspectRatio,
} from "../types/extendAspectRatio";
import * as gravityOpt from "./gravity";
import { normalizeBoolean } from "../utils";

const getOpt = (
  options: ExtendAspectRatioOptionsPartial
): ExtendAspectRatio | undefined =>
  options.extend_aspect_ratio || options.exar || options.extend_ar;

const test = (options: ExtendAspectRatioOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ExtendAspectRatioOptionsPartial): string => {
  const extendOpts = getOpt(options);

  if (!extendOpts) {
    throw new Error("extend aspect ratio options are undefined");
  } else if (!("extend" in extendOpts)) {
    throw new Error("extend in extend aspect ratio option is required");
  }

  const gravity = gravityOpt.test(extendOpts)
    ? `:${gravityOpt.build(extendOpts, { headless: true })}`
    : "";

  return `exar:${normalizeBoolean(extendOpts.extend)}${gravity}`;
};

export { test, build };
