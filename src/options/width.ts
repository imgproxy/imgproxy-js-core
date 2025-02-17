import type { Width, WidthOptionsPartial } from "../types/width";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: WidthOptionsPartial): Width | undefined =>
  options.width ?? options.w;

const test = (options: WidthOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: WidthOptionsPartial): string => {
  const widthOpts = getOpt(options);

  guardIsUndef(widthOpts, "width");
  guardIsNotNum(widthOpts, "width", { addParam: { min: 0 } });

  return `w:${widthOpts}`;
};

export { test, build };
