export const hero = {
  name: "hero",
  type: "document",
  title: "Hero Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Main Heading",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "primaryButton",
      type: "object",
      title: "Primary Button",
      fields: [
        {
          name: "text",
          type: "string",
          title: "Button Text",
        },
        {
          name: "url",
          type: "url",
          title: "Button URL",
        },
      ],
    },
    {
      name: "secondaryButton",
      type: "object",
      title: "Secondary Button",
      fields: [
        {
          name: "text",
          type: "string",
          title: "Button Text",
        },
        {
          name: "url",
          type: "url",
          title: "Button URL",
        },
      ],
    },
  ],
};
