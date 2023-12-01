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

import { ColourProfileField } from "../../fields/colourProfile";
import { HideField } from "../../fields/hideField";
import {
  checkIsVisible,
  createStyles,
  StyleField,
} from "../../fields/styleField"; 
import { BenefitsListBlock } from "./blocks/benefits-list";
import { StarReviewBlock } from "./blocks/stars";

const styles = createStyles([
  {
    label: "Default",
    value: "default",
    visibleFields: ["mainText", "secondaryText", "image", "zoneOne", "zoneTwo"],
  },
]);

export const HeroBlock: Block = {
  slug: "hero",
  fields: [
    HideField,
    StyleField({ styles }),
    ColourProfileField,
    {
      name: "zoneOne",
      label: "Zone One Block",
      type: "blocks",
      maxRows: 1,
      minRows: 0,
      blocks: [StarReviewBlock],
      admin: {
        condition: (data, siblingData) =>
          checkIsVisible(styles, siblingData, "zoneOne"),
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
        condition: (data, siblingData) =>
          checkIsVisible(styles, siblingData, "zoneTwo"),
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
          checkIsVisible(styles, siblingData, "mainText"),
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
          checkIsVisible(styles, siblingData, "secondaryText"),
      },
    },
    {
      name: "image",
      label: "Image",
      type: "relationship",
      relationTo: "media",
      admin: {
        condition: (data, siblingData) =>
          checkIsVisible(styles, siblingData, "image"),
      },
    },
  ],
};
