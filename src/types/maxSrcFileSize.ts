/**
 * *Max src file size option*
 *
 * The maximum size of the source image, in bytes. Images with larger file size will be rejected.
 * When set to `0`, file size check is disabled.
 *
 * @warning Since this option allows redefining a security restriction,
 * its usage is not allowed unless the `IMGPROXY_ALLOW_SECURITY_OPTIONS` config is set to true.
 *
 * @default 0
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=max-src-file-size | max src file size option imgproxy docs}
 */
type MaxSrcFileSize = number;

/**
 * *Max src file size option*
 *
 * To describe the Max src file size option, you can use the keyword `max_src_file_size` or `msfs`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=max-src-file-size
 */
interface MaxSrcFileSizeOptionsPartial {
  max_src_file_size?: MaxSrcFileSize;
  msfs?: MaxSrcFileSize;
}

export { MaxSrcFileSize, MaxSrcFileSizeOptionsPartial };
