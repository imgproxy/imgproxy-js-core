import {
  GravityOptionsPartial,
  Gravity,
  FPGravity,
  ObjGravity,
  BaseGravity,
} from "../types";

interface BuildProps {
  headless?: boolean;
}

const getOpt = (options: GravityOptionsPartial): Gravity | undefined =>
  options.gravity || options.g;

const test = (options: GravityOptionsPartial): boolean =>
  Boolean(getOpt(options));

const withHead = (optString: string, headless: boolean): string =>
  `${headless ? "" : "gravity:"}${optString}`;

const build = (
  options: GravityOptionsPartial,
  meta: BuildProps = {}
): string => {
  const { headless = false } = meta;
  const gravityOpts = getOpt(options);

  if (!gravityOpts) {
    throw new Error("gravity options are undefined");
  }

  const type = gravityOpts.type || "";

  if (type === "sm") {
    return withHead(type, headless);
  } else if (type === "fp") {
    const gravityFP = gravityOpts as FPGravity;
    const x = gravityFP.x || "";
    const y = gravityFP.y || "";

    return withHead(`${type}:${x}:${y}`, headless);
  } else if (type === "obj") {
    const gravityObj = gravityOpts as ObjGravity;
    const class_names = gravityObj.class_names || [];

    return withHead(`${type}:${class_names.join(":")}`, headless);
  } else {
    const gravityBase = gravityOpts as BaseGravity;
    const type = gravityBase.type || "";
    const x_offset = gravityBase.x_offset || "";
    const y_offset = gravityBase.y_offset || "";

    return withHead(`${type}:${x_offset}:${y_offset}`, headless);
  }
};

export { test, build };
