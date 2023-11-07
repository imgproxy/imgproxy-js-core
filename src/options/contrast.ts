import type { Contrast, ContrastOptionsPartial } from "../types/contrast";
import { errorParamIsUndef } from "../utils";

const getOpt = (options: ContrastOptionsPartial): Contrast | undefined =>
  options.contrast || options.co;

const test = (options: ContrastOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ContrastOptionsPartial): string => {
  const contrastOpts = getOpt(options);

  errorParamIsUndef(contrastOpts, "contrast");
  if (typeof contrastOpts !== "number" || contrastOpts < 0) {
    throw new Error(
      "contrast is not correct. Set the value between 0 and any positive number"
    );
  }

  return `co:${contrastOpts}`;
};

export { test, build };
