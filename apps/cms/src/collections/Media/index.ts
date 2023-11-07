import path from "path";
import { lexicalEditor, LinkFeature } from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload/types";

import { tenant } from "../../fields/tenant";

export const Media: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "alt",
  },
  fields: [
    {
      name: "alt",
      required: true,
      type: "text",
    },
    {
      name: "caption",
      editor: lexicalEditor({
        features: () => [LinkFeature({})],
      }),
      type: "richText",
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media",
    },
    tenant,
  ],
  slug: "media",
  upload: {
    staticURL: "/media",
    staticDir: "media",
    disableLocalStorage: true,
    mimeTypes: ["image/*"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
  },
};
