import type {
  NeedSize,
  SizeImageInfoOptionsPartial,
} from "../typesImageInfo/size";
import { guardIsUndef, normalizeBoolean } from "../utils";

const getOpt = (options: SizeImageInfoOptionsPartial): NeedSize | undefined => {
  if ("size" in options) {
    return options.size;
  } else if ("s" in options) {
    return options.s;
  }

  return undefined;
};

const test = (options: SizeImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: SizeImageInfoOptionsPartial): string => {
  const sizeOpts = getOpt(options);
  guardIsUndef(sizeOpts, "size");
  return `s:${normalizeBoolean(sizeOpts)}`;
};

export { test, build };
