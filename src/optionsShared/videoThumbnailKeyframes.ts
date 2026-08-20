import type {
  VideoThumbnailKeyframes,
  VideoThumbnailKeyframesOptionsPartial,
} from "../typesShared/videoThumbnailKeyframes";
import { guardIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: VideoThumbnailKeyframesOptionsPartial
): VideoThumbnailKeyframes | undefined => {
  if ("video_thumbnail_keyframes" in options) {
    return options.video_thumbnail_keyframes;
  }
  if ("vtk" in options) {
    return options.vtk;
  }

  return undefined;
};

const test = (options: VideoThumbnailKeyframesOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: VideoThumbnailKeyframesOptionsPartial): string => {
  const videoThumbnailKeyframes = getOpt(options);

  guardIsUndef(videoThumbnailKeyframes, "video_thumbnail_keyframes");

  return `vtk:${normalizeBoolean(videoThumbnailKeyframes)}`;
};

export { test, build };
