import type {
  MaxAnimationFrameResolution,
  MAFROptionsPartial,
} from "../types/maxAnimationFrameResolution";
import { guardIsUndef, guardIsNotNum } from "../utils";

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

  guardIsUndef(maxAnimationFrameResolution, "max_animation_frame_resolution");
  guardIsNotNum(maxAnimationFrameResolution, "max_animation_frame_resolution", {
    addParam: { min: 0 },
  });

  return `mafr:${maxAnimationFrameResolution}`;
};

export { test, build };
