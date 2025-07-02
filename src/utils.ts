export const normalizeBoolean = (value: 1 | 0 | string | boolean): string => {
  if (value === true || value === "t" || value === 1) {
    return "t";
  }
  return "f";
};

const getParamName = (name: string): string => {
  return `${name}${name.includes(".") ? "" : " option"}`;
};

export function guardIsUndef<T>(
  param: T | undefined,
  paramName: string,
  addInfo?: string
): asserts param is T {
  if (param === undefined) {
    throw new Error(
      `${getParamName(paramName)} is undefined${addInfo ? `. ${addInfo}` : ""}`
    );
  }
}

interface IAddParam {
  max?: number;
  min?: number;
  isInt?: boolean;
  minEqual?: boolean;
}

interface AddParams {
  addInfo?: string;
  addParam?: IAddParam;
}

function getMinNumText(
  paramName: string,
  value: number,
  addInfo?: string,
  isEqual?: boolean
): string {
  return `${getParamName(paramName)} value can't be less${
    isEqual ? " or equal" : ""
  } then ${value}${addInfo ? `. ${addInfo}` : ""}`;
}

export function guardIsNotNum(
  param: number | undefined,
  paramName: string,
  additional?: AddParams
): asserts param is number {
  if (typeof param !== "number") {
    throw new Error(
      `${getParamName(paramName)} is not a number${
        additional?.addInfo ? `. ${additional?.addInfo}` : ""
      }`
    );
  }

  if (!additional?.addParam) return;

  const addParam = additional.addParam;
  const addInfo = additional?.addInfo;
  if (addParam.min !== undefined) {
    if (addParam.minEqual && param <= addParam.min)
      throw new Error(getMinNumText(paramName, addParam.min, addInfo, true));
    if (param < addParam.min)
      throw new Error(getMinNumText(paramName, addParam.min, addInfo));
    if (addParam.max !== undefined && param > addParam.max) {
      throw new Error(
        `${getParamName(paramName)} value can't be more than ${addParam.max}${
          addInfo ? `. ${addInfo}` : ""
        }`
      );
    }
  }

  if (addParam.isInt && !Number.isInteger(param))
    throw new Error(`${getParamName(paramName)} is must be an integer`);
}

type ValidValues = Record<string | number, boolean>;

export function guardIsValidVal(
  valObj: ValidValues,
  value: string | number,
  name: string
) {
  const text = `Valid values are: ${Object.keys(valObj).join(", ")}`;

  if (!valObj[value]) {
    throw new Error(`${getParamName(name)} is invalid. ${text}`);
  }
}

export function guardIsOneOf(
  validOptions: string[],
  value: string,
  name: string
) {
  if (!validOptions.includes(value)) {
    const text = `Valid values are: ${validOptions.join(", ")}`;
    throw new Error(`${getParamName(name)} is invalid. ${text}`);
  }
}

export function guardIsNotStr(
  param: string | undefined,
  pn: string,
  isHex?: boolean
): asserts param is string {
  if (typeof param !== "string") {
    throw new Error(`${getParamName(pn)} is not a string`);
  }
  if (isHex) {
    if (param.match(/[^0-9a-fA-F]/)) {
      throw new Error(`${getParamName(pn)} must be hexadecimal`);
    }
    if (param.length !== 3 && param.length !== 6 && param.length !== 8) {
      throw new Error(
        `${getParamName(pn)} must be 3, 6 or 8 characters long (with alpha)`
      );
    }
  }
}

export function guardIsNotArray(
  param: Array<unknown> | undefined,
  pn: string
): asserts param is Array<unknown> {
  if (!Array.isArray(param)) {
    throw new Error(`${getParamName(pn)} is not an array`);
  }
  if (param.length === 0) {
    throw new Error(`${getParamName(pn)} is empty`);
  }
}

export function guardIsNotBool(
  param: unknown,
  pn: string
): asserts param is boolean {
  if (typeof param !== "boolean") {
    throw new Error(`${getParamName(pn)} is not a boolean`);
  }
}
