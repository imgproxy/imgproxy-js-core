export const normalizeBoolean = (value: 1 | string | boolean): string => {
  if (value === true || value === "t" || value === 1) {
    return "t";
  }
  return "f";
};

export function guardParamIsUndef<T>(
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
