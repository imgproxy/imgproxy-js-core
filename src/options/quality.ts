import type { Quality, QualityOptionsPartial } from "../types/quality";

const getOpt = (options: QualityOptionsPartial): Quality | undefined =>
  options.quality || options.q;

const test = (options: QualityOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: QualityOptionsPartial): string => {
  const qualityOpts = getOpt(options);

  if (!qualityOpts) {
    throw new Error("quality option is undefined");
  }
  if (typeof qualityOpts !== "number") {
    throw new Error("quality option must be a number");
  }
  if (qualityOpts < 0 || qualityOpts > 100) {
    throw new Error("quality option must be in range from 1 to 100");
  }

  return `q:${qualityOpts}`;
};

export { test, build };
