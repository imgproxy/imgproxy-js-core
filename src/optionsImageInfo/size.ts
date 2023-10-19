import type { Size, SizeImageInfoOptionsPartial } from "../typesImageInfo/size";
import { normalizeBoolean } from "../utils";

const getOpt = (options: SizeImageInfoOptionsPartial): Size | undefined => {
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

  if (sizeOpts === undefined) {
    throw new Error("size option is undefined");
  }

  return `s:${normalizeBoolean(sizeOpts)}`;
};

export { test, build };
