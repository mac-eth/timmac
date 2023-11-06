import Image from "next/image";

import type { BenefitProps } from "~/types";
import { cn } from "~/utils/cn";
import Button from "../misc/button";
import Container from "../sections/container";

export default function Benefits({
  BackgroundColor,
  TitleColor,
  TextColor,
  AccentColor,
  Title,
  Description,
  FeatureClassName,
  ImageURL,
  ImageAlt,
  ImageClassName,
  Features,
  Button,
}: BenefitProps) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-neutral-950 py-16 md:py-24",
        BackgroundColor,
      )}
    >
      <Container>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 md:max-w-none lg:mx-0 lg:grid-cols-2">
          <div className=" lg:pl-4 lg:pt-4">
            <div className=" lg:max-w-lg">
              <h2
                className={cn(
                  "mt-2 text-center text-3xl text-neutral-50 sm:text-4xl md:text-start",
                  TitleColor,
                )}
              >
                {Title}
              </h2>
              <p
                className={cn(
                  "mt-6 text-lg leading-8 text-neutral-200",
                  TextColor,
                )}
              >
                {Description}
              </p>
              <dl
                className={
                  (cn(
                    "mt-10 max-w-xl space-y-8 text-base leading-7 text-neutral-300 lg:max-w-none",
                  ),
                  TextColor)
                }
              >
                {Features.map((feature) => (
                  <div key={feature.Name} className="relative my-4 pl-20">
                    <dt className={cn(" inline", FeatureClassName)}>
                      <Image
                        className={cn(
                          "absolute left-1 top-4 h-16 w-auto md:top-1",
                          AccentColor,
                        )}
                        src={feature.Icon}
                        alt={feature.Name}
                        aria-hidden="true"
                      />
                      {feature.Name}
                    </dt>
                    <br />
                    <dd className="inline">{feature.Description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-center lg:order-first">
            <Image src={ImageURL} alt={ImageAlt} className={ImageClassName} />
          </div>
        </div>
        {Button && <div className="mt-12 flex justify-center">{Button}</div>}
      </Container>
    </div>
  );
}
