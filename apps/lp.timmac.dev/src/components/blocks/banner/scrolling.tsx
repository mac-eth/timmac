"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";

import { cn } from "~/utils/cn";

interface ScrollingBannerProps {
  Text: React.ReactNode;
  TextColor: string;
  backgroundColor: string;
  baseVelocity: number;
}

export default function ScrollingBanner({
  Text,
  TextColor,
  backgroundColor,
  baseVelocity = 3,
}: ScrollingBannerProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={cn(
        "relative m-0 flex flex-nowrap items-center overflow-hidden whitespace-nowrap",
        backgroundColor,
      )}
    >
      <motion.div
        style={{
          x,
        }}
        className={cn(
          "flex flex-row flex-nowrap items-center whitespace-nowrap py-4 md:py-6 lg:py-8 ",
          TextColor,
        )}
      >
        {Array.from({ length: 8 }).map(() => (
          <span className="mx-4 " key="banner title">
            {Text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
