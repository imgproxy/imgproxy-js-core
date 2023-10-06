/**
 * *Max src resolution*
 *
 *  The maximum resolution of the source image, in megapixels.
 * Images with larger actual size will be rejected.
 * Redefining `IMGPROXY_MAX_SRC_RESOLUTION` config.
 *
 * @warning Since this option allows redefining a security restriction,
 * its usage is not allowed unless the `IMGPROXY_ALLOW_SECURITY_OPTIONS` config is set to true.
 *
 * @default: 16.8
 *
 * @see (@link https://docs.imgproxy.net/generating_the_url?id=max-src-resolution | max src resolution option imgproxy docs)
 */
type MaxSrcResolution = number;

/**
 * *Max src resolution*
 *
 * To describe the Max src resolution option, you can use the keyword `max_src_resolution` or `msr`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=max-src-resolution
 */
interface MaxSrcResolutionOptionsPartial {
  max_src_resolution?: MaxSrcResolution;
  msr?: MaxSrcResolution;
}

export { MaxSrcResolution, MaxSrcResolutionOptionsPartial };
