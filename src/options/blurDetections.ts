import type {
  BlurDetections,
  BlurDetectionsOptionsPartial,
} from "../types/blurDetections";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (
  options: BlurDetectionsOptionsPartial
): BlurDetections | undefined => options.blur_detections || options.bd;

const test = (options: BlurDetectionsOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: BlurDetectionsOptionsPartial): string => {
  const blurDetectionsOpts = getOpt(options);

  guardIsUndef(blurDetectionsOpts, "blur_detections");
  guardIsUndef(blurDetectionsOpts.sigma, "blur_detections.sigma");
  guardIsNotNum(blurDetectionsOpts.sigma, "blur_detections.sigma");

  const sigma = blurDetectionsOpts.sigma;
  const classNamesStr = blurDetectionsOpts.class_names
    ? blurDetectionsOpts.class_names.join(":")
    : "";

  return `bd:${sigma}:${classNamesStr}`.replace(/:+$/, "");
};

export { test, build };
