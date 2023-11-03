import type { RawOptions, RawOptionsPartial } from "../typesShared/rawOptions";

const getOpt = (options: RawOptionsPartial): RawOptions | undefined =>
  options.raw_options;

const test = (options: RawOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: RawOptionsPartial): string => {
  const rawOptions = options.raw_options;

  if (!rawOptions) {
    throw new Error("raw_options are undefined");
  }
  if (!Array.isArray(rawOptions)) {
    throw new Error("raw_options is not an array");
  }
  if (!rawOptions.every(opt => Array.isArray(opt))) {
    throw new Error("raw_options is not an array of arrays");
  }

  let rawOpts = "";

  for (let i = 0; i < rawOptions.length; i++) {
    let opt = "";

    for (let j = 0; j < rawOptions[i].length; j++) {
      if (j > 0) opt += ":";
      opt += rawOptions[i][j];
    }
    if (i > 0) rawOpts += "/";
    rawOpts += opt;
  }

  return rawOpts;
};

export { test, build };
