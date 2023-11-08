import type {
  UnsharpMasking,
  UnsharpMaskingOptionsPartial,
} from "../types/unsharpMasking";
import { errorParamIsUndef } from "../utils";

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

  errorParamIsUndef(unsharpMaskingOpts, "unsharp_masking");
  if (unsharpMaskingOpts.mode && !correctMode[unsharpMaskingOpts.mode]) {
    throw new Error(
      "unsharp_masking.mode option is not correct. Set the value auto, none or always"
    );
  }
  if (unsharpMaskingOpts.weight && unsharpMaskingOpts.weight <= 0) {
    throw new Error(
      "unsharp_masking.weight option is not correct. Set the value greater than zero"
    );
  }
  if (
    unsharpMaskingOpts.weight &&
    typeof unsharpMaskingOpts.weight !== "number"
  ) {
    throw new Error(
      "unsharp_masking.weight option is not a number. Set the value greater than zero"
    );
  }
  if (unsharpMaskingOpts.divider && unsharpMaskingOpts.divider <= 0) {
    throw new Error(
      "unsharp_masking.divider option is not correct. Set the value greater than zero"
    );
  }
  if (
    unsharpMaskingOpts.divider &&
    typeof unsharpMaskingOpts.divider !== "number"
  ) {
    throw new Error(
      "unsharp_masking.divider option is not a number. Set the value greater than zero"
    );
  }

  const modeStr = unsharpMaskingOpts.mode || "";
  const weightStr = unsharpMaskingOpts.weight || "";
  const dividerStr = unsharpMaskingOpts.divider || "";

  return `ush:${modeStr}:${weightStr}:${dividerStr}`.replace(/:+$/, "");
};

export { test, build };
