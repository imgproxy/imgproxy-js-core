import type {
  Blurhash,
  BHImageInfoOptionsPartial,
} from "../typesImageInfo/blurhash";
import { guardIsUndef } from "../utils";

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

  guardIsUndef(blurhashOpts, "blurhash");
  guardIsUndef(blurhashOpts.x_components, "blurhash.x_components");
  guardIsUndef(blurhashOpts.y_components, "blurhash.y_components");
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
