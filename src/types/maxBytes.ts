/**
 * *Max bytes option*
 *
 * When set, imgproxy automatically degrades the quality of the image until the image size
 * is under the specified amount of bytes.
 *
 * @warning Applicable only to `jpg`, `webp`, `heic`, and `tiff` formats.
 * When this option is set, imgproxy saves image multiple times to achieve the specified image size.
 *
 * @default 0
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=max-bytes | max bytes option imgproxy docs}
 */
type MaxBytes = number;

/**
 * *Max bytes option*
 *
 * To describe the Max bytes option, you can use the keyword `max_bytes` or `mb`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=max-bytes
 */
interface MaxBytesOptionsPartial {
  max_bytes?: MaxBytes;
  mb?: MaxBytes;
}

export { MaxBytes, MaxBytesOptionsPartial };
