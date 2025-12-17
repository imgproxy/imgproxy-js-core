import type { FlipOptions, FlipOptionsPartial } from "../types/flip";
import { guardIsUndef, normalizeBoolean } from "../utils";

const getOpt = (options: FlipOptionsPartial): FlipOptions | undefined =>
  options.flip || options.fl;

const test = (options: FlipOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: FlipOptionsPartial): string => {
  const flipOptions = getOpt(options);

  guardIsUndef(flipOptions, "flip");

  const horizontal = flipOptions.horizontal ?? false;
  const vertical = flipOptions.vertical ?? false;

  return `fl:${normalizeBoolean(horizontal)}:${normalizeBoolean(vertical)}`;
};

export { test, build };
