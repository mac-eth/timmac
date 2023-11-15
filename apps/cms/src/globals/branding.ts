import { Field, GlobalConfig, GroupField } from "payload/types";

import { colorField } from "../fields/colourPicker";
import { createMultiTenantGlobal } from "./utilities/createMultiTenantGlobal";

interface ProfileFieldDefaultValues {
  textColour: string;
  backgroundColour: string;
  primaryColour: string;
  secondaryColour: string;
  accentColour: string;
}

type ProfileFieldType = (props: {
  defaultValues: ProfileFieldDefaultValues;
  canBeDisabled: boolean;
  overrides?: Partial<GroupField>;
}) => Field;

const ProfileField: ProfileFieldType = ({
  defaultValues,
  canBeDisabled,
  overrides = {},
}) => {
  return {
    name: "profile",
    type: "group",
    fields: [
      {
        type: "row",
        fields: [
          colorField({
            name: "textColour",
            label: "Text",
            defaultValue: () => defaultValues.textColour,
          }),
          colorField({
            name: "backgroundColour",
            label: "Background",
            defaultValue: () => defaultValues.backgroundColour,
          }),
          colorField({
            name: "primaryColour",
            label: "Primary",
            defaultValue: () => defaultValues.primaryColour,
          }),
          colorField({
            name: "secondaryColour",
            label: "Secondary",
            defaultValue: () => defaultValues.secondaryColour,
          }),
          colorField({
            name: "accentColour",
            label: "Accent",
            defaultValue: () => defaultValues.accentColour,
          }),
        ],
      },
    ],
    ...overrides,
  };
};

export const Branding: GlobalConfig = {
  slug: "branding",
  admin: {
    group: "Site Config",
  },
  endpoints: [
    {
      path: "/findByTenantSlug/:tenantSlug",
      method: "get",
      handler: async (req, res, next) => {
        const tenant = await req.payload.find({
          collection: "tenants",
          where: {
            slug: { equals: req.params.tenantSlug },
          },
        });

        if (!tenant.docs[0]) {
          res.status(404).send("Tenant not found");
          return;
        }

        const theme = await req.payload.find({
          collection: "branding-multi-tenant-collection",
          where: {
            and: [{ tenant: { equals: tenant.docs[0].id } }],
          },
        });

        if (theme.docs[0]) {
          res.status(200).send(theme.docs[0]);
        } else {
          res.status(404).send("Branding not found in tenant");
        }
      },
    },
  ],
  fields: [
    ProfileField({
      defaultValues: {
        textColour: "#FFFFFF",
        backgroundColour: "#333333",
        primaryColour: "#3369E8",
        secondaryColour: "#D32F2F",
        accentColour: "#FFC107",
      },
      canBeDisabled: false,
      overrides: {
        name: "profile1",
        label: "Profile 1",
      },
    }),
    ProfileField({
      defaultValues: {
        textColour: "#FFFFFF",
        backgroundColour: "#333333",
        primaryColour: "#3369E8",
        secondaryColour: "#D32F2F",
        accentColour: "#FFC107",
      },
      canBeDisabled: true,
      overrides: {
        name: "profile2",
        label: "Profile 2",
      },
    }),
  ],
};

export const [BrandingGlobal, BrandingGlobalMultiTenantCollection] =
  createMultiTenantGlobal(Branding);
