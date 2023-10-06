import type { JPEGOptions, JPEGOptionsPartial } from "../types/jpegOptions";

const getOpt = (options: JPEGOptionsPartial): JPEGOptions | undefined =>
  options.jpeg_options || options.jpgo;

const test = (options: JPEGOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: JPEGOptionsPartial): string => {
  const jpegOptions = getOpt(options);

  if (!jpegOptions) {
    throw new Error("jpeg options option is undefined");
  }

  const progressive = jpegOptions.progressive || "";
  const ns = jpegOptions.no_subsample || "";
  const tq = jpegOptions.trellis_quant || "";
  const od = jpegOptions.overshoot_deringing || "";
  const os = jpegOptions.optimize_scans || "";
  const qt = jpegOptions.quant_table || "";

  return `jpeg_options:${progressive}:${ns}:${tq}:${od}:${os}:${qt}`;
};

export { test, build };
