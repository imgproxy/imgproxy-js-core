import type { AvifOptions, AvifOptionsPartial } from "../types/avifOptions";
import { guardIsUndef, guardIsValidVal } from "../utils";

const correctOptions = {
  auto: true,
  on: true,
  off: true,
};

const getOpt = (options: AvifOptionsPartial): AvifOptions | undefined =>
  options.avif_options || options.avifo;

const test = (options: AvifOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: AvifOptionsPartial): string => {
  const avifOptions = getOpt(options);
  let subsample: string;

  guardIsUndef(avifOptions, "avif_options");

  if (typeof avifOptions === "string") {
    subsample = avifOptions;
  } else {
    subsample = avifOptions.subsample;
  }

  guardIsValidVal(correctOptions, subsample, "avif_options");

  return `avifo:${subsample}`;
};

export { test, build };
