import { CheckCircledIcon } from "@radix-ui/react-icons";

import LandingPageBanner from "@timmac/ui/src/components/banner/banner-1";
import Benefits1 from "@timmac/ui/src/components/benefits/benefits-1";
import HeroFeatures from "@timmac/ui/src/components/hero/auxiliary/hero-features";
import HeroStars from "@timmac/ui/src/components/hero/auxiliary/hero-stars";
import Hero from "@timmac/ui/src/components/hero/hero-1";
import Button from "@timmac/ui/src/components/misc/button";
import ProductSection from "@timmac/ui/src/components/products/product-section";
import BigBrandsSocialProof from "@timmac/ui/src/components/social-proof/big-brands";
import TestimonialCarousel from "@timmac/ui/src/components/social-proof/testimonials";

import BirchBoxLogoBlack from "~/assets/nut-ninja/birchbox-logo-black.svg";
import ForbesLogoBlack from "~/assets/nut-ninja/forbes-logo-black.svg";
import GQLogoBlack from "~/assets/nut-ninja/gq-logo-black.svg";
import HeroProduct from "~/assets/nut-ninja/hero-product.png";
import LogoLeaf from "~/assets/nut-ninja/icons/leaf.svg";
import LogoNatural from "~/assets/nut-ninja/icons/natural.svg";
import LogoNoBadChecmicals from "~/assets/nut-ninja/icons/no-bad-chemicals.svg";
import ManApplyingCream from "~/assets/nut-ninja/Man-Applying-Face-Cream-Skincare.jpg";
import MenGroup from "~/assets/nut-ninja/men.webp";
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
            text={<span className="font-futuraPT">10,000+ 5 Star Reviews</span>}
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
            underText={
              <p className="mt-2 items-center text-neutral-50">
                <span className="text-md uppercase">
                  14-Day Satisfaction Guarantee
                </span>
              </p>
            }
          />
        }
        backgroundColor="bg-gradient-to-tr from-[#1C212B] to-neutral-950" // Replace with actual color class for the background
        mainTextColor="text-neutral-50" // Text color for the main text
        subTextColor="text-neutral-50" // Text color for the subtext
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
        Title={
          <span className="font-futuraPTDemi uppercase">
            Why Is Everyone Switching From Razors To NutNinja?
          </span>
        }
        FeatureClassName={"text-neutral-50 font-futuraPTDemi text-xl uppercase"}
        ImageURL={MenGroup}
        ImageAlt="Nutninja"
        ImageClassName="w-[24rem] md:w-[40rem] h-auto max-w-none rounded-xl shadow-xl ring-neutral-50 ring-1"
        Features={[
          {
            Name: "No More Cuts, Knicks Or Razor Burn",
            Description:
              "Nutninja is the fastest and easiest way to remove unwanted hair. No more cuts, knicks, razor burn, or awkward angles. Just smooth, silky skin.",
            Icon: LogoNoBadChecmicals as string,
          },
          {
            Name: "Crafted from Natural Ingredients",
            Description:
              "Nutninja is the fastest and easiest way to remove unwanted hair. No more cuts, knicks, razor burn, or awkward angles. Just smooth, silky skin.",
            Icon: LogoNatural as string,
          },
          {
            Name: "Fastest & Easiest Way To Remove Hair",
            Description:
              "Nutninja is the fastest and easiest way to remove unwanted hair. No more cuts, knicks, razor burn, or awkward angles. Just smooth, silky skin.",
            Icon: LogoLeaf as string,
          },
        ]}
        Button={
          <Button
            href="https://trynutninja.com/checkouts/cn/c1-0b37647ad9552aeb92d0ad67d51efe5f"
            text={
              <p className="uppercase">
                Join The <span className="font-futuraPTDemi">#NutNation</span>{" "}
                Now!
              </p>
            }
            backgroundColor="bg-neutral-50"
            textColor="text-neutral-950"
            underText={
              <p className="mt-2 items-center text-neutral-50">
                <span className="text-md uppercase underline">
                  14-Day Satisfaction Guarantee
                </span>
              </p>
            }
          />
        }
      />
      <TestimonialCarousel
        testimonialCards={[
          {
            imageURL: ManApplyingCream,
            imageAlt: "Testimonial",
            cardHeadingText: "NutNinja has been a gamechanger!",
            cardText:
              "I'm so happy I stopped using razors and started using NutNinja! It's so easy to use and I don't have to worry about razor burn or cuts anymore. I'm never going back to razors again!",
            author: "John Doe",
            stars: 5,
          },
          {
            imageURL: ManApplyingCream,
            imageAlt: "Testimonial",
            cardHeadingText: "NutNinja has been a gamechanger!",
            cardText:
              "I'm so happy I stopped using razors and started using NutNinja! It's so easy to use and I don't have to worry about razor burn or cuts anymore. I'm never going back to razors again!",
            author: "John Doe",
            stars: 5,
          },
          {
            imageURL: ManApplyingCream,
            imageAlt: "Testimonial",
            cardHeadingText: "NutNinja has been a gamechanger!",
            cardText:
              "I'm so happy I stopped using razors and started using NutNinja! It's so easy to use and I don't have to worry about razor burn or cuts anymore. I'm never going back to razors again!",
            author: "John Doe",
            stars: 5,
          },
        ]}
        sectionTitle={
          <h3 className="font-futuraPTDemi uppercase">
            JOIN THE <span className="underline">#NutNation</span>!
          </h3>
        }
        button={
          <Button
            text="Shop Now"
            href="https://trynutninja.com/checkouts/cn/c1-0b37647ad9552aeb92d0ad67d51efe5f"
            className="mt-16"
            backgroundColor="bg-neutral-950"
            textColor="text-neutral-50"
          />
        }
      />
      <ProductSection />
    </>
  );
}
