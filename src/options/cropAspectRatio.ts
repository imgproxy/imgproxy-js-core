import type {
  CropAspectRatio,
  CropAspectRatioOptionsPartial,
} from "../types/cropAspectRatio";
import { guardIsUndef, guardIsNotNum, normalizeBoolean } from "../utils";

const getOpt = (
  options: CropAspectRatioOptionsPartial
): CropAspectRatio | undefined =>
  options.crop_aspect_ratio || options.crop_ar || options.car;

const test = (options: CropAspectRatioOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: CropAspectRatioOptionsPartial): string => {
  const cropArOpts = getOpt(options);

  guardIsUndef(cropArOpts, "crop_aspect_ratio");
  const { aspect_ratio, enlarge } = cropArOpts;
  guardIsUndef(aspect_ratio, "crop_aspect_ratio.aspect_ratio");
  guardIsNotNum(aspect_ratio, "crop_aspect_ratio.aspect_ratio", {
    addParam: { min: 0 },
  });

  let result = `crop_ar:${aspect_ratio}`;

  if (enlarge !== undefined) {
    result += `:${normalizeBoolean(enlarge)}`;
  }

  return result;
};

export { test, build };
