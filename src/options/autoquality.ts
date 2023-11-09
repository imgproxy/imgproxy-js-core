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
  const { method, target, min_quality, max_quality, allowed_error } =
    autoqualityOpts;
  if (method && !currentMethods[method]) {
    throw new Error(
      `autoquality method "${method}" is not supported. Supported methods: ${Object.keys(
        currentMethods
      ).join(",")}`
    );
  }
  if (target)
    guardIsNotNum(target, "autoquality.target", {
      addParam: { min: 0 },
    });
  if (min_quality)
    guardIsNotNum(min_quality, "autoquality.min_quality", {
      addParam: { min: 0, max: 100 },
    });
  if (max_quality)
    guardIsNotNum(max_quality, "autoquality.max_quality", {
      addParam: { min: 0, max: 100 },
    });
  if (allowed_error) {
    if (method !== "dssim" && method !== "ml") {
      throw new Error(
        "autoquality.allowed_error is applicable only to dssim and ml methods"
      );
    }
    guardIsNotNum(allowed_error, "autoquality.allowed_error", {
      addParam: { min: 0, max: 1 },
    });
  }

  const m = method || "";
  const t = target || "";
  const minQuality = min_quality || "";
  const maxQuality = max_quality || "";
  const ae = allowed_error || "";

  return `aq:${m}:${t}:${minQuality}:${maxQuality}:${ae}`.replace(/:+$/, "");
};

export { test, build };
