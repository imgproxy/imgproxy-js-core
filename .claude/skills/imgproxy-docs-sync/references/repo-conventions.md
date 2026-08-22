# Repo conventions for option modules

Everything here is derived from the existing code. When in doubt, copy the nearest neighbour:
`src/options/blurAreas.ts` (nested object), `src/options/gradient.ts` (optional positional args),
`src/optionsImageInfo/exif.ts` (image-info option with sub-flags).

## Where a new option goes

| Docs section                   | Option module                         | Types                               | Test                                         |
| ------------------------------ | ------------------------------------- | ----------------------------------- | -------------------------------------------- |
| Usage → Processing             | `src/options/<camelCase>.ts`          | `src/types/<camelCase>.ts`          | `tests/optionsBasic/<camelCase>.test.ts`     |
| Usage → Getting the image info | `src/optionsImageInfo/<camelCase>.ts` | `src/typesImageInfo/<camelCase>.ts` | `tests/optionsImageInfo/<camelCase>.test.ts` |
| Valid for both URL kinds       | `src/optionsShared/<camelCase>.ts`    | `src/typesShared/<camelCase>.ts`    | `tests/optionsShared/<camelCase>.test.ts`    |

File name is the camelCase form of the docs' snake_case option name (`blur_areas` → `blurAreas`,
`max_src_resolution` → `maxSrcResolution`). Method-level behaviour (`generateUrl` / `generateImageInfoUrl`
themselves, e.g. the `filename` URL segment) is tested next to the source in `src/methods/*.test.ts`,
not under `tests/`.

## Wiring (four edits, all alphabetical)

1. `src/options/index.ts` — `export * as progressiveBlur from "./progressiveBlur";`
   Shared modules are re-exported here too, with a `../optionsShared/` path.
   **Order matters at runtime**: `generateUrl` iterates `Object.values(optionModules)`, so this file's
   order is the order the options appear in the URL. Insert alphabetically like everything else.
2. `src/types/index.ts` — `import type { ProgressiveBlurOptionsPartial } from "./progressiveBlur";`
3. `src/types/index.ts` — add `ProgressiveBlurOptionsPartial &` to the `Options` intersection, in the
   same alphabetical position. **Missing this is the classic bug**: the option builds fine but is a
   type error for consumers.
4. The image-info equivalents are `src/optionsImageInfo/index.ts` and `src/typesImageInfo/index.ts`.

`src/index.ts` exports only `generateUrl`, `generateImageInfoUrl`, `INFO_PREFIX` — it never needs
touching for a new option.

## Option module shape

Every module exports exactly `test` and `build`.

```ts
import type {
  ProgressiveBlur,
  ProgressiveBlurOptionsPartial,
} from "../types/progressiveBlur";
import {
  guardIsUndef,
  guardIsNotNum,
  guardIsNotStr,
  guardIsValidVal,
} from "../utils";

const correctDirection = { down: true, up: true, right: true, left: true };

const getOpt = (
  options: ProgressiveBlurOptionsPartial
): ProgressiveBlur | undefined => options.progressive_blur ?? options.pbl;

const test = (options: ProgressiveBlurOptionsPartial): boolean =>
  Boolean(getOpt(options));

const build = (options: ProgressiveBlurOptionsPartial): string => {
  const opts = getOpt(options);
  guardIsUndef(opts, "progressive_blur");
  const { sigma, direction, start, stop } = opts;

  guardIsNotNum(sigma, "progressive_blur.sigma", { addParam: { min: 0 } });
  // …validate each optional arg only when it is not undefined

  return `pbl:${sigma}:${dir}:${from}:${to}`.replace(/:+$/, "");
};

export { test, build };
```

- `build` takes `(options, settings?)` — only add the second parameter if the option actually reads
  `Settings` (see `src/optionsShared/preset.ts` usage in `generateUrl`).
- The returned string is the URL segment **without** a leading slash; `generateUrl` adds it.
- Use the short alias as the emitted prefix (`pbl:`), never the long name.

## Optional positional arguments — the rule that bit us

Fixed in c8eb5b7 (`gradient` dropped `start: 0` / `stop: 0` / `direction: 0`). Follow it exactly:

- Gate validation on `!== undefined`, **never** on truthiness. `0` and `""` are meaningful values.
- Default with `??`, never `||`. Same reason.
- Fill omitted trailing args with `""` and strip the trailing colons once, at the end:
  `` `gr:${op}:${c}:${dir}:${from}:${to}`.replace(/:+$/, "") ``
  That collapses _trailing_ empties only, so an explicit `0` in the middle survives.
