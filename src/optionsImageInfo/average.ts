import {
  Average,
  AverageImageInfoOptionsPartial,
} from "../typesImageInfo/average";
import { normalizeBoolean } from "../utils";

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

  if (averageOpts === undefined) {
    throw new Error("average option is undefined");
  }
  if (averageOpts.average === undefined) {
    throw new Error("average.average option is undefined");
  }

  const ignoreTransparent =
    averageOpts.ignore_transparent === undefined
      ? ""
      : `:${normalizeBoolean(averageOpts.ignore_transparent)}`;

  return `avg:${normalizeBoolean(averageOpts.average)}${ignoreTransparent}`;
};

export { test, build };
