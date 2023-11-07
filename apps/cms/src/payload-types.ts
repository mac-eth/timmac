/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    tenants: Tenant;
    pages: Page;
    'theme-multi-tenant-collection': ThemeMultiTenantCollection;
    media: Media;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    theme: Theme;
  };
}
export interface User {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  roles: ('super-admin' | 'user')[];
  tenants?:
    | {
        tenant: string | Tenant;
        roles: ('admin' | 'user')[];
        id?: string | null;
      }[]
    | null;
  lastLoggedInTenant?: (string | null) | Tenant;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface Tenant {
  id: string;
  name: string;
  slug: string;
  domains?:
    | {
        domain: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface Page {
  id: string;
  tenantSlug?: string | null;
  title: string;
  slug?: string | null;
  banner?: {
    showBanner?: boolean | null;
    style?: ('default' | 'scrolling') | null;
    mainText?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    button?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            label: string;
            appearance?: ('default' | 'badge' | 'link') | null;
            size?: ('compact' | 'default' | 'large') | null;
          };
          id?: string | null;
        }[]
      | null;
  };
  tenant?: (string | null) | Tenant;
  updatedAt: string;
  createdAt: string;
}
export interface ThemeMultiTenantCollection {
  id: string;
  colours?: {
    background?: string | null;
    foreground?: string | null;
    primary?: string | null;
    primaryForeground?: string | null;
    secondary?: string | null;
    secondaryForeground?: string | null;
    muted?: string | null;
    mutedForeground?: string | null;
    accent?: string | null;
    accentForeground?: string | null;
    destructive?: string | null;
    destructiveForeground?: string | null;
    radius?: string | null;
  };
  tenant?: (string | null) | Tenant;
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  alt: string;
  caption?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  media?: string | Media | null;
  tenant?: (string | null) | Tenant;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
export interface Theme {
  id: string;
  colours?: {
    background?: string | null;
    foreground?: string | null;
    primary?: string | null;
    primaryForeground?: string | null;
    secondary?: string | null;
    secondaryForeground?: string | null;
    muted?: string | null;
    mutedForeground?: string | null;
    accent?: string | null;
    accentForeground?: string | null;
    destructive?: string | null;
    destructiveForeground?: string | null;
    radius?: string | null;
  };
  tenant?: (string | null) | Tenant;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}