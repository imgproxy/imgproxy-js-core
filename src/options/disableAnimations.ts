import type {
  DisableAnimation,
  DisableAnimationOptionsPartial,
} from "../types/disableAnimation";

const getOpt = (
  options: DisableAnimationOptionsPartial
): DisableAnimation | undefined => options.disable_animation || options.da;

const test = (options: DisableAnimationOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: DisableAnimationOptionsPartial): string => {
  const disableAnimation = getOpt(options);

  if (!disableAnimation) {
    throw new Error("disable animation option is undefined");
  }

  return `disable_animation:${disableAnimation}`;
};

export { test, build };
