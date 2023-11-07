import type {
  VideoThumbnailSecond,
  VideoThumbnailSecondOptionsPartial,
} from "../typesShared/videoThumbnailSecond";
import { errorParamIsUndef } from "../utils";

const getOpt = (
  options: VideoThumbnailSecondOptionsPartial
): VideoThumbnailSecond | undefined => {
  if ("video_thumbnail_second" in options) {
    return options.video_thumbnail_second;
  } else if ("vts" in options) {
    return options.vts;
  }
  return undefined;
};

const test = (options: VideoThumbnailSecondOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: VideoThumbnailSecondOptionsPartial): string => {
  const videoThumbnailSecond = getOpt(options);

  errorParamIsUndef(videoThumbnailSecond, "video_thumbnail_second");
  if (typeof videoThumbnailSecond !== "number") {
    throw new Error(
      "video_thumbnail_second option is not a number. Must be a positive integer"
    );
  }
  if (videoThumbnailSecond < 1) {
    throw new Error(
      "video_thumbnail_second option is negative. Must be a positive integer"
    );
  }
  if (!Number.isInteger(videoThumbnailSecond)) {
    throw new Error("video_thumbnail_second must be a positive integer");
  }

  return `vts:${videoThumbnailSecond}`;
};

export { test, build };
