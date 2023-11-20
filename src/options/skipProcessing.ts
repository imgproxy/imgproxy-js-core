import type {
  SkipProcessing,
  SkipProcessingOptionsPartial,
} from "../types/skipProcessing";
import { guardIsUndef, guardIsNotArray } from "../utils";

const extNames = [
  "jpg",
  "png",
  "webp",
  "avif",
  "gif",
  "ico",
  "svg",
  "heic",
  "bmp",
  "tiff",
  "pdf",
  "mp4",
];

const getOpt = (
  options: SkipProcessingOptionsPartial
): SkipProcessing | undefined => options.skip_processing || options.sp;

const test = (options: SkipProcessingOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: SkipProcessingOptionsPartial): string => {
  const skipProcessing = getOpt(options);

  guardIsUndef(skipProcessing, "skip_processing");
  guardIsNotArray(skipProcessing, "skip_processing");

  if (skipProcessing.some(item => !extNames.includes(item))) {
    const text = `Valid values are: ${extNames.join(",")}`;
    throw new Error(
      `skip_processing option contains unsupported extension. ${text}`
    );
  }

  return `sp:${skipProcessing.join(":")}`;
};

export { test, build };
