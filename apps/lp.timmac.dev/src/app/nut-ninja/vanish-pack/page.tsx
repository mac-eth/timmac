import Benefits from "~/components/landing-page/benefits-2";
import Hero from "~/components/landing-page/hero-1";
import HeroProduct from "~/assets/nut-ninja/hero-product.png";
import LandingPageBanner from "~/components/landing-page/banner";
import Link from "next/link";
import { StarFilledIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <>
      <LandingPageBanner
        BgColor="neutral-50"
        TextColor="neutral-950"
        Color1="#ff80b5"
        Color2="#9089fc"
        MainText={
          <p className="text-center text-neutral-950 lg:text-left">
            <strong className="">GET FREE SHIPPING</strong>
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
          <Link
            href="https://trynutninja.com/checkouts/cn/c1-0b37647ad9552aeb92d0ad67d51efe5f"
            className={`text-md flex w-full justify-center rounded-full bg-neutral-950 px-4 py-1 font-semibold text-neutral-50 shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 lg:max-w-max lg:flex-none lg:text-sm`}
          >
            SHOP NOW <span aria-hidden="true">&rarr;</span>
          </Link>
        }
      />
      <Hero
        SocialProof={
          <div className="font-futuraPT my-8 flex items-center justify-center text-lg uppercase text-white underline lg:justify-start">
            <div className="flex flex-row ">
              <StarFilledIcon className="h-7 w-7" />
              <StarFilledIcon className="h-7 w-7" />
              <StarFilledIcon className="h-7 w-7" />
              <StarFilledIcon className="h-7 w-7" />
              <StarFilledIcon className="h-7 w-7" />
            </div>
            <span className="ml-2 flex text-base">100+ 5 Star Reviews </span>
          </div>
        }
        MainText={
          <h1 className="font-neueEinstellung text-5xl font-bold uppercase text-white sm:text-6xl lg:text-[90px]">
            Worlds <span className="italic underline">Fastest</span> Hair
            Removal Cream
          </h1>
        }
        SubText={
          <p className="mt-6 text-xl text-white lg:text-2xl">
            <span className="font-futuraPTDemi underline">
              ASSASSINATE YOUR PUBIC HAIRS
            </span>{" "}
            WITH THE STEALTH, SPEED AND PRECISION OF NUTNINJA.
          </p>
        }
        CtaText="BUY NOW & GET FREE SHIPPING!"
        CtaLink="https://trynutninja.com/checkouts/cn/c1-0b37647ad9552aeb92d0ad67d51efe5f"
        ImageURL={HeroProduct}
        ImageAlt="Nut Ninja Bundle"
        ImageClassName="h-auto w-[62rem]"
      />
      <Benefits />
    </>
  );
}
