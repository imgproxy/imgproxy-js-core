import type {
  BackgroundAlpha,
  BackgroundAlphaOptionsPartial,
} from "../types/backgroundAlpha";
import { guardIsUndef } from "../utils";

const getOpt = (
  options: BackgroundAlphaOptionsPartial
): BackgroundAlpha | undefined => options.background_alpha || options.bga;

const test = (options: BackgroundAlphaOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: BackgroundAlphaOptionsPartial): string => {
  const backgroundAlphaOpts = getOpt(options);

  guardIsUndef(backgroundAlphaOpts, "background_alpha");
  if (typeof backgroundAlphaOpts !== "number") {
    throw new Error(
      "background alpha is not correct. Set the value between 0 and 1"
    );
  }
  if (backgroundAlphaOpts < 0 || backgroundAlphaOpts > 1) {
    throw new Error(
      "background alpha is not correct. Set the value between 0 and 1"
    );
  }

  return `background_alpha:${backgroundAlphaOpts}`;
};

export { test, build };
