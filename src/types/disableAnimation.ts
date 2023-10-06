/**
 * *Disable animation option*. **PRO feature**
 *
 * When set to `1`, `"t"` or `true`, imgproxy will treat all images as not animated.
 * Use the `page` and the `pages` options to specify which frames imgproxy should use.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * @default false
 *
 * @see
 * - {@link https://docs.imgproxy.net/generating_the_url?id=disable-animation | disable animation option imgproxy docs}
 * - {@link https://docs.imgproxy.net/generating_the_url?id=page | page option imgproxy docs}
 * - {@link https://docs.imgproxy.net/generating_the_url?id=pages | pages option imgproxy docs}
 */
type DisableAnimation = 1 | "t" | true | false | string;

/**
 * *Disable animation option*. **PRO feature**
 *
 * To describe the Disable Animation option, you can use the keyword `disable_animation` or `da`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=disable-animation
 */
interface DisableAnimationOptionsPartial {
  disable_animation?: DisableAnimation;
  da?: DisableAnimation;
}

export { DisableAnimation, DisableAnimationOptionsPartial };
