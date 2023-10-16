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

  if (typeof backgroundOpts === "number") {
    throw new Error("background option is not a string or object");
  }

  if (typeof backgroundOpts === "string") {
    if (!backgroundOpts.match(/^[0-9a-fA-F]+$/)) {
      throw new Error("color in trim option must be hexadecimal");
    }

    if (
      backgroundOpts.length !== 6 &&
      backgroundOpts.length !== 3 &&
      backgroundOpts.length !== 8
    ) {
      throw new Error("color in trim option must be 3, 6 or 8 characters");
    }

    return `bg:${backgroundOpts}`;
  }

  if (
    backgroundOpts.r === undefined ||
    backgroundOpts.g === undefined ||
    backgroundOpts.b === undefined
  ) {
    throw new Error(
      "background options are undefined. You must specify options: r, g, b"
    );
  }
  if (typeof backgroundOpts.r !== "number") {
    throw new Error("background.r option is not a number");
  }
  if (typeof backgroundOpts.g !== "number") {
    throw new Error("background.g option is not a number");
  }
  if (typeof backgroundOpts.b !== "number") {
    throw new Error("background.b option is not a number");
  }

  return `bg:${backgroundOpts.r}:${backgroundOpts.g}:${backgroundOpts.b}`;
};

export { test, build };
