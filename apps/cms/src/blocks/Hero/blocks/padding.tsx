import { Block } from "payload/types";

export const PaddingBlock: Block = {
  slug: "padding",
  fields: [
    {
      name: "padding",
      type: "number",
      label: "Padding",
      required: true,
      min: 1,
      max: 12,
      defaultValue: 1,
    },
  ],
};
