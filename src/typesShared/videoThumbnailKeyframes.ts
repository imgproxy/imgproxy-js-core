/**
 * *Video thumbnail keyframes option*. **PRO feature**
 *
 * When set to `1`, `"t"` or `true`, imgproxy will use the latest keyframe before
 * the requested second for video thumbnail generation. This makes video thumbnail
 * generation faster yet the used frame timestamp will not be exactly equal to the requested one.
 *
 * Redefining `IMGPROXY_VIDEO_THUMBNAIL_KEYFRAMES` config.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * @default false
 *
 * @see {@link https://docs.imgproxy.net/usage/processing#video-thumbnail-keyframes | video thumbnail keyframes option imgproxy docs}
 */
type VideoThumbnailKeyframes = 1 | "t" | true | false | string;

/**
 * *Video thumbnail keyframes option*. **PRO feature**
 *
 * To describe the Video Thumbnail Keyframes option, you can use the keyword `video_thumbnail_keyframes` or `vtk`.
 *
 * @see https://docs.imgproxy.net/usage/processing#video-thumbnail-keyframes
 */
interface VideoThumbnailKeyframesOptionsPartial {
  video_thumbnail_keyframes?: VideoThumbnailKeyframes;
  vtk?: VideoThumbnailKeyframes;
}

export { VideoThumbnailKeyframes, VideoThumbnailKeyframesOptionsPartial };
