import type {
  MaxResultDimension,
  MaxResultDimensionOptionsPartial,
} from "../types/maxResultDimension";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (
  options: MaxResultDimensionOptionsPartial
): MaxResultDimension | undefined => {
  return options.max_result_dimension ?? options.mrd;
};

const test = (options: MaxResultDimensionOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: MaxResultDimensionOptionsPartial): string => {
  const maxResultDimension = getOpt(options);

  guardIsUndef(maxResultDimension, "max_result_dimension");
  guardIsNotNum(maxResultDimension, "max_result_dimension", {
    addParam: { min: 0 },
  });

  return `mrd:${maxResultDimension}`;
};

export { test, build };
