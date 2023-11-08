import type { Raw, RawOptionsPartial } from "../types/raw";
import { errorParamIsUndef, normalizeBoolean } from "../utils";

const getOpt = (options: RawOptionsPartial): Raw | undefined => {
  if ("raw" in options) {
    return options.raw;
  }

  return undefined;
};

const test = (options: RawOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: RawOptionsPartial): string => {
  const raw = getOpt(options);
  errorParamIsUndef(raw, "raw");
  return `raw:${normalizeBoolean(raw)}`;
};

export { test, build };
