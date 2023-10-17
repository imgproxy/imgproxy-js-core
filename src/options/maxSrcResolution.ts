import type {
  MaxSrcResolution,
  MaxSrcResolutionOptionsPartial,
} from "../types/maxSrcResolution";

const getOpt = (
  options: MaxSrcResolutionOptionsPartial
): MaxSrcResolution | undefined => {
  if ("max_src_resolution" in options) {
    return options.max_src_resolution;
  } else if ("msr" in options) {
    return options.msr;
  }
  return undefined;
};

const test = (options: MaxSrcResolutionOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: MaxSrcResolutionOptionsPartial): string => {
  const maxSrcResolution = getOpt(options);

  if (maxSrcResolution === undefined) {
    throw new Error("max_src_resolution option is undefined");
  }
  if (typeof maxSrcResolution !== "number") {
    throw new Error("max_src_resolution option is not a number");
  }
  if (maxSrcResolution <= 0) {
    throw new Error("max_src_resolution option can't be 0 or less");
  }

  return `msr:${maxSrcResolution}`;
};

export { test, build };
