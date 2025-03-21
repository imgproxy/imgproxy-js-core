/**
 * When step is not 0, imgproxy will generate an animated image using the source video frames.
 */
interface VideoThumbnailAnimation {
  /**
   * step: the step of timestamp (in seconds) between video frames that should be used for the animation generation:
   *     When step value is positive, imgproxy will use it as an absolute value
   *     When step value is negative, imgproxy will calculate the actual step as video_duration / frames
   */
  step: number;

  /**
   * the delay between animation frames in milliseconds
   */
  delay: number;

  /**
   * the number of animation frames
   */
  frames: number;

  /**
   * the width and height of animation frames. imgproxy will resize each used frame to fit the provided size
   */
  frame_width: number;
  frame_height: number;

  /**
   * when set to 1, t or true, imgproxy will extend each animation frame to the requested size using a black background
   */
  extend_frame?: boolean | 1 | string;

  /**
   * when set to 1, t or true, imgproxy will trim the unused frames from the animation
   */
  trim?: boolean | 1 | string;

  /**
   * when set to 1, t or true, imgproxy will use the fill resizing type for the animation frames
   */
  fill?: boolean | 1 | string;

  /**
   * floating point numbers between 0 and 1 that define the coordinates of the center of the resulting animation frame
   * (as in the fp gravity type). Treat 0 and 1 as right/left for x and top/bottom for y.
   * Applicable only when fill is set. Default: 0.5:0.5
   */
  focus_x?: number;
  focus_y?: number;
}
/**
 * *Video thumbnail animation options*. **PRO feature**
 *
 * Allows generating an animated image using the source video frames.
 *
 * @see https://docs.imgproxy.net/usage/processing#video-thumbnail-animation
 */
interface VideoThumbnailAnimationOptionsPartial {
  video_thumbnail_animation?: VideoThumbnailAnimation;
  vta?: VideoThumbnailAnimation;
}

export { VideoThumbnailAnimation, VideoThumbnailAnimationOptionsPartial };
