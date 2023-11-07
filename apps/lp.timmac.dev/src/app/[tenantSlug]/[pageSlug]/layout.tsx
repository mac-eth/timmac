import type { Branding } from "@timmac/cms/src/payload-types";

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
    `${process.env.API_HOST}/api/branding-multi-tenant-collection/findByTenantSlug/${tenantSlug}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Branding>;
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { tenantSlug: string };
}) {
  const { tenantSlug } = params;
  const branding = await getData({ tenantSlug });

  // profile1
  const backgroundProfile1 = hexToRgb(
    branding.profile1?.backgroundColour ?? "#000000",
  );
  const textProfile1 = hexToRgb(branding.profile1?.textColour ?? "#000000");
  const primaryProfile1 = hexToRgb(
    branding.profile1?.primaryColour ?? "#000000",
  );
  const secondaryProfile1 = hexToRgb(
    branding.profile1?.secondaryColour ?? "#000000",
  );
  const accentProfile1 = hexToRgb(branding.profile1?.accentColour ?? "#000000");

  // profile2
  const backgroundProfile2 = hexToRgb(
    branding.profile2?.backgroundColour ?? "#000000",
  );
  const textProfile2 = hexToRgb(branding.profile2?.textColour ?? "#000000");
  const primaryProfile2 = hexToRgb(
    branding.profile2?.primaryColour ?? "#000000",
  );
  const secondaryProfile2 = hexToRgb(
    branding.profile2?.secondaryColour ?? "#000000",
  );
  const accentProfile2 = hexToRgb(branding.profile2?.accentColour ?? "#000000");

  console.log(`
    @layer base {
      :root {
        --background-profile1: ${backgroundProfile1?.r}, ${backgroundProfile1?.g}, ${backgroundProfile1?.b};
        --text-profile1: ${textProfile1?.r}, ${textProfile1?.g}, ${textProfile1?.b};
        --primary-profile1: ${primaryProfile1?.r}, ${primaryProfile1?.g}, ${primaryProfile1?.b};
        --secondary-profile1: ${secondaryProfile1?.r}, ${secondaryProfile1?.g}, ${secondaryProfile1?.b};
        --accent-profile1: ${accentProfile1?.r}, ${accentProfile1?.g}, ${accentProfile1?.b};

        --background-profile2: ${backgroundProfile2?.r}, ${backgroundProfile2?.g}, ${backgroundProfile2?.b};
        --text-profile2: ${textProfile2?.r}, ${textProfile2?.g}, ${textProfile2?.b};
        --primary-profile2: ${primaryProfile2?.r}, ${primaryProfile2?.g}, ${primaryProfile2?.b};
        --secondary-profile2: ${secondaryProfile2?.r}, ${secondaryProfile2?.g}, ${secondaryProfile2?.b};
        --accent-profile2: ${accentProfile2?.r}, ${accentProfile2?.g}, ${accentProfile2?.b};
      }
    }
  `);

  return (
    <html
      lang="en"
      className="bg-white-50 relative overflow-x-hidden font-futuraPT"
    >
      <head>
        <style>
          {`
          @layer base {
            :root {
              --background-profile1: ${backgroundProfile1?.r}, ${backgroundProfile1?.g}, ${backgroundProfile1?.b};
              --text-profile1: ${textProfile1?.r}, ${textProfile1?.g}, ${textProfile1?.b};
              --primary-profile1: ${primaryProfile1?.r}, ${primaryProfile1?.g}, ${primaryProfile1?.b};
              --secondary-profile1: ${secondaryProfile1?.r}, ${secondaryProfile1?.g}, ${secondaryProfile1?.b};
              --accent-profile1: ${accentProfile1?.r}, ${accentProfile1?.g}, ${accentProfile1?.b};

              --background-profile2: ${backgroundProfile2?.r}, ${backgroundProfile2?.g}, ${backgroundProfile2?.b};
              --text-profile2: ${textProfile2?.r}, ${textProfile2?.g}, ${textProfile2?.b};
              --primary-profile2: ${primaryProfile2?.r}, ${primaryProfile2?.g}, ${primaryProfile2?.b};
              --secondary-profile2: ${secondaryProfile2?.r}, ${secondaryProfile2?.g}, ${secondaryProfile2?.b};
              --accent-profile2: ${accentProfile2?.r}, ${accentProfile2?.g}, ${accentProfile2?.b};
            }
          }
        `}
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
}
