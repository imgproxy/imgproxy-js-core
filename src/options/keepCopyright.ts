import type {
  KeepCopyright,
  KeepCopyrightOptionsPartial,
} from "../types/keepCopyright";

const getOpt = (
  options: KeepCopyrightOptionsPartial
): KeepCopyright | undefined => options.keep_copyright || options.kcr;

const test = (options: KeepCopyrightOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: KeepCopyrightOptionsPartial): string => {
  const keepMetadataOpts = getOpt(options);

  if (!keepMetadataOpts) {
    throw new Error("keep copyright option is undefined");
  }

  return `keep_metadata:${keepMetadataOpts}`;
};

export { test, build };
