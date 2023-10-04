import type { EnlargeOptionsPartial, Enlarge } from "../types/enlarge";

const getOpt = (options: EnlargeOptionsPartial): Enlarge | undefined =>
  options.enlarge || options.el;

const test = (options: EnlargeOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: EnlargeOptionsPartial): string => {
  const enlargeOpts = getOpt(options);

  if (!enlargeOpts) {
    throw new Error("enlarge options are undefined");
  }

  return `enlarge:${enlargeOpts}`;
};

export { test, build };
