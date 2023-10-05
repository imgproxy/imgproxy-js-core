import type {
  DrawDetections,
  DrawDetectionsOptionsPartial,
} from "../types/drawDetections";

const getOpt = (
  options: DrawDetectionsOptionsPartial
): DrawDetections | undefined => options.draw_detections || options.dd;

const test = (options: DrawDetectionsOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: DrawDetectionsOptionsPartial): string => {
  const drawDetectionsOpts = getOpt(options);

  if (!drawDetectionsOpts) {
    throw new Error("draw_detections option is undefined");
  }

  const draw = drawDetectionsOpts.draw || "";
  const classNamesStr = drawDetectionsOpts.class_names
    ? drawDetectionsOpts.class_names.join(",")
    : "";

  return `draw_detections:${draw}:${classNamesStr}`;
};

export { test, build };
