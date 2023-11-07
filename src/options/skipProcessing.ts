import type {
  SkipProcessing,
  SkipProcessingOptionsPartial,
} from "../types/skipProcessing";
import { errorParamIsUndef } from "../utils";

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

  errorParamIsUndef(skipProcessing, "skip_processing");
  if (!Array.isArray(skipProcessing)) {
    throw new Error("skip_processing option is not an array");
  }
  if (skipProcessing.length === 0) {
    throw new Error("skip_processing option is empty");
  }
  if (skipProcessing.some(item => !extNames.includes(item))) {
    throw new Error(
      `skip_processing option contains unsupported extensions. Supported extensions: ${extNames.join(
        ","
      )}`
    );
  }

  return `sp:${skipProcessing.join(":")}`;
};

export { test, build };
