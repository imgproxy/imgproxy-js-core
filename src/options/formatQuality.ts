import type {
  FormatQuality,
  FormatQualityOptionsPartial,
} from "../types/formatQuality";

const getOpt = (
  options: FormatQualityOptionsPartial
): FormatQuality | undefined => options.format_quality || options.fq;

const test = (options: FormatQualityOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: FormatQualityOptionsPartial): string => {
  const formatQualityOpts = getOpt(options);

  if (!formatQualityOpts) {
    throw new Error("format quality option is undefined");
  }

  const formatQualityValue: string[] = [];
  formatQualityOpts.forEach(formatQuality => {
    formatQualityValue.push(`${formatQuality.format}:${formatQuality.quality}`);
  });

  return `format_quality:${formatQualityValue.join(":")}`;
};

export { test, build };
