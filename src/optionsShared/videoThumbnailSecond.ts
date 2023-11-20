import type {
  VideoThumbnailSecond,
  VideoThumbnailSecondOptionsPartial,
} from "../typesShared/videoThumbnailSecond";
import { guardIsUndef, guardIsNotNum } from "../utils";

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

  guardIsUndef(videoThumbnailSecond, "video_thumbnail_second");
  guardIsNotNum(videoThumbnailSecond, "video_thumbnail_second", {
    addParam: { min: 1, isInt: true },
  });

  return `vts:${videoThumbnailSecond}`;
};

export { test, build };
