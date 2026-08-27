import type {
  PreserveHDR,
  PreserveHDROptionsPartial,
} from "../types/preserveHdr";
import { guardIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: PreserveHDROptionsPartial
): PreserveHDR | undefined => {
  if ("preserve_hdr" in options) {
    return options.preserve_hdr;
  } else if ("ph" in options) {
    return options.ph;
  }

  return undefined;
};

const test = (options: PreserveHDROptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: PreserveHDROptionsPartial): string => {
  const preserveHdrOpts = getOpt(options);
  guardIsUndef(preserveHdrOpts, "preserve_hdr");
  return `ph:${normalizeBoolean(preserveHdrOpts)}`;
};

export { test, build };
