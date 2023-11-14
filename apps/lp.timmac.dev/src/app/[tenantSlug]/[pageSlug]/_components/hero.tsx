import { CheckCircledIcon } from "@radix-ui/react-icons";

import type { Media, Page } from "@timmac/cms/src/payload-types";
import Scolling from "@timmac/ui/src/components/banner/scrolling-banner";

import HeroStars from "~/components/blocks/hero/blocks/hero-stars";
//import Default from "@timmac/ui/src/components/hero/hero-1";
import Default from "~/components/blocks/hero/default";
import HeroIconList from "../../../../components/blocks/hero/blocks/hero-icon-list";
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

  const textColour = cn(
    hero.colourProfile === "profile1" && "text-text-profile1",
    hero.colourProfile === "profile2" && "text-text-profile2",
  );

  const textPrimary = cn(
    hero.colourProfile === "profile1" && "text-primary-profile1",
    hero.colourProfile === "profile2" && "text-primary-profile2",
  );

  const mainContentSectionComponents: {
    component: React.ReactNode;
    className?: string;
  }[] =
    hero.mainContentSection?.map((section, index) => {
      switch (section.blockType) {
        case "padding":
          const p = section.padding ?? 1;

          return {
            component: (
              <div
                key={index}
                className={cn(
                  p === 1 && "mt-1",
                  p === 2 && "mt-2",
                  p === 3 && "mt-3",
                  p === 4 && "mt-4",
                  p === 5 && "mt-5",
                  p === 6 && "mt-6",
                  p === 7 && "mt-7",
                  p === 8 && "mt-8",
                  p === 9 && "mt-9",
                  p === 10 && "mt-10",
                  p === 11 && "mt-11",
                  p === 12 && "mt-12",
                )}
              />
            ),
            className: "",
          };
        case "iconListBlock":
          return {
            component: (
              <HeroIconList
                className="mt-8"
                key={index}
                icon={<CheckCircledIcon className="h-7 w-7" />}
                iconClassName={cn(textPrimary)}
                featureTextClassname={cn(textColour)}
                features={section.features?.map((f) => f.feature) ?? []}
              />
            ),
            className: "",
          };

        case "starReview":
          return {
            component: (
              <HeroStars
                key={index}
                stars={{
                  number: section.stars as number,
                  className: cn(textPrimary),
                }}
                text={
                  <Serialize
                    nodes={
                      (section.text as unknown as LexicalHelperType).root
                        .children as SerializedLexicalNode[]
                    }
                    tailwindExpansions={{
                      paragraph: cn("text-center lg:text-left", textColour),
                    }}
                  />
                }
              />
            ),
            className: "",
          };
        case "richText":
          return {
            component: (
              <Serialize
                key={index}
                nodes={
                  (section.richText as unknown as LexicalHelperType).root
                    .children as SerializedLexicalNode[]
                }
                tailwindExpansions={{
                  h1: cn("text-3xl lg:text-7xl"),
                  h2: cn("text-2xl lg:text-5xl"),
                  h3: cn("text-xl lg:text-4xl"),
                  h4: cn("text-lg lg:text-3xl"),
                  h5: cn("text-base lg:text-2xl"),
                  paragraph: cn("text-center lg:text-left"),
                  bold: cn("font-futuraPTDemi"),
                }}
              />
            ),
            className: cn(textColour, "font-futuraPTDemi"),
          };
        default:
          return {
            component: <></>,
            className: "",
          };
      }
    }) ?? [];

  switch (style) {
    default:
      return (
        <Default
          className={cn(
            hero.colourProfile === "profile1" && "bg-background-profile1",
            hero.colourProfile === "profile2" && "bg-background-profile2",
          )}
          contentSectionComponents={mainContentSectionComponents}
          image={{
            url: (hero.image as Media).filename ?? "",
            alt: (hero.image as Media).alt ?? "",
            width: (hero.image as Media).width ?? 0,
            height: (hero.image as Media).height ?? 0,
            className: "h-auto w-[62rem]",
          }}
        />
      );
  }
}
