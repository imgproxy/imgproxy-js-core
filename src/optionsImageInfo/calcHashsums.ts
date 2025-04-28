import type {
  HashsumType,
  CalcHashsumsImageInfoOptionsPartial,
} from "../typesImageInfo/calcHashsums";
import { guardIsUndef } from "../utils";

const getOpt = (
  options: CalcHashsumsImageInfoOptionsPartial
): HashsumType[] | undefined => {
  if ("calcHashsums" in options) {
    return options.calcHashsums;
  } else if ("chs" in options) {
    return options.chs;
  }

  return undefined;
};

const test = (options: CalcHashsumsImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: CalcHashsumsImageInfoOptionsPartial): string => {
  const hashsumTypes = getOpt(options);
  guardIsUndef(hashsumTypes, "calcHashsums");

  if (!hashsumTypes.length) {
    return "chs:";
  }

  return `chs:${hashsumTypes.join(":")}`;
};

export { test, build };
