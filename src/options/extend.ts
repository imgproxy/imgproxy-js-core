import type { ExtendOptionsPartial, Extend } from "../types/extend";
import * as gravityOpt from "./gravity";
import { normalizeBoolean } from "../utils";

interface BuildProps {
  headless?: boolean;
}

const getOpt = (options: ExtendOptionsPartial): Extend | undefined =>
  options.extend || options.ex;

const test = (options: ExtendOptionsPartial): boolean =>
  Boolean(getOpt(options));

const withHead = (optString: string, headless: boolean): string =>
  `${headless ? "" : "ex:"}${optString}`;

const build = (
  options: ExtendOptionsPartial,
  meta: BuildProps = {}
): string => {
  const { headless = false } = meta;
  const extendOpts = getOpt(options);

  if (!extendOpts) {
    throw new Error("extend options are undefined");
  } else if (!("extend" in extendOpts)) {
    throw new Error("extend in extend option is required");
  }

  const gravity = gravityOpt.test(extendOpts)
    ? `:${gravityOpt.build(extendOpts, { headless: true })}`
    : "";

  return withHead(`${normalizeBoolean(extendOpts.extend)}${gravity}`, headless);
};

export { test, build };
