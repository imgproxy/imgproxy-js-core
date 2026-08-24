---
"@imgproxy/imgproxy-js-core": minor
---

Make the `Gravity` union exclusive: fields belonging to one gravity variant are now typed as forbidden (`?: never`) on the others, so mixing fields from different variants (such as `{ type: "sm", x_offset: 0 }` or `{ type: "no", x: 0.5 }`) is a compile-time error for TypeScript users instead of only a runtime one. Runtime behavior is unchanged. TypeScript code that previously compiled while passing such invalid combinations will now fail to compile — the same combinations have always thrown at runtime.
