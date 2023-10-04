import type { Trim, TrimOptionsPartial } from "../types/trim";

const getOpt = (options: TrimOptionsPartial): Trim | undefined =>
  options.trim || options.t;

const test = (options: TrimOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: TrimOptionsPartial): string => {
  const trimOpts = getOpt(options);

  if (!trimOpts) {
    throw new Error("trim options are undefined");
  } else if (!trimOpts.threshold) {
    throw new Error("trim.threshold is undefined");
  }

  const threshold = trimOpts.threshold;
  const color = trimOpts.color || "";
  const equalHor = trimOpts.equal_hor || "";
  const equalVer = trimOpts.equal_ver || "";

  return `trim:${threshold}:${color}:${equalHor}:${equalVer}`;
};

export { test, build };
