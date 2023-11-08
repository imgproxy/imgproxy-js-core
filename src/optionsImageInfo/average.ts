import type {
  Average,
  AverageImageInfoOptionsPartial,
} from "../typesImageInfo/average";
import { guardParamIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: AverageImageInfoOptionsPartial
): Average | undefined => {
  if ("average" in options) {
    return options.average;
  } else if ("avg" in options) {
    return options.avg;
  }

  return undefined;
};

const test = (options: AverageImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: AverageImageInfoOptionsPartial): string => {
  const averageOpts = getOpt(options);

  guardParamIsUndef(averageOpts, "average");
  guardParamIsUndef(averageOpts.average, "average.average");

  const ignoreTransparent =
    averageOpts.ignore_transparent === undefined
      ? ""
      : `:${normalizeBoolean(averageOpts.ignore_transparent)}`;

  return `avg:${normalizeBoolean(averageOpts.average)}${ignoreTransparent}`;
};

export { test, build };
