"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { StarFilledIcon } from "@radix-ui/react-icons";

import { cn } from "~/utils/cn";
import Button from "../misc/button";
import Container from "../sections/container";

interface TestimonialCardProps {
  imageURL: StaticImageData;
  imageAlt: string;
  cardClass?: string;
  cardHeadingClass?: string;
  cardHeadingText: React.ReactNode;
  cardTextClass?: string;
  cardText: React.ReactNode;
  cardAuthorClass?: string;
  author: React.ReactNode;
  stars: number;
}

interface TestimonialCarouselProps {
  sectionTitle: React.ReactNode;
  mainTextColor?: string;
  subText?: React.ReactNode;
  subTextColor?: string;
  mainSectionColor?: string;
  testimonialCards: TestimonialCardProps[];
  button: React.ReactNode;
}

function TestimonialCard({
  imageURL,
  imageAlt,
  cardClass,
  cardHeadingClass,
  cardHeadingText,
  cardTextClass,
  cardText,
  cardAuthorClass,
  author,
  stars,
}: TestimonialCardProps) {
  const CardClasses = cn(
    "flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-neutral-950 pb-4 shadow-lg shadow-neutral-500",
    cardClass,
  );

  const HeadingClasses = cn(
    "text-2xl sm:text-3xl lg:text-3xl text-center text-neutral-50 font-neueEinstellung",
    cardHeadingClass,
  );

  const mainTextClasses = cn(
    "px-4 text-center text-xl leading-tight text-neutral-200",
    cardTextClass,
  );
  return (
    <div className={CardClasses}>
      <div className="h-1/3 w-full bg-cover bg-center">
        <Image
          alt={imageAlt}
          className="h-full w-full object-cover"
          height="200"
          src={imageURL}
          style={{
            aspectRatio: "300/200",
            objectFit: "cover",
          }}
          width="300"
        />
      </div>
      <div className="px-4">
        <div className="mb-4 flex flex-row justify-center">
          {[...Array<undefined>(stars)].map((_, index) => (
            <StarFilledIcon key={index} className={`h-6 w-6 text-[#FFD700]`} />
          ))}
        </div>
        <h3 className={HeadingClasses}>{cardHeadingText}</h3>
      </div>

      <blockquote className={mainTextClasses}>{cardText}</blockquote>
      <div className={cn("flex gap-x-4 text-neutral-300", cardAuthorClass)}>
        <span>{author}</span>
        <span className="">Verified Customer</span>
      </div>
    </div>
  );
}

export default function TestimonialCarousel({
  sectionTitle,
  mainTextColor,
  subText,
  subTextColor,
  mainSectionColor,
  testimonialCards,
  button,
}: TestimonialCarouselProps) {
  const mainTextClasses = cn(
    "mt-2 font-neueEinstellung text-4xl tracking-tight sm:text-5xl",
    mainTextColor,
  );

  const subTextClasses = cn(
    "mx-auto mt-6 max-w-2xl text-center text-2xl",
    subTextColor,
  );

  const mainSectionClasses = cn(
    "my-16 flex flex-col items-center justify-center md:my-20 lg:my-24",
    mainSectionColor,
  );

  return (
    <Container className={mainSectionClasses}>
      <div className="mx-auto max-w-4xl text-center">
        <div className={mainTextClasses}>{sectionTitle}</div>
      </div>
      <div className={subTextClasses}>{subText}</div>

      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-6xl lg:grid-cols-3"
      >
        {testimonialCards.map((testimonialCard) => (
          <TestimonialCard
            {...testimonialCard}
            key={testimonialCard.imageAlt}
          />
        ))}
      </ul>
      {button}
    </Container>
  );
}
