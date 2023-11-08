import type {
  StripMetadata,
  StripMetadataOptionsPartial,
} from "../types/stripMetadata";
import { guardParamIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: StripMetadataOptionsPartial
): StripMetadata | undefined => {
  {
    if ("strip_metadata" in options) {
      return options.strip_metadata;
    } else if ("sm" in options) {
      return options.sm;
    }

    return undefined;
  }
};

const test = (options: StripMetadataOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: StripMetadataOptionsPartial): string => {
  const stripMetadataOpts = getOpt(options);
  guardParamIsUndef(stripMetadataOpts, "strip_metadata");
  return `sm:${normalizeBoolean(stripMetadataOpts)}`;
};

export { test, build };
