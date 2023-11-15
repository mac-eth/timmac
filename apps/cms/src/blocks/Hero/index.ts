import {
  BoldTextFeature,
  HeadingFeature,
  ItalicTextFeature,
  lexicalEditor,
  ParagraphFeature,
  StrikethroughTextFeature,
  UnderlineTextFeature,
} from "@payloadcms/richtext-lexical";
import { Block } from "payload/types";

import { BenefitsListBlock } from "./blocks/benefits-list";
import { StarReviewBlock } from "./blocks/stars";

interface VisibleFields {
  mainText?: boolean;
  secondaryText?: boolean;
  image?: boolean;
  zoneOne?: boolean;
  zoneTwo?: boolean;
}

interface HeroStyle {
  label: string;
  value: string;
  visibleFields?: VisibleFields;
}

const heroStyles: HeroStyle[] = [
  {
    label: "Default",
    value: "default",
    visibleFields: {
      mainText: true,
      secondaryText: true,
      image: true,
      zoneOne: true,
      zoneTwo: true,
    },
  },
];

const checkIsVisble = (siblingData: Partial<any>, field: string) => {
  const bannerType = heroStyles.find(
    (type) => type.value === siblingData.style,
  );
  if (!bannerType) return false;
  if (!bannerType.visibleFields[field]) return false;
  return true;
};

export const HeroBlock: Block = {
  slug: "hero",
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
      options: heroStyles.map((style) => ({
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
      name: "zoneOne",
      label: "Zone One Block",
      type: "blocks",
      maxRows: 1,
      minRows: 0,
      blocks: [StarReviewBlock],
      admin: {
        condition: (data, siblingData) => checkIsVisble(siblingData, "zoneOne"),
      },
    },
    {
      name: "zoneTwo",
      label: "Zone Two Block",
      type: "blocks",
      maxRows: 1,
      minRows: 0,
      blocks: [BenefitsListBlock],
      admin: {
        condition: (data, siblingData) => checkIsVisble(siblingData, "zoneTwo"),
      },
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
    {
      name: "secondaryText",
      label: "Secondary Text",
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
          checkIsVisble(siblingData, "secondaryText"),
      },
    },
    {
      name: "image",
      label: "Image",
      type: "relationship",
      relationTo: "media",
      admin: {
        condition: (data, siblingData) => checkIsVisble(siblingData, "image"),
      },
    },
  ],
};
