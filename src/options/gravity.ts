import type {
  GravityOptionsPartial,
  Gravity,
  FPGravity,
  ObjGravity,
  BaseGravity,
} from "../types/gravity";

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

  if (!gravityOpts) {
    throw new Error("gravity options are undefined");
  }
  if (!gravityOpts.type) {
    throw new Error("gravity.type is undefined");
  }
  if (!currentAllTypes[gravityOpts.type]) {
    throw new Error(
      `gravity type "${
        gravityOpts.type
      }" is not supported. Supported types: ${Object.keys(currentAllTypes).join(
        ","
      )}`
    );
  }
  if (
    // @ts-expect-error: Let's ignore an error.
    (gravityOpts.x_offset || gravityOpts.y_offset) &&
    // @ts-expect-error: Let's ignore an error.
    !currentBaseTypes[gravityOpts.type]
  ) {
    throw new Error(
      `gravity type "${
        gravityOpts.type
      }" is not supported. Supported types: ${Object.keys(
        currentBaseTypes
      ).join(",")}`
    );
  }
  // @ts-expect-error: Let's ignore an error.
  if (gravityOpts.class_names && gravityOpts.type !== "obj") {
    throw new Error(
      "gravity.class_names can be used only with gravityOpts.type obj"
    );
  }
  // @ts-expect-error: Let's ignore an error.
  if ((gravityOpts.x || gravityOpts.y) && gravityOpts.type !== "fp") {
    throw new Error(
      "gravity.x and gravity.y can be used only with gravityOpts.type fp"
    );
  }

  const type = gravityOpts.type;

  if (type === "sm") {
    return withHead(type, headless);
  }

  if (type === "fp") {
    const gravityFP = gravityOpts as FPGravity;

    if (gravityFP.x === undefined || gravityFP.y === undefined) {
      throw new Error("gravity.x or gravity.y is undefined");
    }
    if (gravityFP.x < 0 || gravityFP.x > 1) {
      throw new Error("gravity.x must be between 0 and 1");
    }
    if (gravityFP.y < 0 || gravityFP.y > 1) {
      throw new Error("gravity.y must be between 0 and 1");
    }

    const x = gravityFP.x;
    const y = gravityFP.y;

    return withHead(`${type}:${x}:${y}`, headless);
  }

  if (type === "obj") {
    const gravityObj = gravityOpts as ObjGravity;

    if (gravityOpts.type === "obj" && !gravityOpts.class_names) {
      throw new Error("gravity.class_names is undefined");
    }
    if (!Array.isArray(gravityObj.class_names)) {
      throw new Error("gravity.class_names is not an array");
    }
    if (gravityObj.class_names.length === 0) {
      throw new Error("gravity.class_names is empty");
    }

    const class_names = gravityObj.class_names;

    return withHead(`${type}:${class_names.join(":")}`, headless);
  } else {
    const gravityBase = gravityOpts as BaseGravity;
    const type = gravityBase.type;
    const x_offset =
      gravityBase.x_offset === undefined ? "" : gravityBase.x_offset;
    const y_offset =
      gravityBase.y_offset === undefined ? "" : gravityBase.y_offset;

    return withHead(`${type}:${x_offset}:${y_offset}`, headless);
  }
};

export { test, build };
