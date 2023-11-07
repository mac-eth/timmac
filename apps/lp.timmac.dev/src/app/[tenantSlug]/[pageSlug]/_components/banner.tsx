import type { Page } from "@timmac/cms/src/payload-types";
import Default from "@timmac/ui/src/components/banner/banner-1";
import Scolling from "@timmac/ui/src/components/banner/scrolling-banner";

import { cn } from "../../../../utils/cn";
import type { LexicalHelperType, SerializedLexicalNode } from "./lexical";
import Serialize from "./lexical";

export type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X
  ? 1
  : 2) extends <T>() => T extends Y ? 1 : 2
  ? A
  : B;

export type ExtractBannerType<T> = T extends (infer U)[]
  ? IfEquals<
      U extends { blockType: infer BT }
        ? BT extends "banner"
          ? true
          : false
        : false,
      true,
      U,
      never
    >
  : never;

export type BannerType = ExtractBannerType<Page["content"]>;

export default function Banner({ banner }: { banner: BannerType }) {
  console.log("B", banner);

  const style = banner?.style ?? "default";

  let buttonHref;
  let buttonText;
  if (banner?.button?.[0]) {
    buttonHref = banner.button[0].link.url;
    buttonText = banner.button[0].link.label;
  }

  if (banner.hide) {
    return <></>;
  }

  //console.log(banner);

  console.log(
    cn(
      banner.colourProfile === "profile1" && "bg-backgroundProfile1",
      banner.colourProfile === "profile2" && "bg-backgroundProfile2",
    ),
  );

  switch (style) {
    case "scrolling":
      return (
        <Scolling
          Text={
            <Serialize
              nodes={
                (banner.mainText as unknown as LexicalHelperType).root
                  .children as SerializedLexicalNode[]
              }
              tailwindExpansions={{
                paragraph: "text-center lg:text-left",
                bold: "font-futuraPTDemi",
              }}
            />
          }
          TextColor={"text-primary"}
          backgroundColor={cn(
            banner.colourProfile === "profile1" && "bg-background-profile1",
            banner.colourProfile === "profile2" && "bg-background-profile2",
          )}
          baseVelocity={1}
        />
      );
    default:
      return (
        <Default
          MainText={
            <Serialize
              nodes={
                (banner.mainText as unknown as LexicalHelperType).root
                  .children as SerializedLexicalNode[]
              }
              tailwindExpansions={{
                paragraph: "text-center lg:text-left",
                bold: "font-futuraPTDemi",
              }}
            />
          }
          ButtonText={<span>{buttonText}</span>}
          BackgroundColor={cn(
            banner.colourProfile === "profile1" && "bg-background-profile1",
            banner.colourProfile === "profile2" && "bg-background-profile2",
          )}
          TextColor={cn(
            banner.colourProfile === "profile1" && "text-text-profile1",
            banner.colourProfile === "profile2" && "text-text-profile2",
          )}
          ButtonColor={cn(
            banner.colourProfile === "profile1" && "bg-primary-profile1",
            banner.colourProfile === "profile2" && "bg-primary-profile2",
          )}
          ButtonTextColor={cn(
            banner.colourProfile === "profile1" && "text-text-profile1",
            banner.colourProfile === "profile2" && "text-text-profile2",
          )}
          ButtonHref={buttonHref ?? ""}
          AccentColor={cn(
            banner.colourProfile === "profile1" && "bg-accent-profile1",
            banner.colourProfile === "profile2" && "bg-accent-profile2",
          )}
        />
      );
  }
}
