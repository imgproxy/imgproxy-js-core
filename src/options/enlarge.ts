import type { EnlargeOptionsPartial, Enlarge } from "../types/enlarge";
import { errorParamIsUndef, normalizeBoolean } from "../utils";

const getOpt = (options: EnlargeOptionsPartial): Enlarge | undefined => {
  if ("enlarge" in options) {
    return options.enlarge;
  } else if ("el" in options) {
    return options.el;
  }

  return undefined;
};

const test = (options: EnlargeOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: EnlargeOptionsPartial): string => {
  const enlargeOpts = getOpt(options);
  errorParamIsUndef(enlargeOpts, "enlarge");
  return `el:${normalizeBoolean(enlargeOpts)}`;
};

export { test, build };
