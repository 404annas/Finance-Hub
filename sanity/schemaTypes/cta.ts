export const cta = {
  name: "cta",
  type: "document",
  title: "Call to Action Section",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "button",
      type: "object",
      title: "Button",
      fields: [
        {
          name: "text",
          type: "string",
          title: "Button Text",
        },
        {
          name: "link",
          type: "url",
          title: "Button Link",
        },
      ],
    },
  ],
};
