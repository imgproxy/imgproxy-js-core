import type {
  DisableAnimation,
  DisableAnimationOptionsPartial,
} from "../types/disableAnimation";
import { normalizeBoolean, guardParamIsUndef } from "../utils";

const getOpt = (
  options: DisableAnimationOptionsPartial
): DisableAnimation | undefined => {
  if ("disable_animation" in options) {
    return options.disable_animation;
  } else if ("da" in options) {
    return options.da;
  }

  return undefined;
};

const test = (options: DisableAnimationOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: DisableAnimationOptionsPartial): string => {
  const disableAnimation = getOpt(options);
  guardParamIsUndef(disableAnimation, "disable_animation");
  return `da:${normalizeBoolean(disableAnimation)}`;
};

export { test, build };
