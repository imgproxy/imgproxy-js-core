import type {
  Dimensions,
  DimensionsImageInfoOptionsPartial,
} from "../typesImageInfo/dimensions";
import { errorParamIsUndef, normalizeBoolean } from "../utils";

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
  errorParamIsUndef(dimensionsOpts, "dimensions");
  return `d:${normalizeBoolean(dimensionsOpts)}`;
};

export { test, build };
