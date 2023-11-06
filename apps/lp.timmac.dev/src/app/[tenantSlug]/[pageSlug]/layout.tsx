import type { Theme } from "@timmac/payload-config/src/payload-types";

async function getData({ tenantSlug }: { tenantSlug: string }) {
  const res = await fetch(
    `${process.env.API_HOST}/api/theme-multi-tenant-collection/findByTenantSlug/${tenantSlug}`,
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Theme>;
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { tenantSlug: string };
}) {
  const { tenantSlug } = params;
  const theme = await getData({ tenantSlug });

  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
