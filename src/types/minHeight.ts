/**
 * *Min height option*
 *
 * Defines the minimum height of the resulting image.
 *
 * @warning  When both `height` and `min-height` are set, the final image will be cropped according to `height`,
 * so use this combination with care.
 *
 * @default 0
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=min-height
 */
type MinHeight = number;

/**
 * *Min height option*
 *
 * To describe the Min height option, you can use the keyword `min_height` or `mh`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=min-height
 */
interface MinHeightOptionsPartial {
  min_height?: MinHeight;
  mh?: MinHeight;
}

export { MinHeight, MinHeightOptionsPartial };
