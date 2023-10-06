import type { Filename, FilenameOptionsPartial } from "../types/filename";

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
    throw new Error("filename.name is empty. It's required");
  }

  const encoded = filename.encoded || "";

  return `filename:${filename.name}:${encoded}`;
};

export { test, build };
