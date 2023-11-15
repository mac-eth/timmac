import Image from "next/image";

import { cn } from "~/utils/cn";

interface Logo {
  name: string;
  url: string;
  height: number;
  width: number;
}

interface BigBrandsSocialProofProps {
  AccentColor?: string;
  BackgroundColor: string;
  TextColor: string;
  Quote: React.ReactNode;
  Logos: Logo[];
}

export default function BigBrandsSocialProof({
  AccentColor,
  BackgroundColor,
  TextColor,
  Quote,
  Logos,
}: BigBrandsSocialProofProps) {
  const ContainerClass = cn(
    "flex justify-center py-12 sm:py-16 relative isolate",
    BackgroundColor,
  );

  return (
    <div className={ContainerClass}>
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
      <div className="mx-auto flex max-w-7xl flex-col justify-center px-6 lg:px-8">
        <h2 className={cn("text-center text-xl lg:text-2xl", TextColor)}>
          {Quote}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-2 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-2 lg:mx-0 lg:max-w-4xl lg:grid-cols-5 lg:gap-x-6">
          {Logos.map((logo, index) => (
            <Image
              key={logo.name}
              className={cn(
                `col-span-2 h-12 w-full object-contain sm:col-start-auto lg:col-span-1`,
              )}
              src={logo.url}
              alt={logo.name}
              height={logo.height}
              width={logo.width}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
