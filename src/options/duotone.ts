import type { Duotone, DuotoneOptionsPartial } from "../types/duotone";
import { guardIsNotNum, guardIsUndef } from "../utils";

const getOpt = (options: DuotoneOptionsPartial): Duotone | undefined =>
  options.duotone ?? options.dt;

const test = (options: DuotoneOptionsPartial): boolean => {
  return Boolean(getOpt(options));
};

const build = (options: DuotoneOptionsPartial): string => {
  const duotoneOpt = getOpt(options);

  guardIsUndef(duotoneOpt, "duotone");

  const { intensity, color1 = "", color2 = "" } = duotoneOpt;

  guardIsNotNum(intensity, "duotone.intensity", {
    addParam: {
      min: 0,
      max: 1,
    },
  });

  if (color2) {
    return `dt:${intensity}:${color1}:${color2}`;
  } else if (color1) {
    return `dt:${intensity}:${color1}`;
  } else {
    return `dt:${intensity}`;
  }
};

export { test, build };
