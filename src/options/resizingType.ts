import type {
  ResizingTypeOptionsPartial,
  ResizingType,
} from "../types/resizingType";
import { guardIsUndef, guardIsValidVal } from "../utils";

const correctValues = {
  fit: true,
  fill: true,
  "fill-down": true,
  force: true,
  auto: true,
};

const getOpt = (
  options: ResizingTypeOptionsPartial
): ResizingType | undefined => options.resizing_type || options.rt;

const test = (options: ResizingTypeOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ResizingTypeOptionsPartial): string => {
  const resizingTypeOpts = getOpt(options);

  guardIsUndef(resizingTypeOpts, "resizing_type");
  guardIsValidVal(correctValues, resizingTypeOpts, "resizing_type");

  return `rt:${resizingTypeOpts}`;
};

export { test, build };
