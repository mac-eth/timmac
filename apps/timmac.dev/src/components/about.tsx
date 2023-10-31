import Button from "~/components/ui/button";
import Container from "~/components/ui/container";
import { useSize } from "~/contexts/sizeContext";
import { bounceAnimation, staggeredAnimationFast } from "~/utils/animations";
import { useParallax } from "~/utils/useParallax";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

interface AboutProps {
  children?: React.ReactNode;
  cta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  imageDirection: "left" | "right";
  imageSrc: StaticImageData;
  title: string;
}

export default function About({
  children,
  cta,
  ctaText,
  ctaLink,
  imageDirection,
  imageSrc,
  title,
}: AboutProps): JSX.Element {
  const { setSize } = useSize();
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Container className="">
      <motion.dl
        initial="initial"
        ref={ref}
        animate={isInView ? "animate" : "initial"}
        variants={staggeredAnimationFast}
        className="border-t border-white/20 bg-black lg:grid lg:grid-cols-2 lg:py-16 "
      >
        <motion.ul
          className={`${
            imageDirection === "left" ? "order-first" : "order-last"
          } flex items-end justify-center border-b border-white/20 `}
          variants={bounceAnimation}
        >
          <Image
            src={imageSrc}
            alt={title}
            className="h-auto w-2/3 "
            onMouseEnter={() => setSize(120)}
            onMouseLeave={() => setSize(40)}
          />
        </motion.ul>
        <div className="flex flex-col gap-y-6 p-8 text-center lg:text-start">
          <motion.ul variants={bounceAnimation}>
            <h1
              className="font-coolvetica text-7xl uppercase text-white lg:text-8xl  "
              onMouseEnter={() => setSize(80)}
              onMouseLeave={() => setSize(40)}
            >
              {title}
            </h1>
          </motion.ul>
          <motion.ul
            variants={bounceAnimation}
            className="my-6 lg:my-8 lg:mr-12"
          >
            <span className=" text-xl text-white lg:text-left lg:text-2xl">
              {children}
            </span>
          </motion.ul>
          <motion.ul variants={bounceAnimation}>
            {cta && ctaLink && ctaText && (
              <Button className="" href={ctaLink}>
                {ctaText}
              </Button>
            )}
          </motion.ul>
        </div>
      </motion.dl>
    </Container>
  );
}
