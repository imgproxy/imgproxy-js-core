/**
 * *Filename option*
 *
 * Defines a filename for the Content-Disposition header.
 * When not specified, imgproxy will get the filename from the source URL.
 *
 * @param {string} name - escaped or URL-safe Base64-encoded filename to be used in the `Content-Disposition` header
 * @param {1 | "t" | true | false | string} [encoded] - (optional) identifies if filename is Base64-encoded.
 * Set it to `1`, `"t"`, or `true` if you encoded the filename value with URL-safe Base64 encoding.
 * If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * @default empty
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=filename | filename option imgproxy docs}
 */
interface Filename {
  name: string;
  encoded?: 1 | "t" | true | false | string;
}

/**
 * *Filename option*
 *
 * To describe the Filename option, you can use the keyword `filename` or `fn`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=filename
 */
interface FilenameOptionsPartial {
  filename?: Filename;
  fn?: Filename;
}

export { Filename, FilenameOptionsPartial };
