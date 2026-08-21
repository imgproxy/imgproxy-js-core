---
"@imgproxy/imgproxy-js-core": minor
---

Add support for [video_thumbnail_keyframes](https://docs.imgproxy.net/usage/processing#video-thumbnail-keyframes) option (imgproxy Pro). When set to `1`, `t` or `true`, imgproxy uses the latest keyframe before the requested second for video thumbnail generation, redefining the `IMGPROXY_VIDEO_THUMBNAIL_KEYFRAMES` config. The option is supported in processing and image info URLs. The short form `vtk` is also supported.
