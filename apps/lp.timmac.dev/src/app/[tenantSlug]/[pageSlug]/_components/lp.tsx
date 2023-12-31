import type { Page } from "@timmac/cms/src/payload-types";

import type { BannerType } from "./banner";
import Banner from "./banner";
import BigBrandSocialProof from "./big-brand-social-proof";
import type { BigBrandSocialProofType } from "./big-brand-social-proof";
import type { HeroType } from "./hero";
import Hero from "./hero";

export default function LP({ page }: { page: Page }) {
  console.log(page);

  return (
    <>
      {page.content?.map((content) => {
        if (content.blockType === "banner") {
          return (
            <Banner
              key={content.id}
              banner={content as unknown as BannerType}
            />
          );
        }
        if (content.blockType === "hero") {
          return (
            <Hero key={content.id} hero={content as unknown as HeroType} />
          );
        }
        if (content.blockType === "big-brand-social-proof") {
          return (
            <BigBrandSocialProof
              key={content.id}
              bbsp={content as unknown as BigBrandSocialProofType}
            />
          );
        }
      })}
    </>
  );
}
