import { Field } from "payload/types";

import deepMerge from "../utilities/deepMerge";

type ImageFieldType = (options?: {
  overrides?: Record<string, unknown>;
}) => Field;

export const ImageField: ImageFieldType = ({ overrides = {} } = {}) => {
  const imageField: Field = {
    name: "image",
    label: "Image",
    type: "upload",
    relationTo: "media",
    required: false,
  };

  return deepMerge(imageField, overrides);
};
