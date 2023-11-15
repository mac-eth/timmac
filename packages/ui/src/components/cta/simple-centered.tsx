import React from "react";

import { cn } from "~/utils/cn";
import Container from "../sections/container";

interface SimpleCenteredProps {
  className?: string;
  mainText: React.ReactNode;
  mainTextColor?: string;
  subText?: React.ReactNode;
  subTextColor?: string;
  cta: React.ReactNode;
}

export default function SimpleCentered({
  className,
  mainText,
  mainTextColor,
  subText,
  subTextColor,
  cta,
}: SimpleCenteredProps) {
  const ContainerClasses = cn(
    "px-6 py-24 sm:px-6 sm:py-32 lg:px-8 text-center",
    className,
  );
  return (
    <div className={ContainerClasses}>
      <Container>
        <div className={mainTextColor}>{mainText}</div>
        <div className={subTextColor}>{subText}</div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {cta}
        </div>
      </Container>
    </div>
  );
}
