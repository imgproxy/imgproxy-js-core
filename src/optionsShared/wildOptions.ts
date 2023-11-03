import type {
  WildOptions,
  WildOptionsPartial,
} from "../typesShared/wildOptions";

const getOpt = (options: WildOptionsPartial): WildOptions | undefined =>
  options.wild_options;

const test = (options: WildOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: WildOptionsPartial): string => {
  const wildOptions = options.wild_options;

  if (!wildOptions) {
    throw new Error("raw_options are undefined");
  }
  if (!Array.isArray(wildOptions)) {
    throw new Error("raw_options is not an array");
  }
  if (!wildOptions.every(opt => Array.isArray(opt))) {
    throw new Error("raw_options is not an array of arrays");
  }

  let wildOpts = "";

  for (let i = 0; i < wildOptions.length; i++) {
    let opt = "";

    for (let j = 0; j < wildOptions[i].length; j++) {
      if (j > 0) opt += ":";
      opt += wildOptions[i][j];
    }
    if (i > 0) wildOpts += "/";
    wildOpts += opt;
  }

  return wildOpts;
};

export { test, build };
