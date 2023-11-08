import type { WebpOptions, WebpOptionsPartial } from "../types/webpOptions";
import { guardIsUndef } from "../utils";

const correctOptions = {
  lossy: true,
  near_lossless: true,
  lossless: true,
};

const getOpt = (options: WebpOptionsPartial): WebpOptions | undefined =>
  options.webp_options || options.webpo;

const test = (options: WebpOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: WebpOptionsPartial): string => {
  const webpOptions = getOpt(options);

  guardIsUndef(webpOptions, "webp_options");
  if (!correctOptions[webpOptions]) {
    throw new Error(
      "webp options option is invalid. Must be one of: 'lossy', 'near_lossless', 'lossless'"
    );
  }

  return `webpo:${webpOptions}`;
};

export { test, build };
