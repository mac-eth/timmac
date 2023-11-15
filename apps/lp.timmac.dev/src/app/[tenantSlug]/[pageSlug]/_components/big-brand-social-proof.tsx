import type { Media, Page } from "@timmac/cms/src/payload-types";

import Default from "~/components/blocks/big-brand-social-proof-banner/default";
import { cn } from "../../../../utils/cn";
import type { LexicalHelperType, SerializedLexicalNode } from "./lexical";
import Serialize from "./lexical";

type NonNullableArray<T> = T extends (infer U)[] ? U : never;
type ContentItem = NonNullableArray<NonNullable<Page["content"]>>;
export type BigBrandSocialProofType = Extract<
  ContentItem,
  { blockType: "big-brand-social-proof" }
>;

const s3endpoint = process.env.NEXT_PUBLIC_S3_ENDPOINT;
const s3bucket = process.env.NEXT_PUBLIC_S3_BUCKET;

export default function BigBrandSocialProof({
  bbsp,
}: {
  bbsp: BigBrandSocialProofType;
}) {
  console.log(bbsp);

  const style = bbsp?.style ?? "default";

  switch (style) {
    default:
      return (
        <Default
          AccentColor={cn(
            bbsp.colourProfile === "profile1" && "bg-accent-profile1",
            bbsp.colourProfile === "profile2" && "bg-accent-profile2",
          )}
          BackgroundColor={cn(
            bbsp.colourProfile === "profile1" && "bg-text-profile1",
            bbsp.colourProfile === "profile2" && "bg-text-profile1",
          )}
          TextColor={cn(
            bbsp.colourProfile === "profile1" && "text-background-profile1",
            bbsp.colourProfile === "profile2" && "text-background-profile2",
          )}
          Quote={
            <Serialize
              nodes={
                (bbsp.mainText as unknown as LexicalHelperType).root
                  .children as SerializedLexicalNode[]
              }
              tailwindExpansions={{
                paragraph: "text-center",
              }}
            />
          }
          Logos={
            bbsp.imageRow?.map((image) => ({
              url:
                `${s3endpoint}/${s3bucket}/${
                  (image.image as Media).filename
                }` ?? "",
              name: (image.image as Media).alt ?? "",
              height: (image.image as Media).height!,
              width: (image.image as Media).width!,
            })) ?? []
          }
        />
      );
  }
}
