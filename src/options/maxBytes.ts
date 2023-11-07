import type { MaxBytes, MaxBytesOptionsPartial } from "../types/maxBytes";
import { errorParamIsUndef } from "../utils";

const getOpt = (options: MaxBytesOptionsPartial): MaxBytes | undefined =>
  options.max_bytes || options.mb;

const test = (options: MaxBytesOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: MaxBytesOptionsPartial): string => {
  const maxBytesOpts = getOpt(options);

  errorParamIsUndef(maxBytesOpts, "max_bytes");
  if (typeof maxBytesOpts !== "number") {
    throw new Error("max_bytes option must be a number");
  }
  if (maxBytesOpts < 0) {
    throw new Error("max_bytes option must be a positive number");
  }

  return `mb:${maxBytesOpts}`;
};

export { test, build };
