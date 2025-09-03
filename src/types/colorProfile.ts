/**
 * *Color Profile option*
 *
 * When set, imgproxy will convert the image's colorspace to the specified color profile
 * and embed the selected color profile in the output image.
 *
 * @note This is a Pro feature.
 * @note Ignored if the output format doesn't support color profiles.
 * @note Embedded profiles are not stripped by the standard color profile removal options.
 *
 * Available profiles:
 * - `srgb`: Built-in compact sRGB profile
 * - `cmyk`: Built-in "Chemical proof" CMYK profile
 * - Custom color profile filename (located in IMGPROXY_COLOR_PROFILES_DIR)
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=color-profile | color profile option imgproxy docs}
 */
type ColorProfile = string;

/**
 * *Color Profile option*
 *
 * To describe the Color Profile option, you can use the keywords `color_profile`, `cp`, or `icc`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=color-profile
 */
interface ColorProfileOptionsPartial {
  color_profile?: ColorProfile;
  cp?: ColorProfile;
  icc?: ColorProfile;
}

export { ColorProfile, ColorProfileOptionsPartial };
