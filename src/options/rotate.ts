import type { Rotate, RotateOptionsPartial } from "../types/rotate";
import { guardIsUndef, guardIsNotNum, guardIsValidVal } from "../utils";

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
  const addText = `You can use values ${Object.keys(correctAngles).join(", ")}`;

  guardIsUndef(rotateOpts, "rotate");
  guardIsNotNum(rotateOpts, "rotate", { addInfo: addText });
  guardIsValidVal(correctAngles, rotateOpts, "rotate");

  return `rot:${rotateOpts}`;
};

export { test, build };
