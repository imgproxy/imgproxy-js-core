import type { JPEGOptions, JPEGOptionsPartial } from "../types/jpegOptions";

const getOpt = (options: JPEGOptionsPartial): JPEGOptions | undefined =>
  options.jpeg_options || options.jpgo;

const test = (options: JPEGOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: JPEGOptionsPartial): string => {
  const jpegOptions = getOpt(options);

  if (!jpegOptions) {
    throw new Error("jpeg options option is undefined");
  }
  if (jpegOptions.progressive && typeof jpegOptions.progressive !== "boolean") {
    throw new Error("jpeg_options.progressive is not a boolean");
  }
  if (
    jpegOptions.no_subsample &&
    typeof jpegOptions.no_subsample !== "boolean"
  ) {
    throw new Error("jpeg_options.no_subsample is not a boolean");
  }
  if (
    jpegOptions.trellis_quant &&
    typeof jpegOptions.trellis_quant !== "boolean"
  ) {
    throw new Error("jpeg_options.trellis_quant is not a boolean");
  }
  if (
    jpegOptions.overshoot_deringing &&
    typeof jpegOptions.overshoot_deringing !== "boolean"
  ) {
    throw new Error("jpeg_options.overshoot_deringing is not a boolean");
  }
  if (jpegOptions.optimize_scans) {
    if (
      jpegOptions.progressive === false &&
      jpegOptions.optimize_scans === true
    ) {
      throw new Error(
        "jpeg_options.progressive must be true if jpeg_options.optimize_scans is true"
      );
    }
    if (typeof jpegOptions.optimize_scans !== "boolean") {
      throw new Error("jpeg_options.optimize_scans is not a boolean");
    }
  }
  if (jpegOptions.quant_table) {
    if (typeof jpegOptions.quant_table !== "number") {
      throw new Error("jpeg_options.quant_table is not a number");
    }
    if (jpegOptions.quant_table < 0 || jpegOptions.quant_table > 8) {
      throw new Error("jpeg_options.quant_table is out of range. Must be 0-8");
    }
  }

  const progressive =
    jpegOptions.progressive === undefined ? "" : jpegOptions.progressive;
  const ns =
    jpegOptions.no_subsample === undefined ? "" : jpegOptions.no_subsample;
  const tq =
    jpegOptions.trellis_quant === undefined ? "" : jpegOptions.trellis_quant;
  const od =
    jpegOptions.overshoot_deringing === undefined
      ? ""
      : jpegOptions.overshoot_deringing;
  const os =
    jpegOptions.optimize_scans === undefined ? "" : jpegOptions.optimize_scans;
  const qt =
    jpegOptions.quant_table === undefined ? "" : jpegOptions.quant_table;

  return `jpgo:${progressive}:${ns}:${tq}:${od}:${os}:${qt}`.replace(/:+$/, "");
};

export { test, build };
