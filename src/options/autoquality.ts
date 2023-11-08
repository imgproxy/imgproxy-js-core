import type {
  Autoquality,
  AutoqualityOptionsPartial,
} from "../types/autoquality";
import { guardIsUndef, guardIsNotNum } from "../utils";

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

  guardIsUndef(autoqualityOpts, "autoquality");
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
    guardIsNotNum(autoqualityOpts.target, "autoquality.target", {
      addParam: { type: "min", value: 0 },
    });
  }
  if (autoqualityOpts.min_quality) {
    guardIsNotNum(autoqualityOpts.min_quality, "autoquality.min_quality", {
      addParam: { type: "minmax", value: [0, 100] },
    });
  }
  if (autoqualityOpts.max_quality) {
    guardIsNotNum(autoqualityOpts.max_quality, "autoquality.max_quality", {
      addParam: { type: "minmax", value: [0, 100] },
    });
  }
  if (autoqualityOpts.allowed_error) {
    if (autoqualityOpts.method !== "dssim" && autoqualityOpts.method !== "ml") {
      throw new Error(
        "autoquality.allowed_error is applicable only to dssim and ml methods"
      );
    }
    guardIsNotNum(autoqualityOpts.allowed_error, "autoquality.allowed_error", {
      addParam: { type: "minmax", value: [0, 1] },
    });
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
