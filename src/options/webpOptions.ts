import type { WebpOptions, WebpOptionsPartial } from "../types/webpOptions";
import { guardIsNotBool, guardIsUndef, guardIsValidVal } from "../utils";

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
  let compression: string, smart_subsample: boolean | undefined;

  guardIsUndef(webpOptions, "webp_options");

  if (typeof webpOptions === "string") {
    compression = webpOptions;
  } else {
    compression = webpOptions.compression;

    if (webpOptions.smart_subsample !== undefined) {
      smart_subsample = webpOptions.smart_subsample;
      guardIsNotBool(smart_subsample, "webp_options.smart_subsample");
    }
  }

  guardIsValidVal(correctOptions, compression, "webp_options");

  return `webpo:${compression}${smart_subsample !== undefined ? `:${smart_subsample}` : ""}`;
};

export { test, build };
