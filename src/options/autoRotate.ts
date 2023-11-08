import type { AutoRotate, AutoRotateOptionsPartial } from "../types/autoRotate";
import { normalizeBoolean, errorParamIsUndef } from "../utils";

const getOpt = (options: AutoRotateOptionsPartial): AutoRotate | undefined => {
  if ("auto_rotate" in options) {
    return options.auto_rotate;
  } else if ("ar" in options) {
    return options.ar;
  }

  return undefined;
};

const test = (options: AutoRotateOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: AutoRotateOptionsPartial): string => {
  const autoRotateOpts = getOpt(options);
  errorParamIsUndef(autoRotateOpts, "auto_rotate");
  return `ar:${normalizeBoolean(autoRotateOpts)}`;
};

export { test, build };
