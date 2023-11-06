import type { Field, GlobalConfig } from "payload/types";

import { tenant } from "../fields/tenant";
import { tenantAdmins } from "./access/tenantAdmins";
import { tenants } from "./access/tenants";
import { createMultiTenantGlobal } from "./utilities/createMultiTenantGlobal";

const ThemeFields: Field[] = [
  {
    name: "background",
    type: "text",
    label: "Background",
    defaultValue: () => "222.2 84% 4.9%",
  },
  {
    name: "foreground",
    type: "text",
    label: "Foreground",
    defaultValue: () => "210 40% 98%",
  },
  {
    name: "primary",
    type: "text",
    label: "Primary",
    defaultValue: () => "217.2 91.2% 59.8%",
  },
  {
    name: "primaryForeground",
    type: "text",
    label: "Primary Foreground",
    defaultValue: () => "222.2 47.4% 11.2%",
  },
  {
    name: "secondary",
    type: "text",
    label: "Secondary",
    defaultValue: () => "217.2 32.6% 17.5%",
  },
  {
    name: "secondaryForeground",
    type: "text",
    label: "Secondary Foreground",
    defaultValue: () => "210 40% 98%",
  },
  {
    name: "muted",
    type: "text",
    label: "Muted",
    defaultValue: () => "217.2 32.6% 17.5%",
  },
  {
    name: "mutedForeground",
    type: "text",
    label: "Muted Foreground",
    defaultValue: () => "215 20.2% 65.1%",
  },
  {
    name: "accent",
    type: "text",
    label: "Accent",
    defaultValue: () => "217.2 32.6% 17.5%",
  },
  {
    name: "accentForeground",
    type: "text",
    label: "Accent Foreground",
    defaultValue: () => " 210 40% 98%",
  },
  {
    name: "destructive",
    type: "text",
    label: "Destructive",
    defaultValue: () => "0 62.8% 30.6%",
  },
  {
    name: "destructiveForeground",
    type: "text",
    label: "Destructive Foreground",
    defaultValue: () => "210 40% 98%",
  },
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
  slug: "theme",
};

export const [ThemeGlobal, ThemeGlobalMultiTenantCollection] =
  createMultiTenantGlobal(Theme);
