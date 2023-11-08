import type { Brightness, BrightnessOptionsPartial } from "../types/brightness";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: BrightnessOptionsPartial): Brightness | undefined =>
  options.brightness || options.br;

const test = (options: BrightnessOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: BrightnessOptionsPartial): string => {
  const brightnessOpts = getOpt(options);

  guardIsUndef(brightnessOpts, "brightness");
  guardIsNotNum(brightnessOpts, "brightness", {
    addParam: { type: "minmax", value: [-255, 255] },
  });

  return `br:${brightnessOpts}`;
};

export { test, build };
