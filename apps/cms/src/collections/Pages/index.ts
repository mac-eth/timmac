import type { CollectionConfig } from "payload/types";

import richText from "../../fields/richText";
import { tenant } from "../../fields/tenant";
import { banner } from "../../fields/ui-components/banner";
import { loggedIn } from "./access/loggedIn";
import { tenantAdmins } from "./access/tenantAdmins";
import { tenants } from "./access/tenants";
import formatSlug from "./hooks/formatSlug";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  access: {
    read: tenants,
    create: loggedIn,
    update: tenantAdmins,
    delete: tenantAdmins,
  },
  fields: [
    {
      name: "tenantSlug",
      type: "text",
      admin: {
        condition: () => {
          return false;
        },
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      index: true,
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeChange: [
          async ({
            data, // incoming data to update or create with
            req, // full express request
            operation, // name of the operation ie. 'create', 'update'
            originalDoc, // original document
          }) => {
            // set the tenantSlug field to the slug of the tenant
            const tenant = await req.payload.find({
              collection: "tenants",
              where: {
                id: { equals: data.tenant },
              },
            });

            data.tenantSlug = tenant.docs[0].slug;
          },
        ],
        beforeValidate: [formatSlug("title")],
      },
    },
    banner,
    tenant,
  ],
  endpoints: [
    {
      path: "/findByTenantSlugAndPageSlug/:tenantSlug/:pageSlug",
      method: "get",
      handler: async (req, res, next) => {
        console.log(req);

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

        const page = await req.payload.find({
          collection: "pages",
          where: {
            and: [
              { slug: { equals: req.params.pageSlug } },
              { tenant: { equals: tenant.docs[0].id } },
            ],
          },
        });

        if (page.docs[0]) {
          res.status(200).send(page.docs[0]);
        } else {
          res.status(404).send("Page not found in tenant");
        }
      },
    },
  ],
};
