import { Page } from "@timmac/cms/src/payload-types";
import Default from "@timmac/ui/src/components/banner/banner-1";
import Scolling from "@timmac/ui/src/components/banner/scrolling-banner";

type Banner = Page["banner"];

export default function Banner({ banner }: { banner: Banner }) {
  const style = banner?.style ?? "default";

  switch (style) {
    // case "scrolling":
    //   return <Scolling banner={banner} />
    default:
      return (
        <Default
          MainText={<div>test</div>}
          ButtonText={<div>test</div>}
          BackgroundColor={"bg-primary"}
          TextColor={"text-primary-foreground"}
          ButtonColor={"bg-secondary"}
          ButtonTextColor={"text-secondary-foreground"}
          ButtonHref={"https://www.google.com"}
          AccentColor={"text-accent"}
        />
      );
  }
}
