/**
 * *Brightness option*. **PRO feature.**
 *
 * When set, imgproxy will adjust brightness of the resulting image.
 * `brightness` is an integer number ranging from -255 to 255.
 *
 * @example
 * {brightness: 50} - increase brightness by 50
 * {brightness: -50} - decrease brightness by 50
 *
 * @default 0
 */
type Brightness = number;

/**
 * *Brightness option*. **PRO feature.**
 *
 * To describe the Brightness option, you can use the keyword `brightness` or `br`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=brightness
 */
interface BrightnessOptionsPartial {
  brightness?: Brightness;
  br?: Brightness;
}

export { Brightness, BrightnessOptionsPartial };
