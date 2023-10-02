import { ExtendOptionsPartial, ExtendType } from "../types";
import * as gravityOpt from "./gravity";

const getOpt = (options: ExtendOptionsPartial): ExtendType | undefined =>
  options.extend || options.ex;

const test = (options: ExtendOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ExtendOptionsPartial): string => {
  const extendOpts = getOpt(options);

  if (!extendOpts) {
    throw new Error("extend options are undefined");
  }

  const extend = extendOpts.extend || "";

  const gravity = gravityOpt.test(extendOpts)
    ? gravityOpt.build(extendOpts)
    : "";

  return `extend:${extend}:${gravity}`;
};

export { test, build };
