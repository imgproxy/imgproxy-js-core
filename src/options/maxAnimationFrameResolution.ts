import type {
  MaxAnimationFrameResolution,
  MAFROptionsPartial,
} from "../types/maxAnimationFrameResolution";

const getOpt = (
  options: MAFROptionsPartial
): MaxAnimationFrameResolution | undefined =>
  options.max_animation_frame_resolution || options.mafr;

const test = (options: MAFROptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: MAFROptionsPartial): string => {
  const maxAnimationFrameResolution = getOpt(options);

  if (!maxAnimationFrameResolution) {
    throw new Error("max_animation_frame_resolution option is undefined");
  } else if (typeof maxAnimationFrameResolution !== "number") {
    throw new Error("max_animation_frame_resolution option is not a number");
  }

  return `max_animation_frame_resolution:${maxAnimationFrameResolution}`;
};

export { test, build };
