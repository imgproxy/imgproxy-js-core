import type { Gradient, GradientOptionsPartial } from "../types/gradient";

const getOpt = (options: GradientOptionsPartial): Gradient | undefined =>
  options.gradient || options.gr;

const test = (options: GradientOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: GradientOptionsPartial): string => {
  const gradientOpts = getOpt(options);

  if (!gradientOpts) {
    throw new Error("gradient option is undefined");
  } else if (!gradientOpts.opacity) {
    throw new Error("gradient opacity is mandatory parameter");
  }

  const opacity = gradientOpts.opacity;
  const color = gradientOpts.color || "";
  const direction = gradientOpts.direction || "";
  const start = gradientOpts.start || "";
  const stop = gradientOpts.stop || "";

  return `gradient:${opacity}:${color}:${direction}:${start}:${stop}`;
};

export { test, build };
