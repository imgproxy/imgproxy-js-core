import type { Trim, TrimOptionsPartial } from "../types/trim";
import { guardIsUndef, guardIsNotNum, normalizeBoolean } from "../utils";

const getOpt = (options: TrimOptionsPartial): Trim | undefined =>
  options.trim || options.t;

const test = (options: TrimOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: TrimOptionsPartial): string => {
  const trimOpts = getOpt(options);

  guardIsUndef(trimOpts, "trim");
  const { threshold, color, equal_hor, equal_ver } = trimOpts;

  guardIsUndef(threshold, "trim.threshold");
  guardIsNotNum(threshold, "trim.threshold");

  if (color) {
    if (color.length !== 6 && color.length !== 3 && color.length !== 8) {
      throw new Error("trim.color must be 3, 6 or 8 characters");
    }
    if (!color.match(/^[0-9a-fA-F]+$/)) {
      throw new Error("trim.color must be hexadecimal");
    }
  }

  const eh = equal_hor === undefined ? "" : normalizeBoolean(equal_hor);
  const ev = equal_ver === undefined ? "" : normalizeBoolean(equal_ver);
  const cl = color || "";

  return `t:${threshold}:${cl}:${eh}:${ev}`.replace(/:+$/, "");
};

export { test, build };
