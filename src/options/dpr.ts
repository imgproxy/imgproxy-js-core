import type { DPR, DPROptionsPartial } from "../types/dpr";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: DPROptionsPartial): DPR | undefined => options.dpr;

const test = (options: DPROptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: DPROptionsPartial): string => {
  const dprOpts = getOpt(options);

  guardIsUndef(dprOpts, "dpr");
  guardIsNotNum(dprOpts, "dpr", { addParam: { min: 0 } });

  return `dpr:${dprOpts}`;
};

export { test, build };
