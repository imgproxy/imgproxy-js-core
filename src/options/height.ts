import type { Height, HeightOptionsPartial } from "../types/height";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: HeightOptionsPartial): Height | undefined =>
  options.height || options.h;

const test = (options: HeightOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: HeightOptionsPartial): string => {
  const heightOpts = getOpt(options);

  guardIsUndef(heightOpts, "height");
  guardIsNotNum(heightOpts, "height", { addParam: { min: 0 } });

  return `h:${heightOpts}`;
};

export { test, build };
