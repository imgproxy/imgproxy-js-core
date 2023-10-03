import { ExtendOptionsPartial, ExtendType } from "../types";
import * as gravityOpt from "./gravity";

interface BuildProps {
  headless?: boolean;
}

const getOpt = (options: ExtendOptionsPartial): ExtendType | undefined =>
  options.extend || options.ex;

const test = (options: ExtendOptionsPartial): boolean =>
  Boolean(getOpt(options));

const withHead = (optString: string, headless: boolean): string =>
  `${headless ? "" : "extend:"}${optString}`;

const build = (
  options: ExtendOptionsPartial,
  meta: BuildProps = {}
): string => {
  const { headless = false } = meta;
  const extendOpts = getOpt(options);

  if (!extendOpts) {
    throw new Error("extend options are undefined");
  } else if (!extendOpts.extend) {
    throw new Error("extend option is undefined");
  }

  const extend = extendOpts.extend;

  const gravity = gravityOpt.test(extendOpts)
    ? gravityOpt.build(extendOpts, { headless: true })
    : "";

  return withHead(`${extend}:${gravity}`, headless);
};

export { test, build };
