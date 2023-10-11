import type {
  MaxSrcFileSize,
  MaxSrcFileSizeOptionsPartial,
} from "../types/maxSrcFileSize";

const getOpt = (
  options: MaxSrcFileSizeOptionsPartial
): MaxSrcFileSize | undefined => options.max_src_file_size || options.msfs;

const test = (options: MaxSrcFileSizeOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: MaxSrcFileSizeOptionsPartial): string => {
  const maxSrcFileSize = getOpt(options);

  if (!maxSrcFileSize) {
    throw new Error("max_src_file_size option is undefined");
  } else if (typeof maxSrcFileSize !== "number") {
    throw new Error("max_src_file_size option is not a number");
  }

  return `max_src_file_size:${maxSrcFileSize}`;
};

export { test, build };
