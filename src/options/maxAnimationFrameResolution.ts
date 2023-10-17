import type {
  MaxAnimationFrameResolution,
  MAFROptionsPartial,
} from "../types/maxAnimationFrameResolution";

const getOpt = (
  options: MAFROptionsPartial
): MaxAnimationFrameResolution | undefined => {
  if ("max_animation_frame_resolution" in options) {
    return options.max_animation_frame_resolution;
  } else if ("mafr" in options) {
    return options.mafr;
  }
  return undefined;
};

const test = (options: MAFROptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: MAFROptionsPartial): string => {
  const maxAnimationFrameResolution = getOpt(options);

  if (maxAnimationFrameResolution === undefined) {
    throw new Error("max_animation_frame_resolution option is undefined");
  }
  if (typeof maxAnimationFrameResolution !== "number") {
    throw new Error("max_animation_frame_resolution option is not a number");
  }
  if (maxAnimationFrameResolution < 0) {
    throw new Error(
      "max_animation_frame_resolution option can't be a negative"
    );
  }

  return `mafr:${maxAnimationFrameResolution}`;
};

export { test, build };
