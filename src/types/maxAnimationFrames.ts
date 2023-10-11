/**
 * *Max animation frames*
 *
 * imgproxy can process animated images (GIF, WebP), but since this operation
 * is pretty memory heavy, only one frame is processed by default.
 *
 * You can increase the maximum number of animated image frames that may be processed.
 *
 * @default 1
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=max-animation-frames | max animation frames imgproxy docs}
 */
type MaxAnimationFrames = number;

/**
 * *Max animation frames*
 *
 * To describe the max animation frames, you can use the keyword `max_animation_frames` or `maf`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=max-animation-frames
 */
interface MaxAnimationFramesOptionsPartial {
  max_animation_frames?: MaxAnimationFrames;
  maf?: MaxAnimationFrames;
}

export { MaxAnimationFrames, MaxAnimationFramesOptionsPartial };
