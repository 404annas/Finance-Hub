export const pricing = {
  name: "pricing",
  type: "document",
  title: "Pricing Section",
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
      name: "starter",
      type: "object",
      title: "Starter Plan",
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
          name: "amount",
          type: "string",
          title: "Price",
        },
        {
          name: "buttonText",
          type: "string",
          title: "Button Text",
        },
        {
          name: "features",
          type: "array",
          title: "Features",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      name: "pro",
      type: "object",
      title: "Pro Plan",
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
          name: "amount",
          type: "string",
          title: "Price",
        },
        {
          name: "buttonText",
          type: "string",
          title: "Button Text",
        },
        {
          name: "features",
          type: "array",
          title: "Features",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      name: "enterprise",
      type: "object",
      title: "Enterprise Plan",
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
          name: "amount",
          type: "string",
          title: "Price",
        },
        {
          name: "buttonText",
          type: "string",
          title: "Button Text",
        },
        {
          name: "features",
          type: "array",
          title: "Features",
          of: [{ type: "string" }],
        },
      ],
    },
  ],
};
