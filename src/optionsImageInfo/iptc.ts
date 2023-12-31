import type { Iptc, IptcImageInfoOptionsPartial } from "../typesImageInfo/iptc";
import { guardIsUndef, normalizeBoolean } from "../utils";

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
  guardIsUndef(iptcOpts, "IPTC");
  return `iptc:${normalizeBoolean(iptcOpts)}`;
};

export { test, build };
