import type {
  FormatQuality,
  FormatQualityOptionsPartial,
} from "../types/formatQuality";
import { guardIsUndef, guardIsNotArray } from "../utils";

const getOpt = (
  options: FormatQualityOptionsPartial
): FormatQuality | undefined => options.format_quality || options.fq;

const test = (options: FormatQualityOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: FormatQualityOptionsPartial): string => {
  const formatQualityOpts = getOpt(options);

  guardIsUndef(formatQualityOpts, "format_quality");
  guardIsNotArray(formatQualityOpts, "format_quality");

  const formatQualityValue: string[] = [];
  formatQualityOpts.forEach(formatQuality => {
    formatQualityValue.push(`${formatQuality.format}:${formatQuality.quality}`);
  });

  return `fq:${formatQualityValue.join(":")}`;
};

export { test, build };
