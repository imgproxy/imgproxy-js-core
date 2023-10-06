import type {
  Autoquality,
  AutoqualityOptionsPartial,
} from "../types/autoquality";

const getOpt = (options: AutoqualityOptionsPartial): Autoquality | undefined =>
  options.autoquality || options.aq;

const test = (options: AutoqualityOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: AutoqualityOptionsPartial): string => {
  const autoqualityOpts = getOpt(options);

  if (!autoqualityOpts) {
    throw new Error("autoquality option is undefined");
  }

  const method = autoqualityOpts.method || "";
  const target = autoqualityOpts.target || "";
  const min_quality = autoqualityOpts.min_quality || "";
  const max_quality = autoqualityOpts.max_quality || "";
  const allowed_error = autoqualityOpts.allowed_error || "";

  return `autoquality:${method}:${target}:${min_quality}:${max_quality}:${allowed_error}`;
};

export { test, build };
