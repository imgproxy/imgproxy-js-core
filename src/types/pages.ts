/**
 * *Pages option*. **PRO feature**
 *
 * When a source image supports pagination (PDF, TIFF) or animation (GIF, WebP),
 * this option allows specifying the number of pages to use. The pages will be stacked vertically and left-aligned.
 * The value can be any positive integer starting with `1`.
 *
 * @warning  If both the source and the resulting image formats supoprt animation,
 * imgproxy will ignore this option and use all the source image pages.
 * Use the `disable_animation` option to make imgproxy treat all images as not animated.
 *
 * @default 1
 *
 * @see
 * - {@link https://docs.imgproxy.net/generating_the_url?id=pages | pages option imgproxy docs}
 * - {@link https://docs.imgproxy.net/generating_the_url?id=disable-animation | disable animation option imgproxy docs}
 */
type Pages = number;

/**
 * *Pages option*. **PRO feature**
 *
 * To describe the Pages option, you can use the keyword `pages` or `pgs`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=pages
 */
interface PagesOptionsPartial {
  pages?: Pages;
  pgs?: Pages;
}

export { Pages, PagesOptionsPartial };
