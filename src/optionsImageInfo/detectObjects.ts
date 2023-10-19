import type {
  DetectObjects,
  DetectObjectsImageInfoOptionsPartial,
} from "../typesImageInfo/detectObjects";
import { normalizeBoolean } from "../utils";

const getOpt = (
  options: DetectObjectsImageInfoOptionsPartial
): DetectObjects | undefined => {
  if ("detect_objects" in options) {
    return options.detect_objects;
  } else if ("do" in options) {
    return options.do;
  }

  return undefined;
};

const test = (options: DetectObjectsImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: DetectObjectsImageInfoOptionsPartial): string => {
  const detectObjectsOpts = getOpt(options);

  if (detectObjectsOpts === undefined) {
    throw new Error("detect_objects option is undefined");
  }

  return `do:${normalizeBoolean(detectObjectsOpts)}`;
};

export { test, build };
