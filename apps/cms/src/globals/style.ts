import { Field, GlobalConfig, GroupField } from "payload/types";

import { superAdmins } from "../access/superAdmins";
import { colorField } from "../fields/colourPicker";
import { createMultiTenantGlobal } from "./utilities/createMultiTenantGlobal";

export const Style: GlobalConfig = {
  slug: "style",
  admin: {
    group: "Restricted Config",
  },
  access: {
    read: superAdmins,
    update: superAdmins,
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
          collection: "style-multi-tenant-collection",
          where: {
            and: [{ tenant: { equals: tenant.docs[0].id } }],
          },
        });

        if (theme.docs[0]) {
          res.status(200).send(theme.docs[0]);
        } else {
          res.status(404).send("Style not found in tenant");
        }
      },
    },
  ],
  fields: [
    {
      type: "array",
      name: "styles",
      label: "Styles",
      minRows: 1,
      fields: [
        {
          type: "text",
          name: "slug",
          label: "Slug",
          required: true,
        },
        {
          type: "text",
          name: "name",
          label: "Name",
          required: true,
        },
      ],
    },
  ],
};

export const [StyleGlobal, StyleGlobalMultiTenantCollection] =
  createMultiTenantGlobal(Style);
