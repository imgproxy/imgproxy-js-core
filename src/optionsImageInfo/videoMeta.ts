import type {
  VideoMeta,
  VideoMetaImageInfoOptionsPartial,
} from "../typesImageInfo/videoMeta";
import { normalizeBoolean } from "../utils";

const getOpt = (
  options: VideoMetaImageInfoOptionsPartial
): VideoMeta | undefined => {
  if ("video_meta" in options) {
    return options.video_meta;
  } else if ("vm" in options) {
    return options.vm;
  }

  return undefined;
};

const test = (options: VideoMetaImageInfoOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: VideoMetaImageInfoOptionsPartial): string => {
  const videoMetaOpts = getOpt(options);

  if (videoMetaOpts === undefined) {
    throw new Error("video_meta option is undefined");
  }

  return `vm:${normalizeBoolean(videoMetaOpts)}`;
};

export { test, build };
