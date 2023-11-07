import type { Theme } from "@timmac/cms/src/payload-types";

import "../../globals.css";

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1]!, 16),
        g: parseInt(result[2]!, 16),
        b: parseInt(result[3]!, 16),
      }
    : null;
}

async function getData({ tenantSlug }: { tenantSlug: string }) {
  const res = await fetch(
    `${process.env.API_HOST}/api/theme-multi-tenant-collection/findByTenantSlug/${tenantSlug}`,
    { cache: "no-store" },
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

  const background = hexToRgb(theme.colours?.background ?? "#000000");
  const foreground = hexToRgb(theme.colours?.foreground ?? "#000000");
  const primary = hexToRgb(theme.colours?.primary ?? "#000000");
  const primaryForeground = hexToRgb(
    theme.colours?.primaryForeground ?? "#000000",
  );
  const secondary = hexToRgb(theme.colours?.secondary ?? "#000000");
  const secondaryForeground = hexToRgb(
    theme.colours?.secondaryForeground ?? "#000000",
  );
  const destructive = hexToRgb(theme.colours?.destructive ?? "#000000");
  const destructiveForeground = hexToRgb(
    theme.colours?.destructiveForeground ?? "#000000",
  );
  const muted = hexToRgb(theme.colours?.muted ?? "#000000");
  const mutedForeground = hexToRgb(theme.colours?.mutedForeground ?? "#000000");
  const accent = hexToRgb(theme.colours?.accent ?? "#000000");
  const accentForeground = hexToRgb(
    theme.colours?.accentForeground ?? "#000000",
  );

  return (
    <html
      lang="en"
      className="bg-white-50 relative overflow-x-hidden font-futuraPT"
    >
      <head>
        <style>{`
        @layer base {
          :root {
            --background: ${background?.r}, ${background?.g}, ${background?.b};
            --foreground: ${foreground?.r}, ${foreground?.g}, ${foreground?.b};
            --primary: ${primary?.r}, ${primary?.g}, ${primary?.b};
            --primary-foreground: ${primaryForeground?.r}, ${primaryForeground?.g}, ${primaryForeground?.b};
            --secondary: ${secondary?.r}, ${secondary?.g}, ${secondary?.b};
            --secondary-foreground: ${secondaryForeground?.r}, ${secondaryForeground?.g}, ${secondaryForeground?.b};
            --destructive: ${destructive?.r}, ${destructive?.g}, ${destructive?.b};
            --destructive-foreground: ${destructiveForeground?.r}, ${destructiveForeground?.g}, ${destructiveForeground?.b};
            --muted: ${muted?.r}, ${muted?.g}, ${muted?.b}; 
            --muted-foreground: ${mutedForeground?.r}, ${mutedForeground?.g}, ${mutedForeground?.b};
            --accent: ${accent?.r}, ${accent?.g}, ${accent?.b};
            --accent-foreground: ${accentForeground?.r}, ${accentForeground?.g}, ${accentForeground?.b};
            --radius: ${theme.colours?.radius ?? "0.5rem"}
          }
        }

        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
