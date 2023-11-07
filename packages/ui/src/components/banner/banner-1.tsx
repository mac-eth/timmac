import React from "react";
import Link from "next/link";

import { cn } from "../../utils/cn";

interface BannerProps {
  MainText: React.ReactNode;
  ButtonText: React.ReactNode;
  BackgroundColor?: string;
  TextColor?: string;
  ButtonColor?: string;
  ButtonTextColor?: string;
  ButtonHref?: string;
  AccentColor?: string;
}

export default function Banner({
  MainText,
  ButtonText,
  BackgroundColor,
  TextColor,
  ButtonColor,
  ButtonTextColor,
  ButtonHref,
  AccentColor,
}: BannerProps) {
  const containerClasses = cn(
    "relative isolate flex items-center justify-center gap-x-6 overflow-hidden px-6 py-2.5 text-lg sm:px-3.5",
    BackgroundColor,
    TextColor,
  );

  const buttonClasses = cn(
    "text-md flex w-full justify-center rounded-full px-4 py-1 font-semibold shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 lg:max-w-max lg:flex-none lg:text-sm ",
    ButtonColor,
    ButtonTextColor,
  );

  return (
    <div className={containerClasses}>
      {/* Left Colored Path */}
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className={cn(
            `aspect-[577/310] w-[36.0625rem] opacity-30`,
            AccentColor,
          )}
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>

      {/* Right Colored Path */}
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className={cn(
            `aspect-[577/310] w-[36.0625rem] opacity-30`,
            AccentColor,
          )}
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:flex-row">
        {MainText}
        <Link href={ButtonHref ? ButtonHref : ""} className={buttonClasses}>
          {ButtonText}
        </Link>
      </div>
    </div>
  );
}
