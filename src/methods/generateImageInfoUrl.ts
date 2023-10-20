import { Options } from "../typesImageInfo";
import * as optionModules from "../optionsImageInfo";

const correctUrlTypes = {
  plain: true,
  base64: true,
  encoded: true,
};

type URL = {
  value: string;
  type: "plain" | "base64" | "encoded";
};

interface Result {
  prefix: "/info";
  suffix: string;
}

const generateImageInfoUrl = (url: URL, options?: Options): Result => {
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

  return { prefix: "/info", suffix: `${optsPart}${urlPart}` };
};

export default generateImageInfoUrl;
