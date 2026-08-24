import type { Monochrome, MonochromeOptionsPartial } from "../types/monochrome";
import { guardIsNotNum, guardIsNotStr, guardIsUndef } from "../utils";

const getOpt = (options: MonochromeOptionsPartial): Monochrome | undefined =>
  options.monochrome ?? options.mc;

const test = (options: MonochromeOptionsPartial): boolean => {
  return Boolean(getOpt(options));
};

const build = (options: MonochromeOptionsPartial): string => {
  const monochromeOpt = getOpt(options);

  guardIsUndef(monochromeOpt, "monochrome");

  const { intensity, color } = monochromeOpt;

  guardIsNotNum(intensity, "monochrome.intensity", {
    addParam: {
      min: 0,
      max: 1,
    },
  });

  if (color !== undefined) {
    guardIsNotStr(color, "monochrome.color", true);
    return `mc:${intensity}:${color}`;
  }

  return `mc:${intensity}`;
};

export { test, build };
