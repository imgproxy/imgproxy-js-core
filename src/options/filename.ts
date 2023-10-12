import type { Filename, FilenameOptionsPartial } from "../types/filename";
import { normalizeBoolean } from "../utils";

const getOpt = (options: FilenameOptionsPartial): Filename | undefined =>
  options.filename || options.fn;

const test = (options: FilenameOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: FilenameOptionsPartial): string => {
  const filename = getOpt(options);

  if (!filename) {
    throw new Error("filename option is undefined");
  }
  if (!filename.name) {
    throw new Error("name in filename option is required");
  }
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
