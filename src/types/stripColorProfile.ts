/**
 * *Strip Color option*
 *
 * When set to `1`, `"t"` or `true`, imgproxy will transform the embedded color profile (ICC) to sRGB
 * and remove it from the image.
 * Otherwise, imgproxy will try to keep it as is.
 *
 * This is normally controlled by the {@link https://docs.imgproxy.net/configuration?id=miscellaneous | IMGPROXY_STRIP_COLOR_PROFILE}
 * configuration but this procesing option allows the configuration to be set for each request.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=strip-color-profile | strip color profile option imgproxy docs}
 */
type StripColorProfile = 1 | "t" | true | false | string;

/**
 * *Strip Color option*
 *
 * To describe the Strip Color option, you can use the keyword `strip_color_profile` or `scp`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=strip-color-profile
 */
interface StripColorProfileOptionsPartial {
  strip_color_profile?: StripColorProfile;
  scp?: StripColorProfile;
}

export { StripColorProfile, StripColorProfileOptionsPartial };
