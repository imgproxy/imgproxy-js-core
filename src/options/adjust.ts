import type { Adjust, AdjustOptionsPartial } from "../types/adjust";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: AdjustOptionsPartial): Adjust | undefined =>
  options.adjust || options.a;

const test = (options: AdjustOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: AdjustOptionsPartial): string => {
  const adjustOpts = getOpt(options);

  guardIsUndef(adjustOpts, "adjust");
  if (adjustOpts.brightness)
    guardIsNotNum(adjustOpts.brightness, "adjust.brightness", {
      addParam: { min: -255, max: 255 },
    });

  const brightness = adjustOpts.brightness || "";
  const contrast = adjustOpts.contrast || "";
  const saturation = adjustOpts.saturation || "";

  return `a:${brightness}:${contrast}:${saturation}`;
};

export { test, build };
