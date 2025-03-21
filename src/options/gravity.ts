import type {
  GravityOptionsPartial,
  Gravity,
  FPGravity,
  ObjGravity,
  ObjwGravity,
  BaseGravity,
} from "../types/gravity";
import {
  guardIsUndef,
  guardIsNotNum,
  guardIsValidVal,
  guardIsNotArray,
} from "../utils";

interface BuildProps {
  headless?: boolean;
}

const currentBaseTypes = {
  no: true,
  so: true,
  ea: true,
  we: true,
  ce: true,
  noea: true,
  nowe: true,
  soea: true,
  sowe: true,
};

const currentAllTypes = {
  ...currentBaseTypes,
  sm: true,
  fp: true,
  obj: true,
  objw: true,
};

const getOpt = (options: GravityOptionsPartial): Gravity | undefined =>
  options.gravity || options.g;

const test = (options: GravityOptionsPartial): boolean =>
  Boolean(getOpt(options));

const withHead = (optString: string, headless: boolean): string =>
  `${headless ? "" : "g:"}${optString.replace(/:+$/, "")}`;

const build = (
  options: GravityOptionsPartial,
  meta: BuildProps = {}
): string => {
  const { headless = false } = meta;
  const gravityOpts = getOpt(options);

  guardIsUndef(gravityOpts, "gravity");
  guardIsUndef(gravityOpts.type, "gravity.type");

  const type = gravityOpts.type;

  guardIsValidVal(currentAllTypes, type, "gravity.type");
  // @ts-expect-error: Let's ignore an error.
  if (gravityOpts.x_offset || gravityOpts.y_offset)
    guardIsValidVal(currentBaseTypes, type, "gravity.type");
  // @ts-expect-error: Let's ignore an error.
  if (gravityOpts.class_names && type !== "obj")
    throw new Error("gravity.class_names can be used only with type obj");
  // @ts-expect-error: Let's ignore an error.
  if (gravityOpts.class_weights && type !== "objw")
    throw new Error("gravity.class_weights can be used only with type objw");
  // @ts-expect-error: Let's ignore an error.
  if ((gravityOpts.x || gravityOpts.y) && type !== "fp")
    throw new Error("gravity.x and gravity.y can be used only with type fp");

  if (type === "sm") {
    return withHead(type, headless);
  }

  if (type === "fp") {
    const gravityFP = gravityOpts as FPGravity;

    guardIsUndef(gravityFP.x, "gravity.x");
    guardIsUndef(gravityFP.y, "gravity.y");
    guardIsNotNum(gravityFP.x, "gravity.x", { addParam: { min: 0, max: 1 } });
    guardIsNotNum(gravityFP.y, "gravity.y", { addParam: { min: 0, max: 1 } });

    return withHead(`${type}:${gravityFP.x}:${gravityFP.y}`, headless);
  }

  if (type === "obj") {
    const gravityObj = gravityOpts as ObjGravity;

    guardIsUndef(gravityOpts.class_names, "gravity.class_names");
    guardIsNotArray(gravityObj.class_names, "gravity.class_names");

    const class_names = gravityObj.class_names;
    return withHead(`${type}:${class_names.join(":")}`, headless);
  }

  if (type === "objw") {
    const gravityObjw = gravityOpts as ObjwGravity;

    guardIsUndef(gravityObjw.class_weights, "gravity.class_weights");
    guardIsNotArray(gravityObjw.class_weights, "gravity.class_weights");

    const weightPairs = gravityObjw.class_weights.map(item => {
      if (
        typeof item !== "object" ||
        !item.class ||
        typeof item.weight !== "number"
      ) {
        throw new Error(
          "Each item in gravity.class_weights must have 'class' and 'weight' properties"
        );
      }
      return `${item.class}:${item.weight}`;
    });

    return withHead(`${type}:${weightPairs.join(":")}`, headless);
  } else {
    const gravityBase = gravityOpts as BaseGravity;
    const x_offset =
      gravityBase.x_offset === undefined ? "" : gravityBase.x_offset;
    const y_offset =
      gravityBase.y_offset === undefined ? "" : gravityBase.y_offset;

    return withHead(`${gravityBase.type}:${x_offset}:${y_offset}`, headless);
  }
};

export { test, build };
