export const normalizeBoolean = (value: 1 | string | boolean): string => {
  if (value === true || value === "t" || value === 1) {
    return "t";
  }
  return "f";
};

export function guardIsUndef<T>(
  param: T | undefined,
  paramName: string,
  addInfo?: string
): asserts param is T {
  if (param === undefined) {
    throw new Error(
      `${paramName}${paramName.includes(".") ? "" : " option"} is undefined${
        addInfo ? `. ${addInfo}` : ""
      }`
    );
  }
}

interface OneNum {
  type: "max" | "min" | "equal" | "int";
  value: number;
}

interface TwoNums {
  type: "minmax";
  value: number[];
}

interface AddParams {
  addInfo?: string;
  addParam?: OneNum | TwoNums;
}

function getMinNumText(
  paramName: string,
  value: number,
  addInfo?: string
): string {
  return `${paramName}${
    paramName.includes(".") ? "" : " option"
  } value can't be less then ${value}${addInfo ? `. ${addInfo}` : ""}`;
}

function getMaxNumText(
  paramName: string,
  value: number,
  addInfo?: string
): string {
  return `${paramName}${
    paramName.includes(".") ? "" : " option"
  } value can't be more than ${value}${addInfo ? `. ${addInfo}` : ""}`;
}

export function guardIsNotNum(
  param: number | undefined,
  paramName: string,
  additional?: AddParams
): asserts param is number {
  if (typeof param !== "number") {
    throw new Error(
      `${paramName}${paramName.includes(".") ? "" : " option"} is not a number${
        additional?.addInfo ? `. ${additional?.addInfo}` : ""
      }`
    );
  }

  if (additional?.addParam) {
    const addParam = additional.addParam;
    if (addParam.type === "min" && param < addParam.value) {
      throw new Error(
        getMinNumText(paramName, addParam.value, additional?.addInfo)
      );
    }

    if (addParam.type === "minmax") {
      if (param < addParam.value[0]) {
        throw new Error(
          getMinNumText(paramName, addParam.value[0], additional?.addInfo)
        );
      }

      if (param > addParam.value[1]) {
        throw new Error(
          getMaxNumText(paramName, addParam.value[1], additional?.addInfo)
        );
      }
    }
  }
}
