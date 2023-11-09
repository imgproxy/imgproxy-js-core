import type {
  UnsharpMasking,
  UnsharpMaskingOptionsPartial,
} from "../types/unsharpMasking";
import { guardIsUndef, guardIsNotNum } from "../utils";

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
  if (mode && !correctMode[mode])
    throw new Error(
      "unsharp_masking.mode option is not correct. Set the value auto, none or always"
    );
  if (weight)
    guardIsNotNum(weight, "unsharp_masking.weight", {
      addParam: { min: 0, minEqual: true },
    });
  if (divider)
    guardIsNotNum(divider, "unsharp_masking.divider", {
      addParam: { min: 0, minEqual: true },
    });

  const modeStr = mode || "";
  const weightStr = weight || "";
  const dividerStr = divider || "";

  return `ush:${modeStr}:${weightStr}:${dividerStr}`.replace(/:+$/, "");
};

export { test, build };
