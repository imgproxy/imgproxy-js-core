import type { Ajust, AjustOptionsPartial } from "../types/ajust";

const getOpt = (options: AjustOptionsPartial): Ajust | undefined =>
  options.ajust || options.aj;

const test = (options: AjustOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: AjustOptionsPartial): string => {
  const ajustOpts = getOpt(options);

  if (!ajustOpts) {
    throw new Error("ajust options are undefined");
  }

  return `ajust:${ajustOpts}`;
};

export { test, build };
