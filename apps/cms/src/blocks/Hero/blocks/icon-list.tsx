import { lexicalEditor, ParagraphFeature } from "@payloadcms/richtext-lexical";
import { Block } from "payload/types";

export const IconListBlock: Block = {
  slug: "iconListBlock",
  fields: [
    {
      name: "icon",
      type: "select",
      label: "Icon",
      defaultValue: "Check in Circle",
      options: ["Check in Circle"],
    },
    {
      name: "features",
      type: "array",
      label: "Features",
      maxRows: 5,
      minRows: 1,
      fields: [
        {
          type: "text",
          name: "feature",
          label: "Feature",
          required: true,
        },
      ],
    },
  ],
};
