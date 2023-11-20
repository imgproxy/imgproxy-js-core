import type {
  BackgroundAlpha,
  BackgroundAlphaOptionsPartial,
} from "../types/backgroundAlpha";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (
  options: BackgroundAlphaOptionsPartial
): BackgroundAlpha | undefined => options.background_alpha || options.bga;

const test = (options: BackgroundAlphaOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: BackgroundAlphaOptionsPartial): string => {
  const backgroundAlphaOpts = getOpt(options);

  guardIsUndef(backgroundAlphaOpts, "background_alpha");
  guardIsNotNum(backgroundAlphaOpts, "background_alpha", {
    addParam: { min: 0, max: 1 },
  });

  return `background_alpha:${backgroundAlphaOpts}`;
};

export { test, build };
