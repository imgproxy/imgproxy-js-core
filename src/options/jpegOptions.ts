import type { JPEGOptions, JPEGOptionsPartial } from "../types/jpegOptions";
import { guardIsUndef, guardIsNotNum, guardIsNotBool } from "../utils";

const getOpt = (options: JPEGOptionsPartial): JPEGOptions | undefined =>
  options.jpeg_options || options.jpgo;

const test = (options: JPEGOptionsPartial): boolean => Boolean(getOpt(options));

const build = (options: JPEGOptionsPartial): string => {
  const jpegOptions = getOpt(options);

  guardIsUndef(jpegOptions, "jpeg_options");
  const {
    progressive,
    no_subsample,
    trellis_quant,
    overshoot_deringing,
    optimize_scans,
    quant_table,
  } = jpegOptions;

  if (progressive) guardIsNotBool(progressive, "jpeg_options.progressive");
  if (no_subsample) guardIsNotBool(no_subsample, "jpeg_options.no_subsample");
  if (trellis_quant)
    guardIsNotBool(trellis_quant, "jpeg_options.trellis_quant");
  if (overshoot_deringing)
    guardIsNotBool(overshoot_deringing, "jpeg_options.overshoot_deringing");

  if (optimize_scans) {
    guardIsNotBool(optimize_scans, "jpeg_options.optimize_scans");
    if (progressive === false)
      throw new Error(
        "jpeg_options.progressive must be true if jpeg_options.optimize_scans is true"
      );
  }
  if (quant_table)
    guardIsNotNum(quant_table, "jpeg_options.quant_table", {
      addParam: { min: 0, max: 8 },
    });

  const pr = progressive === undefined ? "" : progressive;
  const ns = no_subsample === undefined ? "" : no_subsample;
  const tq = trellis_quant === undefined ? "" : trellis_quant;
  const od = overshoot_deringing === undefined ? "" : overshoot_deringing;
  const os = optimize_scans === undefined ? "" : optimize_scans;
  const qt = quant_table === undefined ? "" : quant_table;

  return `jpgo:${pr}:${ns}:${tq}:${od}:${os}:${qt}`.replace(/:+$/, "");
};

export { test, build };
