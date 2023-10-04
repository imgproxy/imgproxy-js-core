import type { Background, BackgroundOptionsPartial } from "../types/background";

const getOpt = (options: BackgroundOptionsPartial): Background | undefined =>
  options.background || options.bg;

const test = (options: BackgroundOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: BackgroundOptionsPartial): string => {
  const backgroundOpts = getOpt(options);

  if (!backgroundOpts) {
    throw new Error("background options are undefined");
  }

  if (typeof backgroundOpts === "string") {
    return `background:${backgroundOpts}`;
  }

  return `background:${backgroundOpts.r}:${backgroundOpts.g}:${backgroundOpts.b}`;
};

export { test, build };
