import type { DPI, DPIOptionsPartial } from "../types/dpi";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: DPIOptionsPartial): DPI | undefined => options.dpi;

const test = (options: DPIOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: DPIOptionsPartial): string => {
  const dpiOpts = getOpt(options);

  guardIsUndef(dpiOpts, "dpi");
  guardIsNotNum(dpiOpts, "dpi");

  return `dpi:${dpiOpts}`;
};

export { test, build };
