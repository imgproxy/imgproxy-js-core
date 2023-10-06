/**
 * *Video thumbnail second option*. **PRO feature**
 *
 * The timestamp of the frame (in seconds) that will be used for the thumbnail.
 * Redefining `IMGPROXY_VIDEO_THUMBNAIL_SECOND` config.
 *
 * @default 1
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=video-thumbnail-second | video thumbnail second option imgproxy docs}
 */
type VideoThumbnailSecond = number;

/**
 * *Video thumbnail second option*. **PRO feature**
 *
 * To describe the Video Thumbnail Second option, you can use the keyword `video_thumbnail_second` or `vts`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=video-thumbnail-second
 */
interface VideoThumbnailSecondOptionsPartial {
  video_thumbnail_second?: VideoThumbnailSecond;
  vts?: VideoThumbnailSecond;
}

export { VideoThumbnailSecond, VideoThumbnailSecondOptionsPartial };
