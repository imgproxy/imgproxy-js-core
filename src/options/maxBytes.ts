import type { MaxBytes, MaxBytesOptionsPartial } from "../types/maxBytes";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: MaxBytesOptionsPartial): MaxBytes | undefined =>
  options.max_bytes || options.mb;

const test = (options: MaxBytesOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: MaxBytesOptionsPartial): string => {
  const maxBytesOpts = getOpt(options);

  guardIsUndef(maxBytesOpts, "max_bytes");
  guardIsNotNum(maxBytesOpts, "max_bytes", { addParam: { min: 0 } });

  return `mb:${maxBytesOpts}`;
};

export { test, build };
