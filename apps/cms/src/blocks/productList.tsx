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

const allFields = ["titleText", "products"];

const styles = createStyles([
  {
    label: "Default",
    value: "default",
    visibleFields: allFields,
  },
]);

export const ProductListBlock: Block = {
  slug: "product-list",
  fields: [
    HideField,
    StyleField({ styles }),
    ColourProfileField,
    {
      name: "titleText",
      label: "Title Text",
      type: "richText",
      editor: lexicalEditor({
        features: [
          ParagraphFeature(),
          BoldTextFeature(),
          ItalicTextFeature(),
          UnderlineTextFeature(),
          StrikethroughTextFeature(),
        ],
      }),
      admin: {
        condition: (data, siblingData) =>
          checkIsVisible(styles, siblingData, "titleText"),
      },
    },
    {
      name: "products",
      label: "Products",
      type: "array",
      minRows: 1,
      maxRows: 10,
      admin: {
        condition: (data, siblingData) =>
          checkIsVisible(styles, siblingData, "products"),
      },
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
        },
        {
          name: "price",
          label: "Price",
          type: "number",
          required: false,
        },
        {
          name: "link",
          label: "Link",
          type: "text",
          required: false,
        },
        {
          name: "mostPopular",
          label: "Most Popular",
          defaultValue: false,
          type: "checkbox",
          required: false,
        },
        ImageField(),
        {
          name: "includes",
          label: "Includes",
          type: "array",
          minRows: 1,
          maxRows: 10,
          required: false,
          fields: [
            {
              name: "amount",
              label: "Amount",
              type: "number",
              required: false,
            },
            {
              name: "description",
              label: "Description",
              type: "text",
              required: false,
            },
          ],
        },
      ],
    },
  ],
};
