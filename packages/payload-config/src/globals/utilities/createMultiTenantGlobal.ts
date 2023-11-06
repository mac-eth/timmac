import { Config } from "payload/config";
import { CollectionConfig, GlobalConfig } from "payload/types";
import { Tenant } from "../../payload-types";
import { tenant } from "../../fields/tenant";
import {
  BeforeChangeHook,
  BeforeReadHook,
} from "payload/dist/globals/config/types";

export const createMultiTenantGlobal = (
  config: GlobalConfig
): [GlobalConfig, CollectionConfig] => {
  const fields = config.fields;
  const collectionName =
    `${config.slug}-multi-tenant-collection` as keyof Required<
      Config["collections"]
    > as any;

  const getTenantFromRequest = async (req) => {
    if (!req.headers?.host) return null;

    if (req.headers?.host.startsWith(process.env.HOST_NAME)) {
      console.log("top tenant, returning");
      return null;
    }

    const hostPrefix = req.headers?.host.split(".")[0];

    const thisTenant = await req.payload.find({
      collection: "tenants",
      where: {
        slug: {
          equals: hostPrefix,
        },
      },
      depth: 0,
      limit: 1,
    });

    return thisTenant.docs[0] || null;
  };

  const beforeReadHookReadFromCollection: BeforeReadHook = async ({ req }) => {
    const thisTenant = await getTenantFromRequest(req);
    if (!thisTenant) return {};

    const thisGlobal = await req.payload.find({
      collection: collectionName,
      where: {
        tenant: {
          equals: thisTenant.id,
        },
      },
      depth: 0,
      limit: 1,
    });

    return thisGlobal.docs.length > 0 ? thisGlobal.docs[0] : {};
  };

  const beforeChangeHookStoreInCollection: BeforeChangeHook = async ({
    req,
    data,
  }) => {
    const thisTenant = await getTenantFromRequest(req);
    if (!thisTenant) return {};

    const existing = (
      await req.payload.find({
        collection: collectionName,
        where: {
          tenant: { equals: thisTenant.id },
        },
      })
    ).docs;

    const payloadData = {
      ...data,
      tenant: thisTenant.id,
      id: undefined,
      globalType: undefined,
    };

    if (existing[0]) {
      await req.payload.update({
        collection: collectionName,
        id: existing[0].id,
        data: payloadData,
      });
    } else {
      await req.payload.create({
        collection: collectionName,
        data: payloadData,
      });
    }

    return data;
  };

  const global: GlobalConfig = {
    ...config,
    hooks: {
      beforeChange: [
        beforeChangeHookStoreInCollection,
        ...(config.hooks?.beforeChange || []),
      ],
      beforeRead: [
        beforeReadHookReadFromCollection,
        ...(config.hooks?.beforeRead || []),
      ],
    },
  };

  const collection: CollectionConfig = {
    ...config,
    slug: collectionName,
    graphQL: {},
    admin: {
      ...config.admin,
      hidden: true,
    },
    hooks: {},
    fields: [...fields, tenant],
  };

  return [global, collection];
};
