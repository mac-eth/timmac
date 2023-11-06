import type { Page } from "@timmac/payload-config/src/payload-types";

async function getData({
  tenantSlug,
  pageSlug,
}: {
  tenantSlug: string;
  pageSlug: string;
}) {
  const res = await fetch(
    `${process.env.API_HOST}/api/pages/findByTenantSlugAndPageSlug/${tenantSlug}/${pageSlug}`,
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
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
      <div className="text-primary text-4xl">{data.title}</div>
    </main>
  );
}
