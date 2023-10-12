import type { AutoRotate, AutoRotateOptionsPartial } from "../types/autoRotate";
import { normalizeBoolean } from "../utils";

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

  if (autoRotateOpts === undefined) {
    throw new Error("auto rotate option is undefined");
  }

  return `ar:${normalizeBoolean(autoRotateOpts)}`;
};

export { test, build };
