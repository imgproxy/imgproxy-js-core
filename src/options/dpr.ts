import type { DPR, DPROptionsPartial } from "../types/dpr";

const getOpt = (options: DPROptionsPartial): DPR | undefined => options.dpr;

const test = (options: DPROptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: DPROptionsPartial): string => {
  const dprOpts = getOpt(options);

  if (!dprOpts) {
    throw new Error("dpr option is undefined");
  } else if (typeof dprOpts === "number" && dprOpts < 0) {
    throw new Error("dpr option must be greater than 0");
  } else if (typeof dprOpts === "string") {
    throw new Error("dpr option cannot be a string");
  }

  return `dpr:${dprOpts}`;
};

export { test, build };
