import { describe, expect, it } from "vitest";
import generateUrl from "./generateImageInfoUrl";

describe("generateImageInfoUrl", () => {
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

  it("should return '/info/bh:0:5/cb:empty/exif:t/f:t/plain/https://example.com/host/pic.png' with cachebuster, exif, format, blurhash options", () => {
    expect(
      generateUrl({ value: "https://example.com/host/pic.png", type: "plain" })
    ).toEqual("/plain/https://example.com/host/pic.png");
  });

  it("should return plain url with format", () => {
    expect(
      generateUrl(
        {
          value: "https://example.com/host/pic.png",
          type: "plain",
        },
        {
          cachebuster: "empty",
          exif: 1,
          format: "t",
          blurhash: { x_components: 0, y_components: 5 },
        }
      )
    ).toEqual(
      "/bh:0:5/cb:empty/exif:t/f:t/plain/https://example.com/host/pic.png"
    );
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
          average: { average: 1, ignore_transparent: "f" },
          detect_objects: true,
          dominant_colors: { dominant_colors: 1, build_missed: 1 },
          iptc: "t",
          palette: 6,
          expires: 1729409825,
          size: 1,
          preset: ["test", "test2"],
        }
      )
    ).toEqual(
      "/avg:t:f/do:t/dc:t:t/exp:1729409825/iptc:t/p:6/pr:test:test2/s:t/plain/https://example.com/host/pic.png"
    );
  });
});
