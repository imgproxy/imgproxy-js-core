import type {
  DrawDetections,
  DrawDetectionsOptionsPartial,
} from "../types/drawDetections";
import { normalizeBoolean } from "../utils";

const getOpt = (
  options: DrawDetectionsOptionsPartial
): DrawDetections | undefined => options.draw_detections || options.dd;

const test = (options: DrawDetectionsOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: DrawDetectionsOptionsPartial): string => {
  const drawDetectionsOpts = getOpt(options);

  if (!drawDetectionsOpts) {
    throw new Error("draw_detections option is undefined");
  } else if (!("draw" in drawDetectionsOpts)) {
    throw new Error("draw in draw_detections option is required");
  }

  const draw = normalizeBoolean(drawDetectionsOpts.draw);
  const classNamesStr = drawDetectionsOpts.class_names
    ? `:${drawDetectionsOpts.class_names.join(":")}`
    : "";

  return `dd:${draw}${classNamesStr}`;
};

export { test, build };
