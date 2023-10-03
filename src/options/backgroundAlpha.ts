import { BackgroundAlpha, BackgroundAlphaOptionsPartial } from "../types";

const getOpt = (
  options: BackgroundAlphaOptionsPartial
): BackgroundAlpha | undefined => options.background_alpha || options.bga;

const test = (options: BackgroundAlphaOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: BackgroundAlphaOptionsPartial): string => {
  const backgroundAlphaOpts = getOpt(options);

  if (!backgroundAlphaOpts) {
    throw new Error("background alpha option is undefined");
  } else if (typeof backgroundAlphaOpts !== "number") {
    throw new Error(
      "background alpha is not correct. Set the value between 0 and 1"
    );
  } else if (backgroundAlphaOpts < 0 || backgroundAlphaOpts > 1) {
    throw new Error(
      "background alpha is not correct. Set the value between 0 and 1"
    );
  }

  return `background_alpha:${backgroundAlphaOpts}`;
};

export { test, build };
