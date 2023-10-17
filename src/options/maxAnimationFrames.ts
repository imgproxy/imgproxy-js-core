import {
  MaxAnimationFrames,
  MaxAnimationFramesOptionsPartial,
} from "../types/maxAnimationFrames";

const getOpt = (
  options: MaxAnimationFramesOptionsPartial
): MaxAnimationFrames | undefined => {
  if ("max_animation_frames" in options) {
    return options.max_animation_frames;
  } else if ("maf" in options) {
    return options.maf;
  }
  return undefined;
};

const test = (options: MaxAnimationFramesOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: MaxAnimationFramesOptionsPartial): string => {
  const maxAnimationFrames = getOpt(options);

  if (maxAnimationFrames === undefined) {
    throw new Error("max_animation_frames option is undefined");
  }
  if (typeof maxAnimationFrames !== "number") {
    throw new Error("max_animation_frames option is not a number");
  }
  if (maxAnimationFrames <= 0) {
    throw new Error("max_animation_frames option can't be 0 or less");
  }

  return `maf:${maxAnimationFrames}`;
};

export { test, build };
