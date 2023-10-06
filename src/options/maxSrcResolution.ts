import type {
  MaxSrcResolution,
  MaxSrcResolutionOptionsPartial,
} from "../types/maxSrcResolution";

const getOpt = (
  options: MaxSrcResolutionOptionsPartial
): MaxSrcResolution | undefined => options.max_src_resolution || options.msr;

const test = (options: MaxSrcResolutionOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: MaxSrcResolutionOptionsPartial): string => {
  const maxSrcResolution = getOpt(options);

  if (!maxSrcResolution) {
    throw new Error("max_src_resolution option is undefined");
  } else if (typeof maxSrcResolution !== "number") {
    throw new Error("max_src_resolution option is not a number");
  }

  return `max_src_resolution:${maxSrcResolution}`;
};

export { test, build };
