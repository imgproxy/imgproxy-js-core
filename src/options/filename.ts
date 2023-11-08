import type { Filename, FilenameOptionsPartial } from "../types/filename";
import { guardIsUndef, normalizeBoolean } from "../utils";

const getOpt = (options: FilenameOptionsPartial): Filename | undefined =>
  options.filename || options.fn;

const test = (options: FilenameOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: FilenameOptionsPartial): string => {
  const filename = getOpt(options);

  guardIsUndef(filename, "filename");
  guardIsUndef(filename.name, "filename.name");
  if (typeof filename.name !== "string") {
    throw new Error("name in filename option should be a string");
  }

  const encoded =
    filename.encoded === undefined
      ? ""
      : `:${normalizeBoolean(filename.encoded)}`;

  return `fn:${filename.name}${encoded}`;
};

export { test, build };
