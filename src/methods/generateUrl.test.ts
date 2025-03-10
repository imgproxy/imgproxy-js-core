import { describe, expect, it } from "vitest";
import generateUrl from "./generateUrl";

describe("generateUrl", () => {
  it("should throw an error if url.value is undefined", () => {
    // @ts-expect-error: Let's ignore an error.
    expect(() => generateUrl({})).toThrow("url.value is undefined");
  });

  it("should throw an error if url.type is undefined", () => {
    // @ts-expect-error: Let's ignore an error.
    expect(() => generateUrl({ value: "test" })).toThrow(
      "url.type is undefined. Valid values are: plain, base64, encrypted"
    );
  });

  it("should throw an error if url.type is invalid", () => {
    // @ts-expect-error: Let's ignore an error.
    expect(() => generateUrl({ value: "test", type: "test" })).toThrow(
      "url.type is invalid. Valid values are: plain, base64, encrypted"
    );
  });

  it("should return plain url with no options", () => {
    expect(
      generateUrl({ value: "https://example.com/host/pic.png", type: "plain" })
    ).toEqual("/plain/https://example.com/host/pic.png");
  });

  it("should return base64 url with no options", () => {
    expect(
      generateUrl({
        value: "aHR0cHM6Ly9leGFtcGxlLmNvbS9pbWFnZS9waWMucG5n",
        type: "base64",
      })
    ).toEqual("/aHR0cHM6Ly9leGFtcGxlLmNvbS9pbWFnZS9waWMucG5n");
  });

  it("should return encrypted url with no options", () => {
    expect(
      generateUrl({
        value:
          "hLhDnxN9acjq3LDooARQ3t6OU1UwAG1IeXsM2b7qxOyMP4DF+GsbBdnG1K9B0+bz",
        type: "encrypted",
      })
    ).toEqual(
      "/enc/hLhDnxN9acjq3LDooARQ3t6OU1UwAG1IeXsM2b7qxOyMP4DF+GsbBdnG1K9B0+bz"
    );
  });

  it("should return plain url with options", () => {
    expect(
      generateUrl(
        { value: "https://example.com/host/pic.png", type: "plain" },
        {
          width: 150,
          height: 150,
          format: "webp",
          quality: 80,
          enlarge: "t",
          extend: {
            extend: 1,
            gravity: { type: "nowe", y_offset: 5 },
          },
          blur: 5,
          zoom: 1.5,
        }
      )
    ).toEqual(
      "/bl:5/el:t/ex:t:nowe::5/f:webp/h:150/q:80/w:150/z:1.5/plain/https://example.com/host/pic.png"
    );
  });

  it("should work with `onlyPresets` setting", () => {
    expect(
      generateUrl(
        { value: "https://example.com/host/pic.png", type: "plain" },
        {
          preset: ["preset1", "preset2"],
          width: 150,
          height: 150,
          format: "webp",
          quality: 80,
          enlarge: "t",
          extend: {
            extend: 1,
            gravity: { type: "nowe", y_offset: 5 },
          },
          blur: 5,
          zoom: 1.5,
        },
        { onlyPresets: true }
      )
    ).toEqual("/preset1:preset2/plain/https://example.com/host/pic.png");
  });
});
