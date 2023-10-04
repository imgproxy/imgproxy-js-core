import type { Saturation, SaturationOptionsPartial } from "../types/saturation";

const getOpt = (options: SaturationOptionsPartial): Saturation | undefined =>
  options.saturation || options.sa;

const test = (options: SaturationOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: SaturationOptionsPartial): string => {
  const saturationOpts = getOpt(options);

  if (!saturationOpts) {
    throw new Error("saturation option is undefined");
  } else if (typeof saturationOpts !== "number" || saturationOpts < 0) {
    throw new Error(
      "saturation is not correct. Set the value between 0 and any positive number"
    );
  }

  return `saturation:${saturationOpts}`;
};

export { test, build };
