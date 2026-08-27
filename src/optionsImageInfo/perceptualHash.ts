import type {
  PerceptualHash,
  PerceptualHashImageInfoOptionsPartial,
} from "../typesImageInfo/perceptualHash";
import { guardIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: PerceptualHashImageInfoOptionsPartial
): PerceptualHash | undefined => {
  if ("perceptual_hash" in options) {
    return options.perceptual_hash;
  } else if ("phash" in options) {
    return options.phash;
  } else if ("ph" in options) {
    return options.ph;
  }

  return undefined;
};

const test = (options: PerceptualHashImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: PerceptualHashImageInfoOptionsPartial): string => {
  const perceptualHashOpts = getOpt(options);
  guardIsUndef(perceptualHashOpts, "perceptual_hash");
  return `ph:${normalizeBoolean(perceptualHashOpts)}`;
};

export { test, build };
