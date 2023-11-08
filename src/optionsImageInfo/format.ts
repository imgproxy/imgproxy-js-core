import type {
  NeedFormat,
  FormatImageInfoOptionsPartial,
} from "../typesImageInfo/format";
import { errorParamIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: FormatImageInfoOptionsPartial
): NeedFormat | undefined => {
  if ("format" in options) {
    return options.format;
  } else if ("f" in options) {
    return options.f;
  }

  return undefined;
};

const test = (options: FormatImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: FormatImageInfoOptionsPartial): string => {
  const formatOpts = getOpt(options);
  errorParamIsUndef(formatOpts, "format");
  return `f:${normalizeBoolean(formatOpts)}`;
};

export { test, build };
