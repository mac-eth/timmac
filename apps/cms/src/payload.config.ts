import path from "path";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import dotenv from "dotenv";
// dotenv.config({
//   path: path.resolve(__dirname, "../.env"),
// });

import { buildConfig } from "payload/config";

import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Tenants } from "./collections/Tenants";
import { Users } from "./collections/Users";
import {
  BrandingGlobal,
  BrandingGlobalMultiTenantCollection,
} from "./globals/branding";

export default buildConfig({
  collections: [
    Users,
    Tenants,
    Pages,
    Media,
    BrandingGlobalMultiTenantCollection,
  ],
  admin: {
    bundler: webpackBundler(),
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        fallback: { fs: false },
        alias: {
          ...config.resolve.alias,
          dotenv: path.resolve(__dirname, "./dotenv.js"),
        },
      },
    }),
    livePreview: {
      url: ({ data, documentInfo, locale }) => {
        console.log(data);

        return `http://localhost:3001/${
          documentInfo.slug === "pages" && `${data.tenantSlug}/${data.slug}/cs/`
        }`;
      },
      collections: ["pages"],
    },
  },
  editor: lexicalEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  globals: [BrandingGlobal],
  plugins: [
    cloudStorage({
      collections: {
        // Enable cloud storage for Media collection
        media: {
          // Create the S3 adapter
          adapter: s3Adapter({
            config: {
              endpoint: process.env.S3_ENDPOINT,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
              },
            },
            bucket: process.env.S3_BUCKET,
          }),
        },
      },
    }),
  ],
});
