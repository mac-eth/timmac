"use client";

import { useLivePreview } from "@payloadcms/live-preview-react";

import type { Page } from "@timmac/cms/src/payload-types";

import LP from "../../_components/lp";

export const LPLivePreview: React.FC<{
  initialData: Page;
}> = ({ initialData }) => {
  const { data } = useLivePreview<Page>({
    initialData: initialData,
    // serverURL: `${process.env.NEXT_PUBLIC_API_HOST}/api/pages/findByTenantSlugAndPageSlug/${tenantSlug}/${pageSlug}`,
    serverURL: `${process.env.NEXT_PUBLIC_API_HOST}`,
    depth: 2,
  });

  return (
    <>
      <LP page={data} />
    </>
  );
};
