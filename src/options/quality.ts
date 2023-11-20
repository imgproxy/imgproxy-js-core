import type { Quality, QualityOptionsPartial } from "../types/quality";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (options: QualityOptionsPartial): Quality | undefined =>
  options.quality || options.q;

const test = (options: QualityOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: QualityOptionsPartial): string => {
  const qualityOpts = getOpt(options);

  guardIsUndef(qualityOpts, "quality");
  guardIsNotNum(qualityOpts, "quality", { addParam: { min: 0, max: 100 } });

  return `q:${qualityOpts}`;
};

export { test, build };
