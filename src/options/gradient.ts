import type { Gradient, GradientOptionsPartial } from "../types/gradient";
import { guardIsUndef, guardIsNotNum } from "../utils";

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

  // gradientOpts.color
  if (color) {
    if (typeof color !== "string") {
      throw new Error("gradient.color is not a string");
    }
    if (color.match(/[^0-9a-fA-F]/)) {
      throw new Error("gradient.color must be hexadecimal");
    }
    if (color.length !== 3 && color.length !== 6 && color.length !== 8) {
      throw new Error(
        "gradient.color must be 3, 6 or 8 characters long (with alpha)"
      );
    }
  }

  // gradientOpts.direction
  if (direction) {
    if (typeof direction !== "string") {
      throw new Error("gradient.direction is not a string");
    }
    if (!currentDirection[direction]) {
      throw new Error(
        "gradient.direction must be one of: down, up, right, left"
      );
    }
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
