import type { CollectionConfig } from "payload/types";

import { anyone } from "../../access/anyone";
import { superAdminFieldAccess } from "../../access/superAdmins";
import { adminsAndSelf } from "./access/adminsAndSelf";
import { tenantAdmins } from "./access/tenantAdmins";
import { loginAfterCreate } from "./hooks/loginAfterCreate";
import { recordLastLoggedInTenant } from "./hooks/recordLastLoggedInTenant";
import { isSuperOrTenantAdmin } from "./utilities/isSuperOrTenantAdmin";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
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
  },
  access: {
    read: adminsAndSelf,
    create: anyone,
    update: adminsAndSelf,
    delete: adminsAndSelf,
    admin: isSuperOrTenantAdmin,
  },
  hooks: {
    afterChange: [loginAfterCreate],
    afterLogin: [recordLastLoggedInTenant],
  },
  fields: [
    {
      name: "firstName",
      type: "text",
    },
    {
      name: "lastName",
      type: "text",
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      required: true,
      access: {
        create: superAdminFieldAccess,
        update: superAdminFieldAccess,
        read: superAdminFieldAccess,
      },
      options: [
        {
          label: "Super Admin",
          value: "super-admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
    },
    {
      name: "tenants",
      type: "array",
      label: "Tenants",
      access: {
        create: tenantAdmins,
        update: tenantAdmins,
        read: tenantAdmins,
      },
      fields: [
        {
          name: "tenant",
          type: "relationship",
          relationTo: "tenants",
          required: true,
        },
        {
          name: "roles",
          type: "select",
          hasMany: true,
          required: true,
          options: [
            {
              label: "Admin",
              value: "admin",
            },
            {
              label: "User",
              value: "user",
            },
          ],
        },
      ],
    },
    {
      name: "lastLoggedInTenant",
      type: "relationship",
      relationTo: "tenants",
      index: true,
      access: {
        create: () => false,
        read: tenantAdmins,
        update: superAdminFieldAccess,
      },
      admin: {
        position: "sidebar",
      },
    },
  ],
};
