import { Options } from "../types";
import * as optionModules from "../options";
import type { Format } from "../types/format";

const correctUrlTypes = {
  plain: true,
  base64: true,
  encoded: true,
};

const formatValues = {
  png: true,
  jpg: true,
  webp: true,
  avif: true,
  gif: true,
  ico: true,
  svg: true,
  bmp: true,
  tiff: true,
  mp4: true,
  best: true,
};

type URL = {
  value: string;
  type: "plain" | "base64" | "encoded";
  format?: Format;
};

const generateUrl = (url: URL, options?: Options): string => {
  if (!url.value) {
    throw new Error("url.value is undefined. Must be a string");
  }
  if (!url.type) {
    throw new Error(
      "url.type is undefined. Valid values are: 'plain', 'base64', 'encoded'"
    );
  }
  if (!correctUrlTypes[url.type]) {
    throw new Error(
      `url.type is invalid. Valid values are: 'plain', 'base64', 'encoded'. Got: ${url.type}`
    );
  }
  if (url.format && !formatValues[url.format]) {
    throw new Error(
      `url.format is invalid. Must be one of: ${Object.keys(formatValues).join(
        ","
      )}`
    );
  }

  let clonedOptions = options;

  if ("format" in url) {
    clonedOptions = { ...options, format: url.format };
  }

  let optsPart = "";
  if (clonedOptions) {
    for (const [, optionModule] of Object.entries(optionModules)) {
      if (optionModule.test(clonedOptions)) {
        optsPart += "/";
        optsPart += optionModule.build(clonedOptions);
      }
    }
  }

  let urlPart = "";

  if (url.type === "plain") {
    urlPart = `/plain/${url.value}`;
  } else if (url.type === "base64") {
    urlPart = `/${url.value}`;
  } else if (url.type === "encoded") {
    urlPart = `/enc/${url.value}`;
  }

  return `${optsPart}${urlPart}`;
};

export default generateUrl;
