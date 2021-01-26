export default {
  name: "homeSlider",
  type: "document",
  title: "Home Slider",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
}
