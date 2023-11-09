import type {
  MaxSrcResolution,
  MaxSrcResolutionOptionsPartial,
} from "../typesShared/maxSrcResolution";
import { guardIsUndef, guardIsNotNum } from "../utils";

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

  guardIsUndef(maxSrcResolution, "max_src_resolution");
  guardIsNotNum(maxSrcResolution, "max_src_resolution", {
    addParam: { min: 0, minEqual: true },
  });

  return `msr:${maxSrcResolution}`;
};

export { test, build };
