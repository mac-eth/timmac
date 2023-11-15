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

export const RichTextBlock: Block = {
  slug: "richText",
  fields: [
    {
      name: "richText",
      label: "Rich Text",
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
    },
  ],
};
