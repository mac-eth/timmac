import type { Page } from "@timmac/cms/src/payload-types";

import type { BannerType } from "./banner";
import Banner from "./banner";

export default function LP({ page }: { page: Page }) {
  return (
    <>
      {page.content?.map((content) => {
        console.log(content);
        if (content.blockType === "banner") {
          return (
            <Banner
              key={content.id}
              banner={content as unknown as BannerType}
            />
          );
        }
      })}
    </>
  );
}
