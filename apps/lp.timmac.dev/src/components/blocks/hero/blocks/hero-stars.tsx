import React from "react";
import { StarFilledIcon } from "@radix-ui/react-icons";

import { cn } from "~/utils/cn";

interface HeroStarsProps {
  text: React.ReactNode;
  stars: {
    className?: string;
    number: number;
  };
  className?: string;
}

export default function HeroStars({ text, stars, className }: HeroStarsProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center text-xl uppercase lg:justify-start",
        className,
      )}
    >
      <div className="flex flex-row ">
        {[...Array<undefined>(stars.number)].map((_, index) => (
          <StarFilledIcon
            key={index}
            className={cn(`h-7 w-7`, stars.className)}
          />
        ))}
      </div>
      <span>{text}</span>
    </div>
  );
}
