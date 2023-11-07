import type { Page } from "@timmac/cms/src/payload-types";

import Banner from "./banner";

export default function LP({ page }: { page: Page }) {
  return (
    <>
      {page.banner && page.banner.showBanner && <Banner banner={page.banner} />}
    </>
  );
}
