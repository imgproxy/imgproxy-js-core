import type {
  VideoThumbnailSecond,
  VideoThumbnailSecondOptionsPartial,
} from "../types/videoThumbnailSecond";

const getOpt = (
  options: VideoThumbnailSecondOptionsPartial
): VideoThumbnailSecond | undefined =>
  options.video_thumbnail_second || options.vts;

const test = (options: VideoThumbnailSecondOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: VideoThumbnailSecondOptionsPartial): string => {
  const videoThumbnailSecond = getOpt(options);

  if (!videoThumbnailSecond) {
    throw new Error("video thumbnail second option is undefined");
  } else if (typeof videoThumbnailSecond !== "number") {
    throw new Error(
      "video thumbnail second option is invalid. Must be a positive integer"
    );
  }

  return `video_thumbnail_second:${videoThumbnailSecond}`;
};

export { test, build };
