import { Field } from "payload/types";

import deepMerge from "../utilities/deepMerge";

type VisibleFields = string[];

interface Style<VF extends VisibleFields> {
  label: string;
  value: string;
  visibleFields?: VF;
}

export function createStyles<VF extends VisibleFields>(
  styles: Style<VF>[],
): Style<VF>[] {
  return styles;
}

export function checkIsVisible<VF extends VisibleFields>(
  styles: Style<VF>[],
  siblingData: { style?: string },
  field: string,
): boolean {
  const type = styles.find((style) => style.value === siblingData.style);
  if (!type || !type.visibleFields) {
    return false;
  }
  return type.visibleFields.includes(field);
}

type StyleFieldType = (options?: { styles: Style<VisibleFields>[] }) => Field;

export const StyleField: StyleFieldType = ({ styles }) => {
  const styleField: Field = {
    name: "style",
    label: "Style",
    type: "select",
    defaultValue: "default",
    options: styles.map((style) => ({
      label: style.label,
      value: style.value,
    })),
  };

  return styleField;
};
