import { Padding, PaddingOptionsPartial } from "../types";

const getOpt = (options: PaddingOptionsPartial): Padding | undefined =>
  options.padding || options.pd;

const test = (options: PaddingOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: PaddingOptionsPartial): string => {
  const paddingOpts = getOpt(options);

  if (!paddingOpts) {
    throw new Error("padding options are undefined");
  }

  if (typeof paddingOpts === "number") {
    return `padding:${paddingOpts}`;
  }

  const top = paddingOpts.top || "";
  const right = paddingOpts.right || "";
  const bottom = paddingOpts.bottom || "";
  const left = paddingOpts.left || "";

  return `padding:${top}:${right}:${bottom}:${left}`;
};

export { test, build };
