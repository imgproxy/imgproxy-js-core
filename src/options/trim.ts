import type { Trim, TrimOptionsPartial } from "../types/trim";
import { normalizeBoolean } from "../utils";

const getOpt = (options: TrimOptionsPartial): Trim | undefined =>
  options.trim || options.t;

const test = (options: TrimOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: TrimOptionsPartial): string => {
  const trimOpts = getOpt(options);

  if (!trimOpts) {
    throw new Error("trim options are undefined");
  }

  if (!trimOpts.threshold) {
    throw new Error("threshold in trim option is required");
  }

  if (typeof trimOpts.threshold !== "number") {
    throw new Error("threshold in trim is not a number");
  }

  let color = "";

  if (trimOpts.color) {
    color = trimOpts.color;

    if (color.length !== 6 && color.length !== 3 && color.length !== 8) {
      throw new Error("color in trim option must be 3, 6 or 8 characters");
    }

    if (!color.match(/^[0-9a-fA-F]+$/)) {
      throw new Error("color in trim option must be hexadecimal");
    }
  }

  const threshold = trimOpts.threshold;
  const equalHor =
    trimOpts.equal_hor === undefined
      ? ""
      : normalizeBoolean(trimOpts.equal_hor);
  const equalVer =
    trimOpts.equal_ver === undefined
      ? ""
      : normalizeBoolean(trimOpts.equal_ver);

  const result = `${threshold}:${color}:${equalHor}:${equalVer}`.replace(
    /:+$/,
    ""
  );

  return `t:${result}`;
};

export { test, build };
