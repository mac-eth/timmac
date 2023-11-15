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
  imageRow?: boolean;
}

interface BigBrandSocialProofStyle {
  label: string;
  value: string;
  visibleFields?: VisibleFields;
}

const socialProofStyles: BigBrandSocialProofStyle[] = [
  {
    label: "Default",
    value: "default",
    visibleFields: {
      mainText: true,
      imageRow: true,
    },
  },
];

const checkIsVisble = (siblingData: Partial<any>, field: string) => {
  const type = socialProofStyles.find(
    (type) => type.value === siblingData.style,
  );
  if (!type) return false;
  if (!type.visibleFields[field]) return false;
  return true;
};

export const bigBrandSocialProofBlock: Block = {
  slug: "big-brand-social-proof",
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
      options: socialProofStyles.map((style) => ({
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
    {
      name: "imageRow",
      label: "Image Row",
      type: "array",
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          type: "upload",
          name: "image",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
