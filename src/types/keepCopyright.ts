/**
 * *Keep copyright option*
 *
 * When set to `1`, `"t"` or `true`, imgproxy will not remove copyright info while stripping metadata.
 *
 * This is normally controlled by the {@link https://docs.imgproxy.net/configuration?id=miscellaneous | IMGPROXY_KEEP_COPYRIGHT} configuration
 * but this procesing option allows the configuration to be set for each request.
 *
 * @note If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=keep-copyright | keep copyright option imgproxy docs}
 */
type KeepCopyright = 1 | "t" | "true" | "false" | string;

/**
 * *Keep metadata option*
 *
 * To describe the Keep metadata option, you can use the keyword `keep_copyright` or `kcr`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=keep-metadata
 */
interface KeepCopyrightOptionsPartial {
  keep_copyright?: KeepCopyright;
  kcr?: KeepCopyright;
}

export { KeepCopyright, KeepCopyrightOptionsPartial };
