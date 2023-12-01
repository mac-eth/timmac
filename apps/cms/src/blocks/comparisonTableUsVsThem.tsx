import {
  BoldTextFeature,
  ItalicTextFeature,
  lexicalEditor,
  ParagraphFeature,
  StrikethroughTextFeature,
  UnderlineTextFeature,
} from "@payloadcms/richtext-lexical";
import { Block, Field } from "payload/types";

import { ColourProfileField } from "../fields/colourProfile";
import { HideField } from "../fields/hideField";
import { ImageField } from "../fields/imageField";
import { checkIsVisible, createStyles, StyleField } from "../fields/styleField";

const styles = createStyles([
  {
    label: "Default",
    value: "default",
    visibleFields: ["titleText", "features", "image"],
  },
]);

export const ComparisonTableUsVsThemBlock: Block = {
  slug: "comparison-table",
  fields: [
    HideField,
    StyleField({ styles }),
    ColourProfileField,
    ImageField({ overrides: {
      name: "usImage",
      label: "Us Image"
    }}),
    {
      name: "themTitle",
      label: "Them Title",
      type: "text",
      required: true,
    },
    {
      name: "features",
      label: "Features",
      type: "array",
      minRows: 1,
      maxRows: 20,
      fields: [
        {
          name: "groups",
          label: "Group",
          type: "select",
          required: true,
          options: 
        },
        
      ],
    },
    }