import type {
  CropObjects,
  CropObjectsOptionsPartial,
} from "../types/cropObjects";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: CropObjectsOptionsPartial): CropObjects | undefined =>
  options.crop_objects;

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

  const classNamesStr = class_names ? class_names.join(":") : "";

  return `co:${scale_factor}:${classNamesStr}`.replace(/:+$/, "");
};

export { test, build };
