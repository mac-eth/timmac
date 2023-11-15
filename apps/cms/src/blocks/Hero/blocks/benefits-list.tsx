import { lexicalEditor, ParagraphFeature } from "@payloadcms/richtext-lexical";
import { Block } from "payload/types";

export const BenefitsListBlock: Block = {
  slug: "benefitsListBlock",
  fields: [
    {
      name: "icon",
      type: "select",
      label: "Icon",
      defaultValue: "Check in Circle",
      options: ["Check in Circle"],
    },
    {
      name: "benefits",
      type: "array",
      label: "Benefits",
      maxRows: 5,
      minRows: 1,
      fields: [
        {
          type: "text",
          name: "benefit",
          label: "Benefit",
          required: true,
        },
      ],
    },
  ],
};
