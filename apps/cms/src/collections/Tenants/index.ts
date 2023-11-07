import type { CollectionConfig } from "payload/types";

import { superAdmins } from "../../access/superAdmins";
import { tenantAdmins } from "./access/tenantAdmins";

export const Tenants: CollectionConfig = {
  slug: "tenants",
  access: {
    create: superAdmins,
    read: tenantAdmins,
    update: tenantAdmins,
    delete: superAdmins,
  },
  admin: {
    hidden: ({ user }) => {
      // hide tenant unless super-admin
      if (user["roles"]) {
        const roles = user["roles"] as string[];
        if (roles.includes("super-admin")) {
          return false;
        }
      }
      return true;
    },
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "domains",
      type: "array",
      index: true,
      fields: [
        {
          name: "domain",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
