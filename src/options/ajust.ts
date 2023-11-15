import type { Ajust, AjustOptionsPartial } from "../types/ajust";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: AjustOptionsPartial): Ajust | undefined =>
  options.ajust || options.aj;

const test = (options: AjustOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: AjustOptionsPartial): string => {
  const ajustOpts = getOpt(options);

  guardIsUndef(ajustOpts, "ajust");
  if (ajustOpts.brightness)
    guardIsNotNum(ajustOpts.brightness, "ajust.brightness", {
      addParam: { min: -255, max: 255 },
    });

  const brightness = ajustOpts.brightness || "";
  const contrast = ajustOpts.contrast || "";
  const saturation = ajustOpts.saturation || "";

  return `aj:${brightness}:${contrast}:${saturation}`;
};

export { test, build };
