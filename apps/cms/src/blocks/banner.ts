import {
  BoldTextFeature,
  ItalicTextFeature,
  lexicalEditor,
  ParagraphFeature,
  StrikethroughTextFeature,
  UnderlineTextFeature,
} from "@payloadcms/richtext-lexical";
import { Block } from "payload/types";

import linkGroup from "../fields/linkGroup";

interface VisibleFields {
  mainText?: boolean;
  button?: boolean;
}

interface BannerStyle {
  label: string;
  value: string;
  visibleFields?: VisibleFields;
}

const bannerStyles: BannerStyle[] = [
  {
    label: "Default",
    value: "default",
    visibleFields: {
      mainText: true,
      button: true,
    },
  },
  {
    label: "Scrolling",
    value: "scrolling",
    visibleFields: {
      mainText: true,
    },
  },
];

const checkIsVisble = (siblingData: Partial<any>, field: string) => {
  const bannerType = bannerStyles.find(
    (type) => type.value === siblingData.style,
  );
  if (!bannerType) return false;
  if (!bannerType.visibleFields[field]) return false;
  return true;
};

export const BannerBlock: Block = {
  slug: "banner",
  fields: [
    {
      name: "hide",
      label: "Hide",
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
      name: "colourProfile",
      label: "Colour Profile",
      type: "select",
      defaultValue: "profile1",
      options: [
        {
          label: "Profile 1",
          value: "profile1",
        },
        {
          label: "Profile 2",
          value: "profile2",
        },
      ],
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
      admin: {
        condition: (data, siblingData) =>
          checkIsVisble(siblingData, "mainText"),
      },
    },
    linkGroup({
      overrides: {
        name: "button",
        label: "Button",
        maxRows: 1,
        admin: {
          condition: (data, siblingData) =>
            checkIsVisble(siblingData, "button"),
        },
      },
    }),
  ],
};
