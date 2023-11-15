import type { Page } from "@timmac/cms/src/payload-types";

import LP from "./_components/lp";

async function getData({
  tenantSlug,
  pageSlug,
}: {
  tenantSlug: string;
  pageSlug: string;
}) {
  const res = await fetch(
    `${process.env.API_HOST}/api/pages/findByTenantSlugAndPageSlug/${tenantSlug}/${pageSlug}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Page>;
}

export default async function Page({
  params,
}: {
  params: { tenantSlug: string; pageSlug: string };
}) {
  const { tenantSlug, pageSlug } = params;
  const data = await getData({ tenantSlug, pageSlug });

  return (
    <main>
      <LP page={data} />
    </main>
  );
}
