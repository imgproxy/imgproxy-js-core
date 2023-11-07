import { OptionsImageInfo } from "../typesImageInfo";
import * as optionModules from "../optionsImageInfo";
import { errorParamIsUndef } from "../utils";

const correctUrlTypes = {
  plain: true,
  base64: true,
  encrypted: true,
};

type URLImageInfo = {
  value: string;
  type: "plain" | "base64" | "encrypted";
};

const generateImageInfoUrl = (
  url: URLImageInfo,
  options?: OptionsImageInfo
): string => {
  errorParamIsUndef(url.value, "url.value", "Must be a string");
  errorParamIsUndef(
    url.type,
    "url.type",
    `Valid values are: ${Object.keys(correctUrlTypes).join(", ")}`
  );
  if (!correctUrlTypes[url.type]) {
    throw new Error(
      `url.type is invalid. Valid values are: 'plain', 'base64', 'encrypted'. Got: ${url.type}`
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
  } else if (url.type === "encrypted") {
    urlPart = `/enc/${url.value}`;
  }

  return `${optsPart}${urlPart}`;
};

export default generateImageInfoUrl;
export const INFO_PREFIX = "/info";
