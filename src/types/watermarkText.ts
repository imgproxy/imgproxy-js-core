/**
 * *Watermark text*. **PRO feature**
 *
 * When set, imgproxy will generate an image from the provided text and use it as a watermark.
 * The value should be in the URL-safe Base64-encoded format
 *
 * By default, the text color is black and the font is `sans 16`.
 * You can use {@link https://docs.gtk.org/Pango/pango_markup.html | Pango markup} in the text value to change the style.
 *
 * If you want to use a custom font, you need to put it in `/usr/share/fonts` inside a container.
 *
 * @default blank
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=watermark-text | watermark text option imgproxy docs}
 */
type WatermarkText = string;

/**
 * *Watermark text option*. **PRO feature**
 *
 * To describe the Watermark text option, you can use the keyword `watermark_text` or `wmt`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=watermark-text
 */
interface WatermarkTextOptionsPartial {
  watermark_text?: WatermarkText;
  wmt?: WatermarkText;
}

export { WatermarkText, WatermarkTextOptionsPartial };
