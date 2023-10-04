import type {
  UnsharpMasking,
  UnsharpMaskingOptionsPartial,
} from "../types/unsharpMasking";

const getOpt = (
  options: UnsharpMaskingOptionsPartial
): UnsharpMasking | undefined => options.unsharp_masking || options.ush;

const test = (options: UnsharpMaskingOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: UnsharpMaskingOptionsPartial): string => {
  const unsharpMaskingOpts = getOpt(options);

  if (!unsharpMaskingOpts) {
    throw new Error("unsharp_masking option is undefined");
  }

  const modeStr = unsharpMaskingOpts.mode || "";
  const weightStr = unsharpMaskingOpts.weight || "";
  const dividerStr = unsharpMaskingOpts.divider || "";

  return `unsharp_masking${modeStr}${weightStr}${dividerStr}`;
};

export { test, build };
