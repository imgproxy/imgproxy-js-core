import type {
  BlurDetections,
  BlurDetectionsOptionsPartial,
} from "../types/blurDetections";
import { errorParamIsUndef } from "../utils";

const getOpt = (
  options: BlurDetectionsOptionsPartial
): BlurDetections | undefined => options.blur_detections || options.bd;

const test = (options: BlurDetectionsOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: BlurDetectionsOptionsPartial): string => {
  const blurDetectionsOpts = getOpt(options);

  errorParamIsUndef(blurDetectionsOpts, "blur_detections");
  errorParamIsUndef(blurDetectionsOpts.sigma, "blur_detections.sigma");
  if (typeof blurDetectionsOpts.sigma !== "number") {
    throw new Error("blur_detections.sigma option is not a number");
  }

  const sigma = blurDetectionsOpts.sigma;
  const classNamesStr = blurDetectionsOpts.class_names
    ? blurDetectionsOpts.class_names.join(":")
    : "";

  return `bd:${sigma}:${classNamesStr}`.replace(/:+$/, "");
};

export { test, build };
