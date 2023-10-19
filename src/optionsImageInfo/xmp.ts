import type { Xmp, XmpImageInfoOptionsPartial } from "../typesImageInfo/xmp";
import { normalizeBoolean } from "../utils";

const getOpt = (options: XmpImageInfoOptionsPartial): Xmp | undefined => {
  if ("xmp" in options) {
    return options.xmp;
  }

  return undefined;
};

const test = (options: XmpImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: XmpImageInfoOptionsPartial): string => {
  const xmpOpts = getOpt(options);

  if (xmpOpts === undefined) {
    throw new Error("XMP option is undefined");
  }

  return `xmp:${normalizeBoolean(xmpOpts)}`;
};

export { test, build };
