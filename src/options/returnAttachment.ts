import type {
  ReturnAttachment,
  ReturnAttachmentOptionsPartial,
} from "../types/returnAttachment";
import { normalizeBoolean } from "../utils";

const getOpt = (
  options: ReturnAttachmentOptionsPartial
): ReturnAttachment | undefined => {
  if ("return_attachment" in options) {
    return options.return_attachment;
  } else if ("ra" in options) {
    return options.ra;
  }

  return undefined;
};
// options.return_attachment || options.ra;

const test = (options: ReturnAttachmentOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: ReturnAttachmentOptionsPartial): string => {
  const returnAttachment = getOpt(options);

  if (returnAttachment === undefined) {
    throw new Error("return_attachment option is undefined");
  }

  return `ra:${normalizeBoolean(returnAttachment)}`;
};

export { test, build };
