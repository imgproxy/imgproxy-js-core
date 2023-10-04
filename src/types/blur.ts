/**
 * *Blur option*
 *
 * When set, imgproxy will apply a gaussian blur filter to the resulting image.
 * The value of sigma defines the size of the mask imgproxy will use.
 * The value can be an any positive number.
 *
 * @default disabled
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=blur
 */
type Blur = number;

/**
 * *Blur option*
 *
 * To describe the Blur option, you can use the keyword `blur` or `bl`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=blur
 */
interface BlurOptionsPartial {
  blur?: Blur;
  bl?: Blur;
}

export { Blur, BlurOptionsPartial };
