import { OptionsImageInfo } from "../typesImageInfo";
import * as optionModules from "../optionsImageInfo";
import { guardIsUndef, guardIsValidVal } from "../utils";
import { Settings } from "../settings";

const correctUrlTypes = {
  plain: true,
  base64: true,
  encrypted: true,
};

export type URLImageInfo = {
  value: string;
  type: "plain" | "base64" | "encrypted";
};

const allModules = Object.values(optionModules);
const presetOnlyModule = [optionModules.preset];

const generateImageInfoUrl = (
  url: URLImageInfo,
  options?: OptionsImageInfo,
  settings?: Settings
): string => {
  guardIsUndef(url.value, "url.value", "Must be a string");
  guardIsUndef(
    url.type,
    "url.type",
    `Valid values are: ${Object.keys(correctUrlTypes).join(", ")}`
  );
  guardIsValidVal(correctUrlTypes, url.type, "url.type");

  let optsPart = "";
  if (options) {
    const modules = settings?.onlyPresets ? presetOnlyModule : allModules;

    for (const optionModule of modules) {
      if (optionModule.test(options)) {
        optsPart += "/";
        optsPart += optionModule.build(options, settings);
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
