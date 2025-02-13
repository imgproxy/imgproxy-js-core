import type { Saturation, SaturationOptionsPartial } from "../types/saturation";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: SaturationOptionsPartial): Saturation | undefined =>
  options.saturation ?? options.sa;

const test = (options: SaturationOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: SaturationOptionsPartial): string => {
  const saturationOpts = getOpt(options);

  guardIsUndef(saturationOpts, "saturation");
  guardIsNotNum(saturationOpts, "saturation", { addParam: { min: 0 } });

  return `sa:${saturationOpts}`;
};

export { test, build };
