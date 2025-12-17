/**
 * Boolean-like values for flip options
 *
 * @note Only `1`, `"t"`, or `true` are recognized as truthy values.
 * Any other value (including `"true"` or `"1"` as strings) will be treated as false.
 */
type FlipBooleanValue = boolean | 1 | 0 | "t" | "f";

/**
 * *Flip option*
 *
 * When set, imgproxy will flip the image along the specified axes.
 *
 * @default false:false
 *
 * @see {@link https://docs.imgproxy.net/latest/usage/processing#flip | Flip imgproxy docs}
 */
type FlipOptions = {
  /**
   * When set to `1`, `"t"`, or boolean `true`, imgproxy will flip the image horizontally.
   * @default false
   */
  horizontal?: FlipBooleanValue;
  /**
   * When set to `1`, `t`, or boolean `true`, imgproxy will flip the image vertically.
   * @default false
   */
  vertical?: FlipBooleanValue;
};

/**
 * *Flip option*
 *
 * To describe the flip option, you can use the keyword `flip` or `fl`.
 *
 * @see https://docs.imgproxy.net/latest/usage/processing#flip
 */
interface FlipOptionsPartial {
  flip?: FlipOptions;
  fl?: FlipOptions;
}

export { FlipOptions, FlipOptionsPartial };
