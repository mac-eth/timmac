import { Field } from "payload/types";

export const ColourProfileField: Field = {
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
};
