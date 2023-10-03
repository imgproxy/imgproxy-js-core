import { Saturation, SaturationOptionsPartial } from "../types";

const getOpt = (options: SaturationOptionsPartial): Saturation | undefined =>
  options.saturation || options.sa;

const test = (options: SaturationOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: SaturationOptionsPartial): string => {
  const saturationOpts = getOpt(options);

  if (!saturationOpts) {
    throw new Error("saturation option is undefined");
  } else if (typeof saturationOpts !== "number") {
    throw new Error("saturation is not correct. Set the value between 0 and 2");
  } else if (saturationOpts < 0 || saturationOpts > 2) {
    throw new Error("saturation is not correct. Set the value between 0 and 2");
  }

  return `saturation:${saturationOpts}`;
};

export { test, build };
