import type {
  EnforceThumbnail,
  EnforceThumbnailOptionsPartial,
} from "../types/enforceThumbnail";
import { errorParamIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: EnforceThumbnailOptionsPartial
): EnforceThumbnail | undefined => {
  if ("enforce_thumbnail" in options) {
    return options.enforce_thumbnail;
  }
  if ("eth" in options) {
    return options.eth;
  }

  return undefined;
};

const test = (options: EnforceThumbnailOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: EnforceThumbnailOptionsPartial): string => {
  const enforceThumbnailOpts = getOpt(options);
  errorParamIsUndef(enforceThumbnailOpts, "enforce_thumbnail");
  return `eth:${normalizeBoolean(enforceThumbnailOpts)}`;
};

export { test, build };
