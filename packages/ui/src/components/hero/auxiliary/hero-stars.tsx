import React from "react";
import { StarFilledIcon } from "@radix-ui/react-icons";

import { cn } from "~/utils/cn";

interface HeroStarsProps {
  text: React.ReactNode;
  stars: number;
  textColor?: string;
  starsColor?: string;
  className?: string;
}

export default function HeroStars({
  text,
  stars,
  textColor = "text-neutral-50",
  starsColor = "text-[#FFD700]",
  className,
}: HeroStarsProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center text-xl uppercase lg:justify-start",
        textColor,
        className,
      )}
    >
      <div className="flex flex-row ">
        {[...Array<undefined>(stars)].map((_, index) => (
          <StarFilledIcon key={index} className={`h-7 w-7 ${starsColor}`} />
        ))}
      </div>
      <span className={cn("ml-2 flex text-lg underline", textColor)}>
        {text}
      </span>
    </div>
  );
}
