import type {
  FormatQuality,
  FormatQualityOptionsPartial,
} from "../types/formatQuality";
import { errorParamIsUndef } from "../utils";

const getOpt = (
  options: FormatQualityOptionsPartial
): FormatQuality | undefined => options.format_quality || options.fq;

const test = (options: FormatQualityOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: FormatQualityOptionsPartial): string => {
  const formatQualityOpts = getOpt(options);

  errorParamIsUndef(formatQualityOpts, "format_quality");
  if (!Array.isArray(formatQualityOpts)) {
    throw new Error("format quality option must be an array");
  }
  if (formatQualityOpts.length === 0) {
    throw new Error("format quality option is empty");
  }

  const formatQualityValue: string[] = [];
  formatQualityOpts.forEach(formatQuality => {
    formatQualityValue.push(`${formatQuality.format}:${formatQuality.quality}`);
  });

  return `fq:${formatQualityValue.join(":")}`;
};

export { test, build };
