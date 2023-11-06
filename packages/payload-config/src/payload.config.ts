import path from "path";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import dotenv from "dotenv";
// dotenv.config({
//   path: path.resolve(__dirname, "../.env"),
// });

import { buildConfig } from "payload/config";

import { Pages } from "./collections/Pages";
import { Tenants } from "./collections/Tenants";
import { Users } from "./collections/Users";
import {
  Theme,
  ThemeGlobal,
  ThemeGlobalMultiTenantCollection,
} from "./globals/theme";

export default buildConfig({
  collections: [Users, Tenants, Pages, ThemeGlobalMultiTenantCollection],
  admin: {
    bundler: webpackBundler(),
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          dotenv: path.resolve(__dirname, "./dotenv.js"),
        },
      },
    }),
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  globals: [ThemeGlobal],
});
