import {
  MaxAnimationFrames,
  MaxAnimationFramesOptionsPartial,
} from "../types/maxAnimationFrames";
import { guardIsUndef, guardIsNotNum } from "../utils";

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

  guardIsUndef(maxAnimationFrames, "max_animation_frames");
  guardIsNotNum(maxAnimationFrames, "max_animation_frames", {
    addParam: { min: 0, minEqual: true },
  });

  return `maf:${maxAnimationFrames}`;
};

export { test, build };
