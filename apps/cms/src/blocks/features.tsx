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
    visibleFields: ["titleText", "features", "image"],
  },
]);

export const FeaturesBlock: Block = {
  slug: "features",
  fields: [
    HideField,
    StyleField({ styles }),
    ColourProfileField,
    {
      name: "titleText",
      label: "Title Text",
      type: "text",
      required: true,
      admin: {
        condition: (data, siblingData) =>
          checkIsVisible(styles, siblingData, "titleText"),
      },
    },
    {
      name: "features",
      label: "Features",
      type: "array",
      minRows: 1,
      maxRows: 5,
      admin: {
        condition: (data, siblingData) =>
          checkIsVisible(styles, siblingData, "features"),
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          label: "Description",
          type: "richText",
          required: true,
        },
        {
          type: "upload",
          name: "icon",
          label: "Icon",
          relationTo: "media",
          required: true,
        },
      ],
    },
    ImageField({
      overrides: {
        admin: {
          condition: (data, siblingData) =>
            checkIsVisible(styles, siblingData, "image"),
        },
      },
    }),
  ],
};
