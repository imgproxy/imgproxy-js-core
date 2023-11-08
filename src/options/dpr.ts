import type { DPR, DPROptionsPartial } from "../types/dpr";
import { guardParamIsUndef } from "../utils";

const getOpt = (options: DPROptionsPartial): DPR | undefined => options.dpr;

const test = (options: DPROptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: DPROptionsPartial): string => {
  const dprOpts = getOpt(options);

  guardParamIsUndef(dprOpts, "dpr");
  if (typeof dprOpts !== "number") {
    throw new Error("dpr must be a number");
  }
  if (typeof dprOpts === "number" && dprOpts < 0) {
    throw new Error("dpr option cannot be negative");
  }

  return `dpr:${dprOpts}`;
};

export { test, build };
