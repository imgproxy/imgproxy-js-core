/**
 * *Max result dimension*
 *
 * Allows redefining the `IMGPROXY_MAX_RESULT_DIMENSION` configuration.
 * Specifies the maximum allowed dimension for the resulting image.
 *
 * @warning Since this option allows redefining a security restriction,
 * its usage is not allowed unless the `IMGPROXY_ALLOW_SECURITY_OPTIONS` config is set to true.
 *
 * @see {@link https://docs.imgproxy.net/latest/usage/processing#max-result-dimension | max result dimension imgproxy docs}
 */
type MaxResultDimension = number;

/**
 * *Max result dimension*
 *
 * To describe the max result dimension option, you can use the keyword `max_result_dimension` or `mrd`.
 */
interface MaxResultDimensionOptionsPartial {
  max_result_dimension?: MaxResultDimension;
  mrd?: MaxResultDimension;
}

export { MaxResultDimension, MaxResultDimensionOptionsPartial };
