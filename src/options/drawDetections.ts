import type {
  DrawDetections,
  DrawDetectionsOptionsPartial,
} from "../types/drawDetections";
import { guardParamIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: DrawDetectionsOptionsPartial
): DrawDetections | undefined => options.draw_detections || options.dd;

const test = (options: DrawDetectionsOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: DrawDetectionsOptionsPartial): string => {
  const drawDetectionsOpts = getOpt(options);

  guardParamIsUndef(drawDetectionsOpts, "draw_detections");
  guardParamIsUndef(drawDetectionsOpts.draw, "draw_detections.draw");

  const draw = normalizeBoolean(drawDetectionsOpts.draw);
  const classNamesStr = drawDetectionsOpts.class_names
    ? `:${drawDetectionsOpts.class_names.join(":")}`
    : "";

  return `dd:${draw}${classNamesStr}`;
};

export { test, build };
