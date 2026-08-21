import type {
  ProgressiveBlur,
  ProgressiveBlurOptionsPartial,
} from "../types/progressiveBlur";
import {
  guardIsUndef,
  guardIsNotNum,
  guardIsNotStr,
  guardIsValidVal,
} from "../utils";

const correctDirection = {
  down: true,
  up: true,
  right: true,
  left: true,
};

const getOpt = (
  options: ProgressiveBlurOptionsPartial
): ProgressiveBlur | undefined => options.progressive_blur || options.pbl;

const test = (options: ProgressiveBlurOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ProgressiveBlurOptionsPartial): string => {
  const progressiveBlurOpts = getOpt(options);

  guardIsUndef(progressiveBlurOpts, "progressive_blur");
  const { sigma, direction, start, stop } = progressiveBlurOpts;

  guardIsUndef(sigma, "progressive_blur.sigma");
  guardIsNotNum(sigma, "progressive_blur.sigma", {
    addParam: { min: 0 },
  });

  if (direction !== undefined) {
    if (typeof direction === "number") {
      guardIsNotNum(direction, "progressive_blur.direction");
    } else {
      guardIsNotStr(direction, "progressive_blur.direction");
      guardIsValidVal(
        correctDirection,
        direction,
        "progressive_blur.direction"
      );
    }
  }
  if (start !== undefined)
    guardIsNotNum(start, "progressive_blur.start", {
      addParam: { min: 0, max: 1 },
    });
  if (stop !== undefined)
    guardIsNotNum(stop, "progressive_blur.stop", {
      addParam: { min: 0, max: 1 },
    });

  const dir = direction ?? "";
  const from = start ?? "";
  const to = stop ?? "";

  return `pbl:${sigma}:${dir}:${from}:${to}`.replace(/:+$/, "");
};

export { test, build };
