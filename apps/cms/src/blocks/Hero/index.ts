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

interface VisibleFields {
  mainText?: boolean;
  subText?: boolean;
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
      subText: true,
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
      name: "mainText",
      label: "Main Text",
      type: "richText",
      editor: lexicalEditor({
        features: [
          HeadingFeature({
            enabledHeadingSizes: ["h1", "h2", "h3", "h4", "h5", "h6"],
          }),
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
      name: "subText",
      label: "Sub Text",
      type: "richText",
      editor: lexicalEditor({
        features: [
          HeadingFeature({
            enabledHeadingSizes: ["h1", "h2", "h3", "h4", "h5", "h6"],
          }),
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
      name: "image",
      label: "Image",
      type: "relationship",
      relationTo: "media",
    },
  ],
};
