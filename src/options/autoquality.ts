import type {
  Autoquality,
  AutoqualityOptionsPartial,
} from "../types/autoquality";
import { guardIsUndef, guardIsNotNum, guardIsValidVal } from "../utils";

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
  if (method) guardIsValidVal(currentMethods, method, "autoquality.method");
  if (target !== undefined)
    guardIsNotNum(target, "autoquality.target", {
      addParam: { min: 0 },
    });
  if (min_quality !== undefined)
    guardIsNotNum(min_quality, "autoquality.min_quality", {
      addParam: { min: 0, max: 100 },
    });
  if (max_quality !== undefined)
    guardIsNotNum(max_quality, "autoquality.max_quality", {
      addParam: { min: 0, max: 100 },
    });
  if (allowed_error !== undefined) {
    if (method !== "dssim" && method !== "ml") {
      throw new Error(
        "autoquality.allowed_error is applicable only to dssim and ml methods"
      );
    }
    guardIsNotNum(allowed_error, "autoquality.allowed_error", {
      addParam: { min: 0, max: 1 },
    });
  }

  const m = method ?? "";
  const t = target ?? "";
  const minQuality = min_quality ?? "";
  const maxQuality = max_quality ?? "";
  const ae = allowed_error ?? "";

  return `aq:${m}:${t}:${minQuality}:${maxQuality}:${ae}`.replace(/:+$/, "");
};

export { test, build };
