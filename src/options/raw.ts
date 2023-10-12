import type { Raw, RawOptionsPartial } from "../types/raw";
import { normalizeBoolean } from "../utils";

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

  if (raw === undefined) {
    throw new Error("raw option is undefined");
  }

  return `raw:${normalizeBoolean(raw)}`;
};

export { test, build };
