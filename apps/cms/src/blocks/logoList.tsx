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
import { ImageField } from "../fields/imageField";
import linkGroup from "../fields/linkGroup";
import { checkIsVisible, createStyles, StyleField } from "../fields/styleField";

const styles = createStyles([
  {
    label: "Default",
    value: "default",
    visibleFields: ["tagLine", "logos"],
  },
]);

export const logoListBlock: Block = {
  slug: "logo-list",
  fields: [
    HideField,
    StyleField({ styles }),
    ColourProfileField,
    {
      name: "tagLine",
      label: "Tag Line",
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
          checkIsVisible(styles, siblingData, "tagLine"),
      },
    },
    {
      name: "logos",
      label: "Logos",
      type: "array",
      minRows: 1,
      maxRows: 100,
      admin: {
        condition: (data, siblingData) =>
          checkIsVisible(styles, siblingData, "logos"),
      },
      fields: [ImageField()],
    },
  ],
};
