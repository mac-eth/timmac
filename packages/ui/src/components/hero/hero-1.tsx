import Image from "next/image";
import type { StaticImageData } from "next/image";

import { cn } from "~/utils/cn";
import Container from "../sections/container";

interface LandingPageHeroProps {
  className?: string;
  socialProofComponent?: React.ReactNode; // Optional social proof component
  mainText: React.ReactNode; // Main text is required
  subText: React.ReactNode; // Sub text is required
  featuresComponent?: React.ReactNode; // Optional features component
  ctaComponent?: React.ReactNode; // Optional CTA component
  backgroundColor?: string; // Optional background color
  mainTextColor?: string; // Optional main text color
  subTextColor?: string; // Optional sub text color
  imageURL: StaticImageData; // Image URL is required
  imageAlt: string; // Image alt text is required
  imageClassName?: string; // Optional image class name
}

export default function LandingPageHero({
  className,
  socialProofComponent,
  mainText,
  subText,
  featuresComponent,
  ctaComponent,
  backgroundColor = "bg-white", // Default background color
  mainTextColor = "text-neutral-950", // Default main text color
  subTextColor = "text-neutral-950", // Default sub text color
  imageURL,
  imageAlt,
  imageClassName,
}: LandingPageHeroProps): JSX.Element {
  const mainTextClasses = cn(
    "text-5xl text-white sm:text-6xl lg:text-7xl",
    mainTextColor,
  );
  const subTextClasses = cn("text-xl lg:text-2xl", subTextColor);
  const containerClasses = cn(
    "relative isolate h-[90vh] overflow-hidden",
    backgroundColor,
    className,
  );

  return (
    <div className={containerClasses}>
      <Container>
        <div className="px:6 max-w-7xl pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-24">
          <div className="max-w-2xl flex-shrink-0 text-center md:max-w-2xl md:text-left lg:mx-0 lg:flex lg:flex-col lg:justify-center lg:pt-8">
            {socialProofComponent}
            <div className={mainTextClasses}>{mainText}</div>
            <div className={subTextClasses}>{subText}</div>
            {featuresComponent}
            {ctaComponent}
          </div>
          <div className="relative -z-10 mx-auto flex max-w-2xl -translate-y-1/2 translate-x-1/4 justify-center opacity-70 lg:-mt-20 lg:ml-10 lg:mr-0 lg:max-w-none lg:flex-none lg:translate-x-0 lg:translate-y-0 lg:opacity-100 xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none ">
              <Image
                src={imageURL}
                alt={imageAlt}
                className={cn("h-auto w-full", imageClassName)}
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
