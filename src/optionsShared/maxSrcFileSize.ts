import type {
  MaxSrcFileSize,
  MaxSrcFileSizeOptionsPartial,
} from "../typesShared/maxSrcFileSize";
import { guardIsUndef, guardIsNotNum } from "../utils";

const getOpt = (
  options: MaxSrcFileSizeOptionsPartial
): MaxSrcFileSize | undefined => {
  if ("max_src_file_size" in options) {
    return options.max_src_file_size;
  } else if ("msfs" in options) {
    return options.msfs;
  }
  return undefined;
};

const test = (options: MaxSrcFileSizeOptionsPartial): boolean =>
  getOpt(options) !== undefined;

const build = (options: MaxSrcFileSizeOptionsPartial): string => {
  const maxSrcFileSize = getOpt(options);

  guardIsUndef(maxSrcFileSize, "max_src_file_size");
  guardIsNotNum(maxSrcFileSize, "max_src_file_size", { addParam: { min: 0 } });

  return `msfs:${maxSrcFileSize}`;
};

export { test, build };
