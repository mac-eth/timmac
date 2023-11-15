import { TextField } from "payload/dist/fields/config/types";
import { Field as FieldType, RichTextField } from "payload/types";

import Cell from "./Cell";
import Field from "./Field";

export const validateHexColor = (value: string = ""): true | string => {
  return (
    value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/) !== null ||
    `Please give a valid hex color`
  );
};

type ColorPicker = (overrides?: Partial<TextField>) => FieldType;

export const colorField: ColorPicker = (overrides = {}) => {
  return {
    name: "colorField",
    type: "text",
    validate: validateHexColor,
    admin: {
      components: {
        Field,
        Cell,
      },
    },
    ...overrides,
  };
};

export default colorField;
