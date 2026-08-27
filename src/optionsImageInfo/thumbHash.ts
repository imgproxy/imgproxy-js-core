import type {
  ThumbHash,
  ThumbHashImageInfoOptionsPartial,
} from "../typesImageInfo/thumbHash";
import { guardIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: ThumbHashImageInfoOptionsPartial
): ThumbHash | undefined => {
  if ("thumb_hash" in options) {
    return options.thumb_hash;
  } else if ("th" in options) {
    return options.th;
  }

  return undefined;
};

const test = (options: ThumbHashImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: ThumbHashImageInfoOptionsPartial): string => {
  const thumbHashOpts = getOpt(options);
  guardIsUndef(thumbHashOpts, "thumb_hash");
  return `th:${normalizeBoolean(thumbHashOpts)}`;
};

export { test, build };
