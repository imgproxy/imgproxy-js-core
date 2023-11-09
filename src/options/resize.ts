import type { ResizeOptionsPartial, Resize } from "../types/resize";
import * as extendOpt from "./extend";
import { guardIsUndef, guardIsNotNum, normalizeBoolean } from "../utils";

const correctResizingTypes = {
  fit: true,
  fill: true,
  auto: true,
  fill_down: true,
  force: true,
};

const getOpt = (options: ResizeOptionsPartial): Resize | undefined =>
  options.resize || options.rs;

const test = (options: ResizeOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ResizeOptionsPartial): string => {
  const resizeOpts = getOpt(options);

  guardIsUndef(resizeOpts, "resize");
  const { resizing_type, width, height, enlarge } = resizeOpts;

  if (resizing_type && !correctResizingTypes[resizing_type]) {
    throw new Error(`incorrect resizing_type`);
  }
  if (width) guardIsNotNum(width, "resize.width", { addParam: { min: 0 } });
  if (height) guardIsNotNum(height, "resize.height", { addParam: { min: 0 } });

  const rt = resizing_type || "";
  const w = width || "";
  const h = height || "";
  const el = enlarge === undefined ? "" : normalizeBoolean(enlarge);
  const ex = extendOpt.test(resizeOpts)
    ? extendOpt.build(resizeOpts, { headless: true })
    : "";

  return `rs:${rt}:${w}:${h}:${el}:${ex}`.replace(/:+$/, "");
};

export { test, build };
