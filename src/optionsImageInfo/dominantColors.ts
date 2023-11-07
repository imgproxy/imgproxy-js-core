import type {
  DominantColors,
  DCImageInfoOptionsPartial,
} from "../typesImageInfo/dominantColors";
import type imgProxyBool from "../typesShared/imgProxyBool";
import { errorParamIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: DCImageInfoOptionsPartial
): DominantColors | undefined => {
  if ("dominant_colors" in options) {
    return options.dominant_colors;
  } else if ("dc" in options) {
    return options.dc;
  }

  return undefined;
};

const test = (options: DCImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: DCImageInfoOptionsPartial): string => {
  const dcOpts = getOpt(options);

  errorParamIsUndef(dcOpts, "dominant_colors");
  errorParamIsUndef(dcOpts?.dominant_colors, "dominant_colors.dominant_colors");

  const buildMissed =
    dcOpts?.build_missed === undefined
      ? ""
      : `:${normalizeBoolean(dcOpts.build_missed)}`;

  return `dc:${normalizeBoolean(
    dcOpts?.dominant_colors as imgProxyBool
  )}${buildMissed}`;
};

export { test, build };
