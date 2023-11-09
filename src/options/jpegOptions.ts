import type { JPEGOptions, JPEGOptionsPartial } from "../types/jpegOptions";
import { guardIsUndef, guardIsNotNum } from "../utils";

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

  if (progressive && typeof progressive !== "boolean")
    throw new Error("jpeg_options.progressive is not a boolean");
  if (no_subsample && typeof no_subsample !== "boolean")
    throw new Error("jpeg_options.no_subsample is not a boolean");
  if (trellis_quant && typeof trellis_quant !== "boolean")
    throw new Error("jpeg_options.trellis_quant is not a boolean");
  if (overshoot_deringing && typeof overshoot_deringing !== "boolean")
    throw new Error("jpeg_options.overshoot_deringing is not a boolean");

  if (optimize_scans) {
    if (progressive === false && optimize_scans === true) {
      throw new Error(
        "jpeg_options.progressive must be true if jpeg_options.optimize_scans is true"
      );
    }
    if (typeof optimize_scans !== "boolean") {
      throw new Error("jpeg_options.optimize_scans is not a boolean");
    }
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
