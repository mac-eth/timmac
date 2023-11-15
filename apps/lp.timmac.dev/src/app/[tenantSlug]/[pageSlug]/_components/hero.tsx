import { CheckCircledIcon } from "@radix-ui/react-icons";

import type { Media, Page } from "@timmac/cms/src/payload-types";
import Scolling from "@timmac/ui/src/components/banner/scrolling-banner";

import HeroStars from "~/components/blocks/hero/blocks/hero-stars";
//import Default from "@timmac/ui/src/components/hero/hero-1";
import Default from "~/components/blocks/hero/default";
import HeroBenefitsList from "../../../../components/blocks/hero/blocks/hero-benefits-list";
import { cn } from "../../../../utils/cn";
import type { LexicalHelperType, SerializedLexicalNode } from "./lexical";
import Serialize from "./lexical";

type NonNullableArray<T> = T extends (infer U)[] ? U : never;
type ContentItem = NonNullableArray<NonNullable<Page["content"]>>;
export type HeroType = Extract<ContentItem, { blockType: "hero" }>;

type zone1Item = NonNullableArray<NonNullable<HeroType["zoneOne"]>>;
export type StarReviewBlockType = Extract<
  zone1Item,
  { blockType: "starReview" }
>;

type zone2Item = NonNullableArray<NonNullable<HeroType["zoneTwo"]>>;
export type BenefitsListBlockType = Extract<
  zone2Item,
  { blockType: "benefitsListBlock" }
>;

// eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents, @typescript-eslint/no-redundant-type-constituents
type BlockTypes = StarReviewBlockType | BenefitsListBlockType;

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

  const renderBlock = (props: { block: BlockTypes }): React.ReactNode => {
    switch (props.block.blockType) {
      case "starReview":
        return (
          <HeroStars
            stars={{
              number: props.block.stars as number,
              className: cn(textPrimary),
            }}
            text={
              <Serialize
                nodes={
                  (props.block.text as unknown as LexicalHelperType).root
                    .children as SerializedLexicalNode[]
                }
                tailwindExpansions={{
                  paragraph: cn("text-center lg:text-left", textColour),
                }}
              />
            }
          />
        );
      case "benefitsListBlock":
        return (
          <HeroBenefitsList
            className="mt-8"
            icon={<CheckCircledIcon className="h-7 w-7" />}
            iconClassName={cn(textPrimary)}
            featureTextClassname={cn(textColour)}
            features={props.block.benefits?.map((f) => f.benefit) ?? []}
          />
        );
      default:
        return <></>;
    }
  };

  const zoneOne: React.ReactNode = hero.zoneOne?.[0] ? (
    renderBlock({ block: hero.zoneOne[0] })
  ) : (
    <></>
  );
  const zoneTwo: React.ReactNode = hero.zoneTwo?.[0] ? (
    renderBlock({ block: hero.zoneTwo[0] })
  ) : (
    <></>
  );
  const mainText: React.ReactNode = hero.mainText ? (
    <Serialize
      nodes={
        (hero.mainText as unknown as LexicalHelperType).root
          .children as SerializedLexicalNode[]
      }
    />
  ) : (
    <></>
  );
  const secondaryText: React.ReactNode = hero.secondaryText ? (
    <Serialize
      nodes={
        (hero.secondaryText as unknown as LexicalHelperType).root
          .children as SerializedLexicalNode[]
      }
    />
  ) : (
    <></>
  );

  switch (style) {
    default:
      return (
        <Default
          className={cn(
            hero.colourProfile === "profile1" && "bg-background-profile1",
            hero.colourProfile === "profile2" && "bg-background-profile2",
          )}
          mainText={{
            component: mainText,
            className: cn(textColour),
          }}
          secondaryText={{
            component: secondaryText,
            className: cn(textColour),
          }}
          zoneOne={{
            component: zoneOne,
          }}
          zoneTwo={{
            component: zoneTwo,
          }}
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
