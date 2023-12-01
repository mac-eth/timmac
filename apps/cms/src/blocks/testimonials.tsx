import {
  BoldTextFeature,
  ItalicTextFeature,
  lexicalEditor,
  ParagraphFeature,
  StrikethroughTextFeature,
  UnderlineTextFeature,
} from "@payloadcms/richtext-lexical";
import { Block } from "payload/types";

import { ColourProfileField } from "../fields/colourProfile";
import { HideField } from "../fields/hideField";
import { ImageField } from "../fields/imageField";
import { checkIsVisible, createStyles, StyleField } from "../fields/styleField";

const styles = createStyles([
  {
    label: "Default",
    value: "default",
    visibleFields: ["testimonials"],
  },
]);

export const TestimonialBlock: Block = {
  slug: "testimonials",
  fields: [
    HideField,
    StyleField({ styles }),
    ColourProfileField,
    {
      name: "testimonials",
      label: "Testimonials",
      type: "array",
      minRows: 1,
      maxRows: 100,
      admin: {
        condition: (data, siblingData) =>
          checkIsVisible(styles, siblingData, "testimonials"),
      },
      fields: [
        ImageField(),
        {
          name: "title",
          label: "Title",
          type: "richText",
          required: true,
          editor: lexicalEditor({
            features: [
              ParagraphFeature(),
              BoldTextFeature(),
              ItalicTextFeature(),
              UnderlineTextFeature(),
              StrikethroughTextFeature(),
            ],
          }),
        },
        {
          name: "quote",
          label: "Quote",
          type: "richText",
          required: true,
          editor: lexicalEditor({
            features: [
              ParagraphFeature(),
              BoldTextFeature(),
              ItalicTextFeature(),
              UnderlineTextFeature(),
              StrikethroughTextFeature(),
            ],
          }),
        },
        {
          name: "author",
          label: "Author",
          type: "text",
          required: true,
        },
        {
          name: "stars",
          label: "Stars",
          type: "number",
          min: 1,
          max: 5,
          required: false,
        },
      ],
    },
  ],
};
