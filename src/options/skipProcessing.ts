import type {
  SkipProcessing,
  SkipProcessingOptionsPartial,
} from "../types/skipProcessing";

const getOpt = (
  options: SkipProcessingOptionsPartial
): SkipProcessing | undefined => options.skip_processing || options.sp;

const test = (options: SkipProcessingOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: SkipProcessingOptionsPartial): string => {
  const skipProcessing = getOpt(options);

  if (!skipProcessing) {
    throw new Error("skip processing option is undefined");
  }

  return `skip_processing:${skipProcessing.join(":")}`;
};

export { test, build };
