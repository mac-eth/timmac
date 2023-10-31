import { Button } from "~/components/button";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { cn } from "~/utils/cn";

interface LandingPageHeroProps {
  className?: string;
  SocialProof?: React.ReactNode;
  MainText?: React.ReactNode;
  SubText?: React.ReactNode;
  CtaText?: string;
  CtaLink?: string;
  CtaClassname?: string;
  ImageURL?: StaticImageData;
  ImageAlt?: string;
  ImageClassName?: string;
}

export default function LandingPageHero({
  className,
  SocialProof,
  MainText,
  SubText,
  CtaText,
  CtaLink,
  CtaClassname,
  ImageURL,
  ImageAlt,
  ImageClassName,
}: LandingPageHeroProps): JSX.Element {
  return (
    <div className={cn("relative isolate h-[90vh] overflow-hidden", className)}>
        <div className="max-w-7xl px-6 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-24">
          <div className=" max-w-2xl flex-shrink-0 text-center md:max-w-2xl md:text-left lg:mx-0 lg:pt-8">
            {SocialProof}
            {MainText}
            {SubText}
            <div className="mt-10 flex items-center justify-center md:justify-start">
              {CtaLink && CtaText && (
                <Link href={CtaLink} passHref >
                <Button
                  className={cn(
                    "font-neueEinstellung bg-white text-base text-neutral-950",
                    CtaClassname,
                  )}
                >
                  {CtaText}
                </Button>
                                </Link>
              )}
            </div>
          </div>
          <div className="relative -z-10 mx-auto flex max-w-2xl -translate-y-1/2 translate-x-1/4 justify-center opacity-70 lg:-mt-20 lg:ml-10 lg:mr-0 lg:max-w-none lg:flex-none lg:translate-x-0 lg:translate-y-0 lg:opacity-100 xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              {ImageURL && ImageAlt && (
                <Image
                  src={ImageURL}
                  alt={ImageAlt}
                  className={cn("h-auto w-full", ImageClassName)}
                  priority
                />
              )}
            </div>
          </div>
        </div>
    </div>
  );
}
