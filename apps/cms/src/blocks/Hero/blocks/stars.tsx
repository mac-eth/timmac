import { lexicalEditor, ParagraphFeature } from "@payloadcms/richtext-lexical";
import { Block } from "payload/types";

export const StarReviewBlock: Block = {
  slug: "starReview",
  fields: [
    {
      name: "text",
      type: "richText",
      label: "Text",
      required: true,
      editor: lexicalEditor({
        features: [ParagraphFeature()],
      }),
    },
    {
      name: "stars",
      type: "number",
      label: "Stars",
      required: true,
      min: 1,
      max: 5,
      defaultValue: 5,
    },
  ],
};
