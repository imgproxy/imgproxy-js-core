import type { Rotate, RotateOptionsPartial } from "../types/rotate";
import { guardParamIsUndef } from "../utils";

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

  guardParamIsUndef(rotateOpts, "rotate");
  if (typeof rotateOpts !== "number") {
    throw new Error(
      "rotate option is not a number. You can use numbers 0, 90, 180 or 270"
    );
  }
  if (!correctAngles[rotateOpts]) {
    throw new Error(
      "rotate is not correct. You can use numbers 0, 90, 180 or 270"
    );
  }

  return `rot:${rotateOpts}`;
};

export { test, build };
