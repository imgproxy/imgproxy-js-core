import { assertType, describe, expect, expectTypeOf, it } from "vitest";
import { test, build } from "../../src/options/videoThumbnailAnimation";
import { VideoThumbnailAnimation } from "../../src/types/videoThumbnailAnimation";
import { Options } from "../../src/types";

describe("videoThumbnailAnimation", () => {
  describe("test", () => {
    it("should return true if video_thumbnail_animation option is defined", () => {
      const vta: VideoThumbnailAnimation = {
        step: 1,
        delay: 100,
        frames: 10,
        frame_width: 320,
        frame_height: 240,
      };
      expect(test({ video_thumbnail_animation: vta })).toEqual(true);
    });

    it("should return true if vta option is defined", () => {
      const vta: VideoThumbnailAnimation = {
        step: 2,
        delay: 200,
        frames: 5,
        frame_width: 320,
        frame_height: 240,
      };
      expect(test({ vta })).toEqual(true);
    });

    it("should return false if video_thumbnail_animation option is undefined", () => {
      expect(test({})).toEqual(false);
    });
  });

  describe("build", () => {
    it("should throw an error if video_thumbnail_animation option is undefined", () => {
      expect(() => build({})).toThrow(
        "video_thumbnail_animation option is undefined"
      );
    });

    it("should build basic vta option with required parameters", () => {
      const vta: VideoThumbnailAnimation = {
        step: 1.5,
        delay: 100,
        frames: 10,
        frame_width: 320,
        frame_height: 240,
      };
      expect(build({ video_thumbnail_animation: vta })).toEqual(
        "vta:1.5:100:10:320:240"
      );
    });

    it("should build vta option with extend_frame as boolean", () => {
      const vta: VideoThumbnailAnimation = {
        step: 1,
        delay: 100,
        frames: 10,
        frame_width: 320,
        frame_height: 240,
        extend_frame: true,
      };
      expect(build({ vta })).toEqual("vta:1:100:10:320:240:t");
    });

    it("should build vta option with extend_frame as number", () => {
      const vta: VideoThumbnailAnimation = {
        step: 1,
        delay: 100,
        frames: 10,
        frame_width: 320,
        frame_height: 240,
        extend_frame: 1,
      };
      expect(build({ vta })).toEqual("vta:1:100:10:320:240:t");
    });

    it("should build vta option with extend_frame as string", () => {
      const vta: VideoThumbnailAnimation = {
        step: 1,
        delay: 100,
        frames: 10,
        frame_width: 320,
        frame_height: 240,
        extend_frame: "t",
      };
      expect(build({ vta })).toEqual("vta:1:100:10:320:240:t");
    });

    it("should build vta option with trim flag", () => {
      const vta: VideoThumbnailAnimation = {
        step: 1,
        delay: 100,
        frames: 10,
        frame_width: 320,
        frame_height: 240,
        trim: true,
      };
      expect(build({ vta })).toEqual("vta:1:100:10:320:240::t");
    });

    it("should build vta option with fill flag", () => {
      const vta: VideoThumbnailAnimation = {
        step: 1,
        delay: 100,
        frames: 10,
        frame_width: 320,
        frame_height: 240,
        fill: true,
      };
      expect(build({ vta })).toEqual("vta:1:100:10:320:240:::t");
    });

    it("should build vta option with focus coordinates", () => {
      const vta: VideoThumbnailAnimation = {
        step: 1,
        delay: 100,
        frames: 10,
        frame_width: 320,
        frame_height: 240,
        fill: true,
        focus_x: 0.3,
        focus_y: 0.7,
      };
      expect(build({ vta })).toEqual("vta:1:100:10:320:240:::t:0.3:0.7");
    });

    it("should build vta option with all parameters", () => {
      const vta: VideoThumbnailAnimation = {
        step: -1,
        delay: 200,
        frames: 15,
        frame_width: 640,
        frame_height: 480,
        extend_frame: true,
        trim: true,
        fill: true,
        focus_x: 0.5,
        focus_y: 0.5,
      };
      expect(build({ video_thumbnail_animation: vta })).toEqual(
        "vta:-1:200:15:640:480:t:t:t:0.5:0.5"
      );
    });
  });
});

describe("Check `video_thumbnail_animation` type declarations", () => {
  it("video_thumbnail_animation option should have correct type", () => {
    expectTypeOf(build).parameter(0).toEqualTypeOf<{
      video_thumbnail_animation?: VideoThumbnailAnimation;
      vta?: VideoThumbnailAnimation;
    }>();
    expectTypeOf(build).returns.toEqualTypeOf<string>();
  });

  it("check TS type declaration", () => {
    assertType<Options>({
      video_thumbnail_animation: {
        step: 1,
        delay: 100,
        frames: 10,
        frame_width: 320,
        frame_height: 240,
      },
    });

    assertType<Options>({
      vta: {
        step: 1,
        delay: 100,
        frames: 10,
        frame_width: 320,
        frame_height: 240,
        extend_frame: true,
        trim: true,
        fill: true,
        focus_x: 0.5,
        focus_y: 0.5,
      },
    });
  });
});
