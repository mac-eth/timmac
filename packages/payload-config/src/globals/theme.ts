import type { Field, GlobalConfig } from "payload/types";

import colourField from "../fields/colourPicker";
import { tenant } from "../fields/tenant";
import { tenantAdmins } from "./access/tenantAdmins";
import { tenants } from "./access/tenants";
import { createMultiTenantGlobal } from "./utilities/createMultiTenantGlobal";

const ThemeFields: Field[] = [
  colourField({
    name: "background",
    label: "Background",
    defaultValue: () => "#333333", // A dark gray, often used for backgrounds
  }),
  colourField({
    name: "foreground",
    label: "Foreground",
    defaultValue: () => "#F0F0F0", // A very light gray, common for foreground elements
  }),
  colourField({
    name: "primary",
    label: "Primary",
    defaultValue: () => "#3369E8", // A bright blue, good for primary buttons or elements
  }),
  colourField({
    name: "primaryForeground",
    label: "Primary Foreground",
    defaultValue: () => "#FFFFFF", // White, for text or icons on primary elements
  }),
  colourField({
    name: "secondary",
    label: "Secondary",
    defaultValue: () => "#D32F2F", // A muted red, suitable for secondary elements
  }),
  colourField({
    name: "secondaryForeground",
    label: "Secondary Foreground",
    defaultValue: () => "#F0F0F0", // A very light gray, for text or icons on secondary elements
  }),
  colourField({
    name: "muted",
    label: "Muted",
    defaultValue: () => "#9E9E9E", // A medium gray, used for muted elements
  }),
  colourField({
    name: "mutedForeground",
    label: "Muted Foreground",
    defaultValue: () => "#FFFFFF", // White, for text or icons on muted backgrounds
  }),
  colourField({
    name: "accent",
    label: "Accent",
    defaultValue: () => "#FFC107", // An amber color, for accentuating elements
  }),
  colourField({
    name: "accentForeground",
    label: "Accent Foreground",
    defaultValue: () => "#333333", // A dark gray, for text or icons on accent elements
  }),
  colourField({
    name: "destructive",
    label: "Destructive",
    defaultValue: () => "#D32F2F", // A strong red, indicating destructive actions
  }),
  colourField({
    name: "destructiveForeground",
    label: "Destructive Foreground",
    defaultValue: () => "#FFFFFF", // White, for text or icons on destructive buttons
  }),
  {
    name: "radius",
    type: "text",
    label: "Radius",
    defaultValue: () => "0.5rem",
  },
];

export const Theme: GlobalConfig = {
  // access: {
  //   read: tenants,
  //   update: tenantAdmins,
  // },
  admin: {
    group: "Site Config",
  },
  fields: [
    {
      name: "colours",
      type: "group",
      label: "Colours",
      fields: ThemeFields,
    },
    tenant,
  ],
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
          collection: "theme-multi-tenant-collection",
          where: {
            and: [{ tenant: { equals: tenant.docs[0].id } }],
          },
        });

        if (theme.docs[0]) {
          res.status(200).send(theme.docs[0]);
        } else {
          res.status(404).send("Theme not found in tenant");
        }
      },
    },
  ],
  slug: "theme",
};

export const [ThemeGlobal, ThemeGlobalMultiTenantCollection] =
  createMultiTenantGlobal(Theme);
