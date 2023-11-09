import type { SizeOptionsPartial, Size } from "../types/size";
import * as extendOpt from "./extend";
import { guardIsUndef, guardIsNotNum, normalizeBoolean } from "../utils";

const getOpt = (options: SizeOptionsPartial): Size | undefined =>
  options.size || options.s;

const test = (options: SizeOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: SizeOptionsPartial): string => {
  const sizeOpts = getOpt(options);

  guardIsUndef(sizeOpts, "size");
  const { width, height, enlarge } = sizeOpts;

  if (width) guardIsNotNum(width, "size.width", { addParam: { min: 0 } });
  if (height) guardIsNotNum(height, "size.height", { addParam: { min: 0 } });

  const w = width || "";
  const h = height || "";
  const el = enlarge === undefined ? "" : normalizeBoolean(enlarge);
  const ex = extendOpt.test(sizeOpts)
    ? extendOpt.build(sizeOpts, { headless: true })
    : "";

  return `s:${w}:${h}:${el}:${ex}`.replace(/:+$/, "");
};

export { test, build };
