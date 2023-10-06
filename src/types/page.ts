/**
 * *Page option*. **PRO feature**
 *
 * When a source image supports pagination (`PDF`, `TIFF`) or animation (`GIF`, `WebP`),
 * this option allows specifying the page to use. Page numeration starts from zero.
 *
 * The value can be any positive integer
 *
 * @warning If both the source and the resulting image formats supoprt animation,
 * imgproxy will ignore this option and use all the source image pages.
 * Use the `disable_animation` option to make imgproxy treat all images as not animated.
 *
 * @default 0
 *
 * @see
 * - {@link https://docs.imgproxy.net/generating_the_url?id=page | page option imgproxy docs}
 * - {@link https://docs.imgproxy.net/generating_the_url?id=disable-animation | disable animation option imgproxy docs}
 */
type Page = number;

/**
 * *Page option*. **PRO feature**
 *
 * To describe the Page option, you can use the keyword `page` or `pg`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=page
 */
interface PageOptionsPartial {
  page?: Page;
  pg?: Page;
}

export { Page, PageOptionsPartial };