- `getOpt` may use `??` between the long and short key (`blurAreas.ts`); older modules use `||`.
  Prefer `??` in new code.

## Types module shape

One interface per shape, plus the `*OptionsPartial` with **both** keys optional:

```ts
/**
 * *Progressive blur*. **PRO feature**
 *
 * @param {number} sigma - Defines the size of the mask …
 * @param {ProgressiveBlurDirection} [direction] - …
 *
 * @example
 * {progressive_blur: {sigma: 5, direction: "up"}}
 *
 * @see {@link https://docs.imgproxy.net/usage/processing#progressive-blur | progressive blur option imgproxy docs}
 */
interface ProgressiveBlur { … }

/**
 * *Progressive blur option*. **PRO feature**
 *
 * To describe the Progressive blur option, you can use the keyword `progressive_blur` or `pbl`.
 *
 * @see https://docs.imgproxy.net/usage/processing#progressive-blur
 */
interface ProgressiveBlurOptionsPartial {
  progressive_blur?: ProgressiveBlur;
  pbl?: ProgressiveBlur;
}

export { ProgressiveBlur, ProgressiveBlurOptionsPartial };
```

- Mark PRO options with `**PRO feature**` in every JSDoc block of the file.
- Always carry a `@see` link to the exact docs anchor — that link is how the next sync verifies us.
- Export with a plain `export { … }` at the bottom; the file has no default export.
- A scalar option (e.g. `blur: number`) needs no wrapper interface — just the `*OptionsPartial`.

## Guards (`src/utils.ts`)

| Guard                                                                            | Use for                                        | Error text it produces                                                                                                |
| -------------------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `guardIsUndef(v, "name", addInfo?)`                                              | required presence                              | `name option is undefined`                                                                                            |
| `guardIsNotNum(v, "name", { addParam: { min, max, isInt, minEqual }, addInfo })` | numbers + ranges                               | `name option is not a number` / `… value can't be less than 0` / `… can't be more than 1` / `… is must be an integer` |
| `guardIsNotStr(v, "name", isHex?)`                                               | strings; `isHex` also enforces 3/6/8 hex chars | `name option is not a string` / `must be hexadecimal`                                                                 |
| `guardIsValidVal(recordOfTrue, v, "name")`                                       | enum from a `{ a: true, b: true }` map         | `name option is invalid. Valid values are: a, b`                                                                      |
| `guardIsOneOf(["a","b"], v, "name")`                                             | enum from an array                             | same shape                                                                                                            |
| `guardIsNotArray(v, "name")`                                                     | arrays; also rejects empty                     | `name option is not an array` / `… is empty`                                                                          |
| `guardIsNotBool(v, "name")`                                                      | booleans                                       | `name option is not a boolean`                                                                                        |
| `normalizeBoolean(v)`                                                            | `1/0/"t"/"f"/true/false` → `"t"` / `"f"`       | —                                                                                                                     |

A dotted `paramName` (`"blur_areas.sigma"`) suppresses the ` option` suffix in the message — that's
why nested fields are named with dots and top-level ones aren't. For array elements, index the name:
`` `blur_areas.areas[${index}].left` ``.

Note the quirk in `guardIsNotNum`: `max` is only checked when `min` is also given. If an option has an
upper bound only, pass `min` too (e.g. `{ min: 0, max: 1 }`).

## Tests

`vitest`, one file per option, mirroring `tests/optionsBasic/blurAreas.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { test, build } from "../../src/options/progressiveBlur";

describe("progressiveBlur", () => {
  describe("test", () => {
    // true for the long key, true for the short key, false for {}
  });

  describe("build", () => {
    // throws when the option is undefined
    // one throw case per guard, asserting the exact message
    // happy paths: minimal args, all args, and every optional arg explicitly set to 0
  });
});
```

- Assert exact error strings with `toThrow("…")` — they are part of the public contract.
- Cover invalid input a vanilla-JS consumer could pass, with `// @ts-expect-error: Let's ignore an error (check for users with vanilla js).` above the line.
- Always include the `0`-valued optional-arg case for anything with optional positional args.
- Run with `npm run test -- --run` (plain `npm run test` starts vitest in watch mode).

## README

`README.md` documents methods, URL kinds, and settings — **not** individual options. Update it only
when the change touches that surface (as the `filename` support in 887dd39 did). A new processing
option needs no README edit.
