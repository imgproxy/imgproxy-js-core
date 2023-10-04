interface PaddingDetails {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

/**
 * *Padding option*
 *
 * Defines padding size using CSS-style syntax.
 * Padded space is filled according to the `background` option.
 *
 * - `top` (optional) - top padding (and for all other sides if they haven’t been explicitly st)
 * - `right` (optional) - right padding (and left if it hasn’t been explicitly set)
 * - `bottom` (optional) - bottom padding
 * - `left` (optional) - left padding
 *
 *
 * @note
 * - Padding is applied after all image transformations (except watermarking) and enlarges the generated image.
 * This means that if your resize dimensions were 100x200px and you applied the `padding:10` option,
 * then you will end up with an image with dimensions of 120x220px.
 * - Padding follows the `dpr` option so it will also be scaled if you’ve set it.
 *
 * @example
 * {padding: 10} - 10px padding on all sides
 * {padding: {top:10, right: 20}} - 10px top and bottom padding, 20px left and right padding
 * {padding: {top: 10, right: 20, bottom: 30}} - 10px top padding, 20px left and right padding, 30px bottom padding
 * {padding: {bottom: 30, left: 40}} - 0px top padding, 0px right padding, 30px bottom padding, 40px left padding
 *
 * @see
 * - `padding` https://docs.imgproxy.net/generating_the_url?id=padding
 * - `background` https://docs.imgproxy.net/generating_the_url?id=background
 * - `dpr` https://docs.imgproxy.net/generating_the_url?id=dpr
 */
type Padding = PaddingDetails | number;

/**
 * *Padding option*
 *
 * To describe the Padding option, you can use the keyword `padding` or `pd`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=padding
 */
interface PaddingOptionsPartial {
  padding?: Padding;
  pd?: Padding;
}

export { Padding, PaddingOptionsPartial };
