import type {
  ReturnAttachment,
  ReturnAttachmentOptionsPartial,
} from "../types/returnAttachment";
import { guardIsUndef, normalizeBoolean } from "../utils";

const getOpt = (
  options: ReturnAttachmentOptionsPartial
): ReturnAttachment | undefined => {
  if ("return_attachment" in options) {
    return options.return_attachment;
  } else if ("att" in options) {
    return options.att;
  }

  return undefined;
};

const test = (options: ReturnAttachmentOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: ReturnAttachmentOptionsPartial): string => {
  const returnAttachment = getOpt(options);
  guardIsUndef(returnAttachment, "return_attachment");
  return `att:${normalizeBoolean(returnAttachment)}`;
};

export { test, build };
