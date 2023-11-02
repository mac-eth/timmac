import { CheckCircledIcon } from "@radix-ui/react-icons";

import LandingPageBanner from "@timmac/ui/src/components/banner/banner-1";
import ScrollingBanner from "@timmac/ui/src/components/banner/scrolling-banner";
import Benefits1 from "@timmac/ui/src/components/benefits/benefits-1";
import HeroFeatures from "@timmac/ui/src/components/hero/auxiliary/hero-features";
import HeroStars from "@timmac/ui/src/components/hero/auxiliary/hero-stars";
import Hero from "@timmac/ui/src/components/hero/hero-1";
import Button from "@timmac/ui/src/components/misc/button";
import BigBrandsSocialProof from "@timmac/ui/src/components/social-proof/big-brands";

import BenUGC from "~/assets/nut-ninja/ben-model.png";
import BirchBoxLogoBlack from "~/assets/nut-ninja/birchbox-logo-black.svg";
import ForbesLogoBlack from "~/assets/nut-ninja/forbes-logo-black.svg";
import GQLogoBlack from "~/assets/nut-ninja/gq-logo-black.svg";
import HeroProduct from "~/assets/nut-ninja/hero-product.png";
import MensHealthLogoBlack from "~/assets/nut-ninja/mens-health-logo-black.svg";
import MensJournalLogoBlack from "~/assets/nut-ninja/mens-journal-logo-black.svg";

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
        BackgroundColor="bg-neutral-50"
        TextColor="text-neutral-950"
        ButtonColor="bg-neutral-950"
        ButtonTextColor="text-neutral-50"
        ButtonHref="https://trynutninja.com/checkouts/cn/c1-0b37647ad9552aeb92d0ad67d51efe5f"
        AccentColor="bg-gradient-to-r from-[#ff80b5] to-[#9089fc]"
      />
      <Hero
        socialProofComponent={
          <HeroStars
            textColor="text-neutral-50"
            starsColor="text-[#FFD700]"
            text={<span className="font-futuraPT">100+ 5 Star Reviews</span>}
            stars={5}
            className="mb-8 lg:mb-4"
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
        featuresComponent={
          <HeroFeatures
            textColor="text-neutral-50"
            icon={<CheckCircledIcon className="h-7 w-7" />}
            iconColor="text-[#FFD700]"
            features={[
              "No More Cuts, Knicks Or Razor Burn",
              "No More Awkward Angles & Itching",
              "Fastest & Easiest Way To Remove Hair",
            ]}
            className="mt-12 font-futuraPT text-xl "
          />
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
      <BigBrandsSocialProof
        BackgroundColor="bg-neutral-50"
        TextColor="text-neutral-950"
        Quote={
          <span className="font-futuraPT italic">
            &quot;I&apos;m So Happy I Stopped Using Razors And Started Using
            NutNinja!&quot;
          </span>
        }
        AccentColor="bg-gradient-to-r from-[#ff80b5] to-[#9089fc]"
        Logos={[
          {
            name: "Mens Journal",
            url: MensJournalLogoBlack as string,
          },
          {
            name: "Mens Health",
            url: MensHealthLogoBlack as string,
          },
          {
            name: "GQ",
            url: GQLogoBlack as string,
          },
          {
            name: "Birchbox",
            url: BirchBoxLogoBlack as string,
          },
          {
            name: "Forbes",
            url: ForbesLogoBlack as string,
          },
        ]}
      />
      <Benefits1
        BackgroundColor="bg-gradient-to-tr from-neutral-950 to-[#1C212B]"
        TitleColor="text-neutral-50"
        TextColor="text-neutral-200"
        Title="Why Are So Many People Switching to Nutninja?"
        Description="Nutninja is the fastest and easiest way to remove unwanted hair. No more cuts, knicks, razor burn, or awkward angles. Just smooth, silky skin."
        ImageURL={BenUGC}
        ImageAlt="Ben using Nutninja"
        ImageClassName=" md:absolute bottom-0 left-1/4 h-[22rem] lg:h-[36rem] w-auto object-contain"
        Features={[
          {
            Name: "No More Cuts, Knicks Or Razor Burn",
            Description:
              "Nutninja is the fastest and easiest way to remove unwanted hair. No more cuts, knicks, razor burn, or awkward angles. Just smooth, silky skin.",
            Icon: CheckCircledIcon,
          },
          {
            Name: "No More Awkward Angles & Itching",
            Description:
              "Nutninja is the fastest and easiest way to remove unwanted hair. No more cuts, knicks, razor burn, or awkward angles. Just smooth, silky skin.",
            Icon: CheckCircledIcon,
          },
          {
            Name: "Fastest & Easiest Way To Remove Hair",
            Description:
              "Nutninja is the fastest and easiest way to remove unwanted hair. No more cuts, knicks, razor burn, or awkward angles. Just smooth, silky skin.",
            Icon: CheckCircledIcon,
          },
        ]}
      />
    </>
  );
}
