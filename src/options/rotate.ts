import type { Rotate, RotateOptionsPartial } from "../types/rotate";

const correctAngles = {
  0: true,
  90: true,
  180: true,
  270: true,
};

const getOpt = (options: RotateOptionsPartial): Rotate | undefined =>
  options.rotate || options.rot;

const test = (options: RotateOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: RotateOptionsPartial): string => {
  const rotateOpts = getOpt(options);

  if (!rotateOpts) {
    throw new Error("rotate option is undefined");
  } else if (!correctAngles[rotateOpts]) {
    throw new Error("rotate is not correct");
  }

  return `rotate:${rotateOpts}`;
};

export { test, build };
