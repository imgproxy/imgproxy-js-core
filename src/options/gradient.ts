import type { Gradient, GradientOptionsPartial } from "../types/gradient";
import {
  guardIsUndef,
  guardIsNotNum,
  guardIsNotStr,
  guardIsValidVal,
} from "../utils";

const currentDirection = {
  down: true,
  up: true,
  right: true,
  left: true,
};

const getOpt = (options: GradientOptionsPartial): Gradient | undefined =>
  options.gradient || options.gr;

const test = (options: GradientOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: GradientOptionsPartial): string => {
  const gradientOpts = getOpt(options);

  guardIsUndef(gradientOpts, "gradient");
  const { opacity, color, direction, start, stop } = gradientOpts;

  guardIsUndef(opacity, "gradient.opacity");
  guardIsNotNum(opacity, "gradient.opacity", {
    addParam: { min: 0, max: 1 },
  });

  if (color) guardIsNotStr(color, "gradient.color", true);
  if (direction) {
    guardIsNotStr(direction, "gradient.direction");
    guardIsValidVal(currentDirection, direction, "gradient.direction");
  }
  if (start)
    guardIsNotNum(start, "gradient.start", { addParam: { min: 0, max: 1 } });
  if (stop)
    guardIsNotNum(stop, "gradient.stop", { addParam: { min: 0, max: 1 } });

  const op = opacity;
  const c = color || "";
  const dir = direction || "";
  const or = start || "";
  const end = stop || "";

  return `gr:${op}:${c}:${dir}:${or}:${end}`.replace(/:+$/, "");
};

export { test, build };
