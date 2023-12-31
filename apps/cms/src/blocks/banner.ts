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
import linkGroup from "../fields/linkGroup";
import { checkIsVisible, createStyles, StyleField } from "../fields/styleField";

const styles = createStyles([
  {
    label: "Default",
    value: "default",
    visibleFields: ["mainText", "button"],
  },
  {
    label: "Scrolling",
    value: "scrolling",
    visibleFields: ["mainText"],
  },
]);

export const BannerBlock: Block = {
  slug: "banner",
  fields: [
    HideField,
    StyleField({ styles }),
    ColourProfileField,
    {
      name: "mainText",
      label: "Main Text",
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
          checkIsVisible(styles, siblingData, "mainText"),
      },
    },
    linkGroup({
      overrides: {
        name: "button",
        label: "Button",
        maxRows: 1,
        admin: {
          condition: (data, siblingData) =>
            checkIsVisible(styles, siblingData, "button"),
        },
      },
    }),
  ],
};
