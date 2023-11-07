import type { Page } from "@timmac/cms/src/payload-types";
import Default from "@timmac/ui/src/components/banner/banner-1";
import Scolling from "@timmac/ui/src/components/banner/scrolling-banner";

import Serialize, { SerializedLexicalNode } from "./lexical";

type Banner = Page["banner"];

export default function Banner({ banner }: { banner: Banner }) {
  const style = banner?.style ?? "default";

  let buttonHref;
  let buttonText;
  if (banner?.button?.[0]) {
    buttonHref = banner.button[0].link.url;
    buttonText = banner.button[0].link.label;
  }

  switch (style) {
    case "scrolling":
      return (
        <Scolling
          Text={
            <Serialize
              nodes={(banner?.mainText as any).root.children}
              tailwindExpansions={{
                paragraph: "text-center lg:text-left",
                bold: "font-futuraPTDemi",
              }}
            />
          }
          TextColor={"text-primary"}
          backgroundColor={"bg-primary-foreground"}
          baseVelocity={1}
        />
      );
    default:
      return (
        <Default
          MainText={
            <Serialize
              nodes={(banner?.mainText as any).root.children}
              tailwindExpansions={{
                paragraph: "text-center lg:text-left",
                bold: "font-futuraPTDemi",
              }}
            />
          }
          ButtonText={<span>{buttonText}</span>}
          BackgroundColor="bg-primary-foreground"
          TextColor="text-primary"
          ButtonColor="bg-primary"
          ButtonTextColor="text-primary-foreground"
          ButtonHref={buttonHref ?? ""}
          AccentColor={"text-accent"}
        />
      );
  }
}
