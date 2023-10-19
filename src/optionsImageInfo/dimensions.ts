import type {
  Dimensions,
  DimensionsImageInfoOptionsPartial,
} from "../typesImageInfo/dimensions";
import { normalizeBoolean } from "../utils";

const getOpt = (
  options: DimensionsImageInfoOptionsPartial
): Dimensions | undefined => {
  if ("dimensions" in options) {
    return options.dimensions;
  } else if ("d" in options) {
    return options.d;
  }

  return undefined;
};

const test = (options: DimensionsImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: DimensionsImageInfoOptionsPartial): string => {
  const dimensionsOpts = getOpt(options);

  if (dimensionsOpts === undefined) {
    throw new Error("dimensions option is undefined");
  }

  return `d:${normalizeBoolean(dimensionsOpts)}`;
};

export { test, build };
