import type { Iptc, IptcImageInfoOptionsPartial } from "../typesImageInfo/iptc";
import { normalizeBoolean } from "../utils";

const getOpt = (options: IptcImageInfoOptionsPartial): Iptc | undefined => {
  if ("iptc" in options) {
    return options.iptc;
  }

  return undefined;
};

const test = (options: IptcImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: IptcImageInfoOptionsPartial): string => {
  const iptcOpts = getOpt(options);

  if (iptcOpts === undefined) {
    throw new Error("IPTC option is undefined");
  }

  return `iptc:${normalizeBoolean(iptcOpts)}`;
};

export { test, build };
