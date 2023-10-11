/**
 * *Max animation frame resolution*
 *
 * This option redefining `IMGPROXY_MAX_ANIMATION_FRAME_RESOLUTION` config.
 *
 * The maximum resolution of the animated source image frame, in megapixels.
 * Images with larger actual frame size will be rejected.
 * When set to `0`, imgproxy will test the whole animated image resolution
 * against `IMGPROXY_MAX_SRC_RESOLUTION` config summarising all the frames’ resolutions
 *
 * @warning Since this option allows redefining a security restriction, its usage
 * is not allowed unless the `IMGPROXY_ALLOW_SECURITY_OPTIONS` config is set to `true`.
 *
 * @default 0
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=max-animation-frame-resolution | max animation frame resolution imgproxy docs}
 */
type MaxAnimationFrameResolution = number;

/**
 * *Max animation frame resolution*
 *
 * To describe the max animation frame resolution, you can use the keyword `max_animation_frame_resolution` or `mafr`.
 */
interface MAFROptionsPartial {
  max_animation_frame_resolution?: MaxAnimationFrameResolution;
  mafr?: MaxAnimationFrameResolution;
}

export { MaxAnimationFrameResolution, MAFROptionsPartial };
