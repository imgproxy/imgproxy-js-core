import type { ExtendOptionsPartial, Extend } from "../types/extend";
import * as gravityOpt from "./gravity";
import { guardIsUndef, normalizeBoolean } from "../utils";

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

  guardIsUndef(extendOpts, "extend");
  guardIsUndef(extendOpts.extend, "extend.extend");

  const gravity = gravityOpt.test(extendOpts)
    ? `:${gravityOpt.build(extendOpts, { headless: true })}`
    : "";

  return withHead(`${normalizeBoolean(extendOpts.extend)}${gravity}`, headless);
};

export { test, build };
