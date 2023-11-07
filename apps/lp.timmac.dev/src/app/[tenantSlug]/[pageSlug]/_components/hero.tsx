import type { Media, Page } from "@timmac/cms/src/payload-types";
import Scolling from "@timmac/ui/src/components/banner/scrolling-banner";
import Default from "@timmac/ui/src/components/hero/hero-1";

import { cn } from "../../../../utils/cn";
import type { LexicalHelperType, SerializedLexicalNode } from "./lexical";
import Serialize from "./lexical";

type NonNullableArray<T> = T extends (infer U)[] ? U : never;
type ContentItem = NonNullableArray<NonNullable<Page["content"]>>;
export type HeroType = Extract<ContentItem, { blockType: "hero" }>;

export default function Hero({ hero }: { hero: HeroType }) {
  const style = hero?.style ?? "default";

  if (hero.hide) {
    return <></>;
  }

  switch (style) {
    default:
      return (
        <Default
          mainText={
            <Serialize
              nodes={
                (hero.mainText as unknown as LexicalHelperType).root
                  .children as SerializedLexicalNode[]
              }
            />
          }
          mainTextColor={cn(
            hero.colourProfile === "profile1" && "text-text-profile1",
            hero.colourProfile === "profile2" && "text-text-profile2",
          )}
          subText={
            <Serialize
              nodes={
                (hero.subText as unknown as LexicalHelperType).root
                  .children as SerializedLexicalNode[]
              }
            />
          }
          subTextColor={cn(
            hero.colourProfile === "profile1" && "text-text-profile1",
            hero.colourProfile === "profile2" && "text-text-profile2",
          )}
          imageURL={{
            src: (hero.image as Media).url ?? "",
            height: (hero.image as Media).height ?? 0,
            width: (hero.image as Media).width ?? 0,
          }}
          imageAlt={(hero.image as Media).alt}
        />
      );
  }
}
