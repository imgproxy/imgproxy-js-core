import { assertType, describe, expect, expectTypeOf, it } from "vitest";
import { test, build } from "../../src/options/videoThumbnailTile";
import { VideoThumbnailTile } from "../../src/types/videoThumbnailTile";
import { Options } from "../../src/types";

describe("videoThumbnailTile", () => {
  describe("test", () => {
    it("should return true if video_thumbnail_tile option is defined", () => {
      const vtt: VideoThumbnailTile = {
        step: 1,
        columns: 3,
        rows: 3,
        tile_width: 320,
        tile_height: 240,
      };
      expect(test({ video_thumbnail_tile: vtt })).toEqual(true);
    });

    it("should return true if vtt option is defined", () => {
      const vtt: VideoThumbnailTile = {
        step: 2,
        columns: 4,
        rows: 3,
        tile_width: 320,
        tile_height: 240,
      };
      expect(test({ vtt })).toEqual(true);
    });

    it("should return false if video_thumbnail_tile option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if video_thumbnail_tile option is undefined", () => {
      expect(() => build({})).toThrow(
        "video_thumbnail_tile option is undefined"
      );
    });

    it("should build basic vtt option with required parameters", () => {
      const vtt: VideoThumbnailTile = {
        step: 1.5,
        columns: 3,
        rows: 3,
        tile_width: 320,
        tile_height: 240,
      };
      expect(build({ video_thumbnail_tile: vtt })).toEqual(
        "vtt:1.5:3:3:320:240"
      );
    });

    it("should build vtt option with extend_tile as boolean", () => {
      const vtt: VideoThumbnailTile = {
        step: 1,
        columns: 3,
        rows: 3,
        tile_width: 320,
        tile_height: 240,
        extend_tile: true,
      };
      expect(build({ vtt })).toEqual("vtt:1:3:3:320:240:t");
    });

    it("should build vtt option with extend_tile as number", () => {
      const vtt: VideoThumbnailTile = {
        step: 1,
        columns: 3,
        rows: 3,
        tile_width: 320,
        tile_height: 240,
        extend_tile: 1,
      };
      expect(build({ vtt })).toEqual("vtt:1:3:3:320:240:t");
    });

    it("should build vtt option with trim flag", () => {
      const vtt: VideoThumbnailTile = {
        step: 1,
        columns: 3,
        rows: 3,
        tile_width: 320,
        tile_height: 240,
        trim: true,
      };
      expect(build({ vtt })).toEqual("vtt:1:3:3:320:240::t");
    });

    it("should build vtt option with fill flag", () => {
      const vtt: VideoThumbnailTile = {
        step: 1,
        columns: 3,
        rows: 3,
        tile_width: 320,
        tile_height: 240,
        fill: true,
      };
      expect(build({ vtt })).toEqual("vtt:1:3:3:320:240:::t");
    });

    it("should build vtt option with focus coordinates", () => {
      const vtt: VideoThumbnailTile = {
        step: 1,
        columns: 3,
        rows: 3,
        tile_width: 320,
        tile_height: 240,
        fill: true,
        focus_x: 0.3,
        focus_y: 0.7,
      };
      expect(build({ vtt })).toEqual("vtt:1:3:3:320:240:::t:0.3:0.7");
    });

    it("should build vtt option with all parameters", () => {
      const vtt: VideoThumbnailTile = {
        step: -1,
        columns: 4,
        rows: 3,
        tile_width: 640,
        tile_height: 480,
        extend_tile: true,
        trim: true,
        fill: true,
        focus_x: 0.5,
        focus_y: 0.5,
      };
      expect(build({ video_thumbnail_tile: vtt })).toEqual(
        "vtt:-1:4:3:640:480:t:t:t:0.5:0.5"
      );
    });
  });
});

describe("Check `video_thumbnail_tile` type declarations", () => {
  it("video_thumbnail_tile option should have correct type", () => {
    expectTypeOf(build).parameter(0).toEqualTypeOf<{
      video_thumbnail_tile?: VideoThumbnailTile;
      vtt?: VideoThumbnailTile;
    }>();
    expectTypeOf(build).returns.toEqualTypeOf<string>();
  });

  it("check TS type declaration", () => {
    assertType<Options>({
      video_thumbnail_tile: {
        step: 1,
        columns: 3,
        rows: 3,
        tile_width: 320,
        tile_height: 240,
      },
    });

    assertType<Options>({
      vtt: {
        step: 1,
        columns: 3,
        rows: 3,
        tile_width: 320,
        tile_height: 240,
        extend_tile: true,
        trim: true,
        fill: true,
        focus_x: 0.5,
        focus_y: 0.5,
      },
    });
  });
});
