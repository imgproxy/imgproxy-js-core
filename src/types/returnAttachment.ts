/**
 * *Return attachment option*
 *
 * When set to `1`, `"t"` or `true`, imgproxy will return `attachment` in the `Content-Disposition` header,
 * and the browser will open a ‘Save as’ dialog. This is normally controlled by the `IMGPROXY_RETURN_ATTACHMENT`
 * configuration but this procesing option allows the configuration to be set for each request.
 *
 * If any value other than `1`, `"t"`, or `true` is passed, it will be recognized as `false`.
 *
 * @see {@link https://docs.imgproxy.net/generating_the_url?id=return-attachment | return attachment option imgproxy docs}
 */
type ReturnAttachment = 1 | "t" | true | false | string;

/**
 * *Return attachment option*
 *
 * To describe the Return attachment option, you can use the keyword `return_attachment` or `ra`.
 *
 * @see https://docs.imgproxy.net/generating_the_url?id=return-attachment
 */
interface ReturnAttachmentOptionsPartial {
  return_attachment?: ReturnAttachment;
  ra?: ReturnAttachment;
}

export { ReturnAttachment, ReturnAttachmentOptionsPartial };
