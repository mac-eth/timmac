import {
  BoldTextFeature,
  ItalicTextFeature,
  lexicalEditor,
  ParagraphFeature,
  StrikethroughTextFeature,
  UnderlineTextFeature,
} from "@payloadcms/richtext-lexical";
import { Field } from "payload/types";

import linkGroup from "../../linkGroup";

interface BannerStyle {
  label: string;
  value: string;
}

const bannerStyles: BannerStyle[] = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "Scrolling",
    value: "scrolling",
  },
];

export const banner: Field = {
  name: "banner",
  label: "Banner",
  type: "group",
  fields: [
    {
      name: "showBanner",
      label: "Show Banner",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "style",
      label: "Style",
      type: "select",
      defaultValue: "default",
      options: bannerStyles.map((style) => ({
        label: style.label,
        value: style.value,
      })),
    },
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
    },
    linkGroup({
      overrides: {
        name: "button",
        label: "Button",
        maxRows: 1,
      },
    }),
  ],
};
