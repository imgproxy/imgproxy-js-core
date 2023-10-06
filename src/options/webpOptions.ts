import type { WebpOptions, WebpOptionsPartial } from "../types/webpOptions";

const getOpt = (options: WebpOptionsPartial): WebpOptions | undefined =>
  options.webp_options || options.webpo;

const test = (options: WebpOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: WebpOptionsPartial): string => {
  const webpOptions = getOpt(options);

  if (!webpOptions) {
    throw new Error("webp options option is undefined");
  } else if (
    webpOptions !== "lossy" &&
    webpOptions !== "near_lossless" &&
    webpOptions !== "lossless"
  ) {
    throw new Error(
      "webp options option is invalid. Must be one of: 'lossy', 'near_lossless', 'lossless'"
    );
  }

  return `webp_options:${webpOptions}`;
};

export { test, build };
