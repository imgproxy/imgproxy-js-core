import type { AutoRotate, AutoRotateOptionsPartial } from "../types/autoRotate";

const getOpt = (options: AutoRotateOptionsPartial): AutoRotate | undefined =>
  options.auto_rotate || options.ar;

const test = (options: AutoRotateOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: AutoRotateOptionsPartial): string => {
  const autoRotateOpts = getOpt(options);

  if (!autoRotateOpts) {
    throw new Error("auto rotate option is undefined");
  }

  return `auto_rotate:${autoRotateOpts}`;
};

export { test, build };
