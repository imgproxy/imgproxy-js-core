import type {
  ReturnAttachment,
  ReturnAttachmentOptionsPartial,
} from "../types/returnAttachment";

const getOpt = (
  options: ReturnAttachmentOptionsPartial
): ReturnAttachment | undefined => options.return_attachment || options.ra;

const test = (options: ReturnAttachmentOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ReturnAttachmentOptionsPartial): string => {
  const returnAttachment = getOpt(options);

  if (!returnAttachment) {
    throw new Error("return_attachment option is undefined");
  }

  return `return_attachment:${returnAttachment}`;
};

export { test, build };
