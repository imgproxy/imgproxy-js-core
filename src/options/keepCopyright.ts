import type {
  KeepCopyright,
  KeepCopyrightOptionsPartial,
} from "../types/keepCopyright";
import { normalizeBoolean } from "../utils";

const getOpt = (
  options: KeepCopyrightOptionsPartial
): KeepCopyright | undefined => {
  if ("keep_copyright" in options) {
    return options.keep_copyright;
  } else if ("kcr" in options) {
    return options.kcr;
  }

  return undefined;
};

const test = (options: KeepCopyrightOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: KeepCopyrightOptionsPartial): string => {
  const keepCopyrightOpts = getOpt(options);

  if (keepCopyrightOpts === undefined) {
    throw new Error("keep copyright option is undefined");
  }

  return `kcr:${normalizeBoolean(keepCopyrightOpts)}`;
};

export { test, build };
