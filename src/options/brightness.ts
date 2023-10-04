import type { Brightness, BrightnessOptionsPartial } from "../types/brightness";

const getOpt = (options: BrightnessOptionsPartial): Brightness | undefined =>
  options.brightness || options.br;

const test = (options: BrightnessOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: BrightnessOptionsPartial): string => {
  const brightnessOpts = getOpt(options);

  if (!brightnessOpts) {
    throw new Error("brightness option is undefined");
  } else if (typeof brightnessOpts !== "number") {
    throw new Error(
      "brightness is not correct. Set the value between -255 and 255"
    );
  } else if (brightnessOpts < -255 || brightnessOpts > 255) {
    throw new Error(
      "brightness is not correct. Set the value between -255 and 255"
    );
  }

  return `brightness:${brightnessOpts}`;
};

export { test, build };
