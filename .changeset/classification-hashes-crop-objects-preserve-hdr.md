---
"@imgproxy/imgproxy-js-core": minor
---

Add support for five new options from the updated imgproxy Usage docs.

Image info options (`generateImageInfoUrl`):

- [classify](https://docs.imgproxy.net/usage/getting_info#classify) (`cl`) — `{classify: {top_k: 3}}` or `{cl: {top_k: 2, class_names: ["Bus", "Person"]}}`. When `top_k` is greater than zero, imgproxy classifies the image and returns the top K classes with the highest confidence scores. Class names are optional; if given, imgproxy classifies only those classes.
- [thumb_hash](https://docs.imgproxy.net/usage/getting_info#thumb-hash) (`th`) — `{thumb_hash: 1}`. Returns the image's ThumbHash, a compact placeholder representation of the image.
- [perceptual_hash](https://docs.imgproxy.net/usage/getting_info#perceptual-hash) (`phash`, `ph`) — `{perceptual_hash: 1}`. Returns the perceptual hash of the image, which can be used to find similar or duplicate images.

Processing options (`generateUrl`):

- [crop_objects](https://docs.imgproxy.net/usage/processing#crop-objects) (`c_obj`, imgproxy Pro) — `{crop_objects: {scale_factor: 1.2, class_names: ["face"]}}`. imgproxy detects objects of the provided classes and crops the image to fit all of them. `scale_factor` scales the crop area relative to the detected objects: `1.0` crops exactly to the objects, `1.2` adds 20% padding. Class names are optional; if omitted, imgproxy crops to all the detected objects.
- [preserve_hdr](https://docs.imgproxy.net/usage/processing#preserve-hdr) (`ph`) — `{preserve_hdr: 1}`. When set to `1`, `t` or `true`, a high bit image remains high bit; when set to `0`, `f` or `false`, it is downscaled to 8 bit. Overrides the `IMGPROXY_PRESERVE_HDR` config value.
