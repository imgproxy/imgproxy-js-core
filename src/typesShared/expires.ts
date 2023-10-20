/**
 * *Expires option*
 *
 * When set, imgproxy will check the provided unix timestamp and return 404 when expired.
 *
 * @default empty
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=expires | expires option imgproxy docs}
 * @see {@link https://www.unixtimestamp.com | unix timestamp converter}
 */
type Expires = number;

/**
 * *Expires option*
 *
 * To describe the Expires option, you can use the keyword `expires` or `exp`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=expires
 */
interface ExpiresOptionsPartial {
  expires?: Expires;
  exp?: Expires;
}

export { Expires, ExpiresOptionsPartial };
