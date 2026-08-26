import type {
  CropObjects,
  CropObjectsOptionsPartial,
} from "../types/cropObjects";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (
  options: CropObjectsOptionsPartial
): CropObjects | undefined => {
  if ("crop_objects" in options) {
    return options.crop_objects;
  } else if ("c_obj" in options) {
    return options.c_obj;
  }

  return undefined;
};

const test = (options: CropObjectsOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: CropObjectsOptionsPartial): string => {
  const cropObjectsOpts = getOpt(options);

  guardIsUndef(cropObjectsOpts, "crop_objects");
  const { scale_factor, class_names } = cropObjectsOpts;

  guardIsUndef(scale_factor, "crop_objects.scale_factor");
  guardIsNotNum(scale_factor, "crop_objects.scale_factor", {
    addParam: { min: 0 },
  });

  if (class_names !== undefined && !Array.isArray(class_names)) {
    throw new Error("crop_objects.class_names is not an array");
  }

  const classNamesStr = class_names ? class_names.join(":") : "";

  return `c_obj:${scale_factor}:${classNamesStr}`.replace(/:+$/, "");
};

export { test, build };
