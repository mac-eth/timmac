import type { Page } from "@timmac/cms/src/payload-types";

import Banner from "./_components/banner";

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

  const banner = data.banner;
  console.log(banner);

  return (
    <main>
      <div>{JSON.stringify(data, null, 2)}</div>
      {data.banner && <Banner banner={data.banner} />}
    </main>
  );
}
