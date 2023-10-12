import type {
  StripMetadata,
  StripMetadataOptionsPartial,
} from "../types/stripMetadata";
import { normalizeBoolean } from "../utils";

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

  if (stripMetadataOpts === undefined) {
    throw new Error("strip metadata option is undefined");
  }

  return `sm:${normalizeBoolean(stripMetadataOpts)}`;
};

export { test, build };
