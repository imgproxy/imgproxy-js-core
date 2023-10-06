import type { Raw, RawOptionsPartial } from "../types/raw";

const getOpt = (options: RawOptionsPartial): Raw | undefined => options.raw;

const test = (options: RawOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: RawOptionsPartial): string => {
  const raw = getOpt(options);

  if (!raw) {
    throw new Error("raw option is undefined");
  }

  return `raw:${raw}`;
};

export { test, build };
