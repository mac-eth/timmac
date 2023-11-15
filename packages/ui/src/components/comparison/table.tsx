import React, { Fragment } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { CheckIcon, MinusIcon } from "@radix-ui/react-icons";

import { cn } from "~/utils/cn";
import Container from "../sections/container";

interface ComparisonProps {
  mainText: React.ReactNode;
  mainTextColor?: string;
  groups: {
    name: string;
    imageURL?: StaticImageData;
    imageAlt?: string;
    id: string;
    mostPopular: boolean;
  }[];
  sections: {
    name: string;
    features: {
      name: string;
      groups: Record<string, boolean | string>;
    }[];
  }[];
}

export default function ComparisonTable({
  mainText,
  mainTextColor,
  sections,
  groups,
}: ComparisonProps) {
  const mainTextClasses = cn(
    "mt-2 font-neueEinstellung text-4xl tracking-tight sm:text-5xl text-center",
    mainTextColor,
  );
  return (
    <div className=" mx-auto max-w-3xl py-24 sm:py-32">
      <Container>
        <div className={mainTextClasses}>{mainText}</div>
        <div className="isolate mt-20 block">
          <div className="relative -mx-8">
            {groups.some((tier) => tier.mostPopular) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                {/* Desktop  */}
                <div
                  className="flex w-[40vw] px-4 lg:hidden "
                  aria-hidden="true"
                  style={{
                    marginLeft: `${
                      (groups.findIndex((tier) => tier.mostPopular) + 1) * 26
                    }%`,
                  }}
                >
                  <div className="w-full rounded-t-xl border-x border-t border-neutral-900/10 bg-[#d4e7fe]/5" />
                </div>
                <div
                  className="hidden w-[40vw] px-4 lg:flex "
                  aria-hidden="true"
                  style={{
                    marginLeft: `${
                      (groups.findIndex((tier) => tier.mostPopular) + 1) * 24
                    }%`,
                  }}
                >
                  <div className="w-full rounded-t-xl border-x border-t border-neutral-900/10 bg-[#d4e7fe]/20" />
                </div>
              </div>
            ) : null}
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/3" />
                <col className="w-1/3" />
                <col className="w-1/3" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {groups.map((tier) => (
                    <td key={tier.id} className="w-full lg:px-8 lg:pt-12 ">
                      {tier.imageURL && tier.imageAlt ? (
                        <Image
                          className="object-cover "
                          src={tier.imageURL}
                          alt={tier.imageAlt}
                        />
                      ) : (
                        <div className="text-center text-3xl">{tier.name}</div>
                      )}
                    </td>
                  ))}
                </tr>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={cn(
                          sectionIdx === 0 ? "pt-8" : "pt-16",
                          "pb-4 text-lg font-semibold leading-6 text-neutral-900",
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-neutral-900/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th
                          scope="row"
                          className="py-4 text-lg font-normal leading-6 text-neutral-900"
                        >
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-neutral-900/5" />
                        </th>
                        {groups.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.groups[tier.name] === "string" ? (
                              <div className="text-center text-lg leading-6 text-neutral-950">
                                {feature.groups[tier.name]}
                              </div>
                            ) : (
                              <>
                                {feature.groups[tier.name] === true ? (
                                  <CheckIcon
                                    className="mx-auto h-7 w-7 text-neutral-950"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <MinusIcon
                                    className="mx-auto h-7 w-7 text-neutral-950"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.groups[tier.name] === true
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
}
