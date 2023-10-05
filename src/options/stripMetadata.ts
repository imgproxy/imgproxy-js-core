import type {
  StripMetadata,
  StripMetadataOptionsPartial,
} from "../types/stripMetadata";

const getOpt = (
  options: StripMetadataOptionsPartial
): StripMetadata | undefined => options.strip_metadata || options.sm;

const test = (options: StripMetadataOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: StripMetadataOptionsPartial): string => {
  const stripMetadataOpts = getOpt(options);

  if (!stripMetadataOpts) {
    throw new Error("strip metadata option is undefined");
  }

  return `strip_metadata:${stripMetadataOpts}`;
};

export { test, build };
