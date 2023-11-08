import type { ExtendOptionsPartial, Extend } from "../types/extend";
import * as gravityOpt from "./gravity";
import { guardParamIsUndef, normalizeBoolean } from "../utils";

interface BuildProps {
  headless?: boolean;
}

const getOpt = (options: ExtendOptionsPartial): Extend | undefined =>
  options.extend || options.ex;

const test = (options: ExtendOptionsPartial): boolean =>
  Boolean(getOpt(options));

const withHead = (optString: string, headless: boolean): string =>
  `${headless ? "" : "ex:"}${optString.replace(/:+$/, "")}`;

const build = (
  options: ExtendOptionsPartial,
  meta: BuildProps = {}
): string => {
  const { headless = false } = meta;
  const extendOpts = getOpt(options);

  guardParamIsUndef(extendOpts, "extend");
  guardParamIsUndef(extendOpts.extend, "extend.extend");

  const gravity = gravityOpt.test(extendOpts)
    ? `:${gravityOpt.build(extendOpts, { headless: true })}`
    : "";

  return withHead(`${normalizeBoolean(extendOpts.extend)}${gravity}`, headless);
};

export { test, build };
