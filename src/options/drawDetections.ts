import type {
  DrawDetections,
  DrawDetectionsOptionsPartial,
} from "../types/drawDetections";
import { guardIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: DrawDetectionsOptionsPartial
): DrawDetections | undefined => options.draw_detections || options.dd;

const test = (options: DrawDetectionsOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: DrawDetectionsOptionsPartial): string => {
  const drawDetectionsOpts = getOpt(options);

  guardIsUndef(drawDetectionsOpts, "draw_detections");
  guardIsUndef(drawDetectionsOpts.draw, "draw_detections.draw");

  const draw = normalizeBoolean(drawDetectionsOpts.draw);
  const classNamesStr = drawDetectionsOpts.class_names
    ? `:${drawDetectionsOpts.class_names.join(":")}`
    : "";

  return `dd:${draw}${classNamesStr}`;
};

export { test, build };
