import { Block } from "payload/types";

import { RichTextBlock } from "../richText";
import { IconListBlock } from "./blocks/icon-list";
import { PaddingBlock } from "./blocks/padding";
import { StarReviewBlock } from "./blocks/stars";

interface VisibleFields {
  mainContentSection?: boolean;
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
      mainContentSection: true,
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
      name: "mainContentSection",
      label: "Main Content Section Blocks",
      type: "blocks",
      blocks: [RichTextBlock, StarReviewBlock, IconListBlock, PaddingBlock],
      admin: {
        condition: (data, siblingData) =>
          checkIsVisble(siblingData, "mainContentSection"),
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
