import {
  MaxAnimationFrames,
  MaxAnimationFramesOptionsPartial,
} from "../types/maxAnimationFrames";

const getOpt = (
  options: MaxAnimationFramesOptionsPartial
): MaxAnimationFrames | undefined =>
  options.max_animation_frames || options.maf;

const test = (options: MaxAnimationFramesOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: MaxAnimationFramesOptionsPartial): string => {
  const maxAnimationFrames = getOpt(options);

  if (!maxAnimationFrames) {
    throw new Error("max_animation_frames option is undefined");
  } else if (typeof maxAnimationFrames !== "number") {
    throw new Error("max_animation_frames option is not a number");
  }

  return `max_animation_frames:${maxAnimationFrames}`;
};

export { test, build };
