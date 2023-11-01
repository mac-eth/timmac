import { StarFilledIcon } from "@radix-ui/react-icons";

import LandingPageBanner from "@timmac/ui/src/components/banner/banner-1";
import Hero from "@timmac/ui/src/components/hero/hero-1";
import Button from "@timmac/ui/src/components/misc/button";
import HeroStars from "@timmac/ui/src/components/social-proof/hero-stars";

import HeroProduct from "~/assets/nut-ninja/hero-product.png";

export default function Page() {
  return (
    <>
      <LandingPageBanner
        MainText={
          <p className="text-center lg:text-left">
            <strong>GET FREE SHIPPING</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            USE CODE:{" "}
            <strong className="font-futuraPTDemi text-xl underline">
              PUBEKILLER
            </strong>{" "}
            AT CHECKOUT!
          </p>
        }
        ButtonText={
          <span>
            SHOP NOW <span aria-hidden="true">&rarr;</span>
          </span>
        }
        backgroundColor="bg-neutral-50"
        textColor="text-neutral-950"
        buttonColor="bg-neutral-950"
        buttonTextColor="text-neutral-50"
        accentColor="bg-gradient-to-r from-[#ff80b5] to-[#9089fc]"
      />
      <Hero
        socialProofComponent={
          <HeroStars
            textColor="text-neutral-50"
            starsColor="text-[#FFD700]"
            text={<span className="font-futuraPT">100+ 5 Star Reviews</span>}
            stars={5}
            className="mb-4"
          />
        }
        mainText={
          <h1 className="font-neueEinstellung">
            Worlds <span className="italic underline">Fastest</span> Hair
            Removal Cream
          </h1>
        }
        subText={
          <p className="mt-8">
            <span className="font-futuraPTDemi underline">
              ASSASSINATE YOUR PUBIC HAIRS
            </span>{" "}
            WITH THE STEALTH, SPEED AND PRECISION OF NUTNINJA.
          </p>
        }
        ctaComponent={
          <Button
            href="https://trynutninja.com/checkouts/cn/c1-0b37647ad9552aeb92d0ad67d51efe5f"
            className="mt-12"
            text={
              <p>
                <span className="font-futuraPTDemi">SHOP NOW </span>& GET FREE
                SHIPPING!
              </p>
            }
            backgroundColor="bg-neutral-50"
            textColor="text-neutral-950"
          />
        }
        backgroundColor="bg-brand-background" // Replace with actual color class for the background
        mainTextColor="text-white" // Text color for the main text
        subTextColor="text-white" // Text color for the subtext
        imageURL={HeroProduct}
        imageAlt="Nut Ninja Bundle"
        imageClassName="h-auto w-[62rem]"
      />
    </>
  );
}
