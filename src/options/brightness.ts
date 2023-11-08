import type { Brightness, BrightnessOptionsPartial } from "../types/brightness";
import { guardParamIsUndef } from "../utils";

const getOpt = (options: BrightnessOptionsPartial): Brightness | undefined =>
  options.brightness || options.br;

const test = (options: BrightnessOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: BrightnessOptionsPartial): string => {
  const brightnessOpts = getOpt(options);

  guardParamIsUndef(brightnessOpts, "brightness");
  if (typeof brightnessOpts !== "number") {
    throw new Error("brightness option is not a number");
  }
  if (brightnessOpts < -255 || brightnessOpts > 255) {
    throw new Error(
      "brightness is not correct. Set the value between -255 and 255"
    );
  }

  return `br:${brightnessOpts}`;
};

export { test, build };
