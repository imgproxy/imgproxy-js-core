import type {
  UnsharpMasking,
  UnsharpMaskingOptionsPartial,
} from "../types/unsharpMasking";
import { guardIsUndef, guardIsNotNum, guardIsValidVal } from "../utils";

const correctMode = {
  auto: true,
  none: true,
  always: true,
};

const getOpt = (
  options: UnsharpMaskingOptionsPartial
): UnsharpMasking | undefined => options.unsharp_masking || options.ush;

const test = (options: UnsharpMaskingOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: UnsharpMaskingOptionsPartial): string => {
  const unsharpMaskingOpts = getOpt(options);

  guardIsUndef(unsharpMaskingOpts, "unsharp_masking");
  const { mode, weight, divider } = unsharpMaskingOpts;
  if (mode) guardIsValidVal(correctMode, mode, "unsharp_masking.mode");
  if (weight !== undefined)
    guardIsNotNum(weight, "unsharp_masking.weight", {
      addParam: { min: 0, minEqual: true },
    });
  if (divider !== undefined)
    guardIsNotNum(divider, "unsharp_masking.divider", {
      addParam: { min: 0, minEqual: true },
    });

  const modeStr = mode || "";
  const weightStr = weight || "";
  const dividerStr = divider || "";

  return `ush:${modeStr}:${weightStr}:${dividerStr}`.replace(/:+$/, "");
};

export { test, build };
