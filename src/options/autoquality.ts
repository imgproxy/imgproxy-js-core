import type {
  Autoquality,
  AutoqualityOptionsPartial,
} from "../types/autoquality";

const currentMethods = {
  none: true,
  size: true,
  dssim: true,
  ml: true,
};

const getOpt = (options: AutoqualityOptionsPartial): Autoquality | undefined =>
  options.autoquality || options.aq;

const test = (options: AutoqualityOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: AutoqualityOptionsPartial): string => {
  const autoqualityOpts = getOpt(options);

  if (!autoqualityOpts) {
    throw new Error("autoquality option is undefined");
  }
  if (autoqualityOpts.method && !currentMethods[autoqualityOpts.method]) {
    throw new Error(
      `autoquality method "${
        autoqualityOpts.method
      }" is not supported. Supported methods: ${Object.keys(
        currentMethods
      ).join(",")}`
    );
  }
  if (autoqualityOpts.target) {
    if (typeof autoqualityOpts.target !== "number") {
      throw new Error("autoquality.target is not a number");
    }
    if (autoqualityOpts.target < 0) {
      throw new Error("autoquality.target can't be a negative");
    }
  }
  if (autoqualityOpts.min_quality) {
    if (typeof autoqualityOpts.min_quality !== "number") {
      throw new Error("autoquality.min_quality is not a number");
    }
    if (autoqualityOpts.min_quality < 0) {
      throw new Error("autoquality.min_quality can't be a negative");
    }
    if (autoqualityOpts.min_quality > 100) {
      throw new Error("autoquality.min_quality can't be more than 100");
    }
  }
  if (autoqualityOpts.max_quality) {
    if (typeof autoqualityOpts.max_quality !== "number") {
      throw new Error("autoquality.max_quality is not a number");
    }
    if (autoqualityOpts.max_quality < 0) {
      throw new Error("autoquality.max_quality can't be a negative");
    }
    if (autoqualityOpts.max_quality > 100) {
      throw new Error("autoquality.max_quality can't be more than 100");
    }
  }
  if (autoqualityOpts.allowed_error) {
    if (autoqualityOpts.method !== "dssim" && autoqualityOpts.method !== "ml") {
      throw new Error(
        "autoquality.allowed_error is applicable only to dssim and ml methods"
      );
    }
    if (typeof autoqualityOpts.allowed_error !== "number") {
      throw new Error("autoquality allowed_error is not a number");
    }
    if (autoqualityOpts.allowed_error < 0) {
      throw new Error("autoquality allowed_error can't be a negative");
    }
    if (autoqualityOpts.allowed_error > 1) {
      throw new Error("autoquality allowed_error can't be more than 1");
    }
  }

  const method = autoqualityOpts.method || "";
  const target = autoqualityOpts.target || "";
  const min_quality = autoqualityOpts.min_quality || "";
  const max_quality = autoqualityOpts.max_quality || "";
  const allowed_error = autoqualityOpts.allowed_error || "";

  return `aq:${method}:${target}:${min_quality}:${max_quality}:${allowed_error}`.replace(
    /:+$/,
    ""
  );
};

export { test, build };
