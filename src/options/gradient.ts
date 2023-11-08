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
  // gradientOpts.opacity
  guardIsUndef(gradientOpts.opacity, "gradient.opacity");
  guardIsNotNum(gradientOpts.opacity, "gradient.opacity", {
    addParam: { type: "minmax", value: [0, 1] },
  });

  // gradientOpts.color
  if (gradientOpts.color) {
    if (typeof gradientOpts.color !== "string") {
      throw new Error("gradient.color is not a string");
    }
    if (gradientOpts.color.match(/[^0-9a-fA-F]/)) {
      throw new Error("gradient.color must be hexadecimal");
    }
    if (
      gradientOpts.color.length !== 3 &&
      gradientOpts.color.length !== 6 &&
      gradientOpts.color.length !== 8
    ) {
      throw new Error(
        "gradient.color must be 3, 6 or 8 characters long (with alpha)"
      );
    }
  }

  // gradientOpts.direction
  if (gradientOpts.direction) {
    if (typeof gradientOpts.direction !== "string") {
      throw new Error("gradient.direction is not a string");
    }
    if (!currentDirection[gradientOpts.direction]) {
      throw new Error(
        "gradient.direction must be one of: down, up, right, left"
      );
    }
  }

  // gradientOpts.start
  if (gradientOpts.start) {
    guardIsNotNum(gradientOpts.start, "gradient.start", {
      addParam: { type: "minmax", value: [0, 1] },
    });
  }

  // gradientOpts.stop
  if (gradientOpts.stop) {
    guardIsNotNum(gradientOpts.stop, "gradient.stop", {
      addParam: { type: "minmax", value: [0, 1] },
    });
  }

  const opacity = gradientOpts.opacity;
  const color = gradientOpts.color || "";
  const direction = gradientOpts.direction || "";
  const start = gradientOpts.start || "";
  const stop = gradientOpts.stop || "";

  return `gr:${opacity}:${color}:${direction}:${start}:${stop}`.replace(
    /:+$/,
    ""
  );
};

export { test, build };
