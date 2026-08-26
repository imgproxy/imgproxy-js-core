import type {
  Classify,
  ClassifyImageInfoOptionsPartial,
} from "../typesImageInfo/classify";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (
  options: ClassifyImageInfoOptionsPartial
): Classify | undefined => {
  if ("classify" in options) {
    return options.classify;
  } else if ("cl" in options) {
    return options.cl;
  }

  return undefined;
};

const test = (options: ClassifyImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: ClassifyImageInfoOptionsPartial): string => {
  const classifyOpts = getOpt(options);

  guardIsUndef(classifyOpts, "classify");
  const { top_k, class_names } = classifyOpts;

  guardIsUndef(top_k, "classify.top_k");
  guardIsNotNum(top_k, "classify.top_k", {
    addParam: { min: 0, isInt: true },
  });

  if (class_names !== undefined && !Array.isArray(class_names)) {
    throw new Error("classify.class_names is not an array");
  }

  const classNamesStr = class_names ? class_names.join(":") : "";

  return `cl:${top_k}:${classNamesStr}`.replace(/:+$/, "");
};

export { test, build };
