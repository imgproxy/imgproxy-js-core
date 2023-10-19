import {
  Blurhash,
  BHImageInfoOptionsPartial,
} from "../typesImageInfo/blurhash";

const getOpt = (options: BHImageInfoOptionsPartial): Blurhash | undefined => {
  if ("blurhash" in options) {
    return options.blurhash;
  } else if ("bh" in options) {
    return options.bh;
  }

  return undefined;
};

const test = (options: BHImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: BHImageInfoOptionsPartial): string => {
  const blurhashOpts = getOpt(options);

  if (blurhashOpts === undefined) {
    throw new Error("blurhash option is undefined");
  }
  if (blurhashOpts.x_components === undefined) {
    throw new Error("blurhash.x_components option is undefined");
  }
  if (blurhashOpts.y_components === undefined) {
    throw new Error("blurhash.y_components option is undefined");
  }
  if (blurhashOpts.x_components < 0) {
    throw new Error("blurhash.x_components can't be a negative");
  }
  if (blurhashOpts.y_components < 0) {
    throw new Error("blurhash.y_components can't be a negative");
  }
  if (blurhashOpts.x_components > 9) {
    throw new Error("blurhash.x_components can't be more than 9");
  }
  if (blurhashOpts.y_components > 9) {
    throw new Error("blurhash.y_components can't be more than 9");
  }
  if (
    typeof blurhashOpts.x_components !== "number" ||
    typeof blurhashOpts.y_components !== "number"
  ) {
    throw new Error(
      "blurhash.x_components and blurhash.y_components must be numbers"
    );
  }

  return `bh:${blurhashOpts.x_components}:${blurhashOpts.y_components}`;
};

export { test, build };
