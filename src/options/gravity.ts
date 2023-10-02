import {
  GravityOptionsPartial,
  Gravity,
  FPGravity,
  ObjGravity,
  BaseGravity,
} from "../types";

const getOpt = (options: GravityOptionsPartial): Gravity | undefined =>
  options.gravity || options.g;

const test = (options: GravityOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: GravityOptionsPartial): string => {
  const gravityOpts = getOpt(options);

  if (!gravityOpts) {
    throw new Error("gravity options are undefined");
  }

  const type = gravityOpts.type || "";

  if (type === "sm") {
    return `gravity:${type}`;
  } else if (type === "fp") {
    const gravityFP = gravityOpts as FPGravity;
    const x = gravityFP.x || "";
    const y = gravityFP.y || "";

    return `gravity:${type}:${x}:${y}`;
  } else if (type === "obj") {
    const gravityObj = gravityOpts as ObjGravity;
    const class_names = gravityObj.class_names || [];

    return `gravity:${type}:${class_names.join(":")}`;
  } else {
    const gravityBase = gravityOpts as BaseGravity;
    const type = gravityBase.type || "";
    const x_offset = gravityBase.x_offset || "";
    const y_offset = gravityBase.y_offset || "";

    return `gravity:${type}:${x_offset}:${y_offset}`;
  }
};

export { test, build };
