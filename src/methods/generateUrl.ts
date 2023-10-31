import { Options } from "../types";
import * as optionModules from "../options";

const correctUrlTypes = {
  plain: true,
  base64: true,
  encoded: true,
};

type URL = {
  value: string;
  type: "plain" | "base64" | "encoded";
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

  let optsPart = "";
  if (options) {
    for (const [, optionModule] of Object.entries(optionModules)) {
      if (optionModule.test(options)) {
        optsPart += "/";
        optsPart += optionModule.build(options);
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
