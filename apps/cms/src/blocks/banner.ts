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

const checkIsVisble = (data: Partial<any>, field: string) => {
  console.log("DATA", data);
  // if (!data.banner) return false;
  // if (data.banner.hidden === true) return false;
  // const bannerType = bannerStyles.find((type) => type.value === data.hero.type);
  // if (!bannerType) return false;
  // if (!bannerType[field]) return false;
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
        condition: (data) => checkIsVisble(data, "mainText"),
      },
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
