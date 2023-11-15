import Image from "next/image";

import { cn } from "~/utils/cn";
import Container from "../../sections/container";

interface DefaultHeroProps {
  className?: string;
  contentSectionComponents: {
    component: React.ReactNode;
    className?: string;
  }[];
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
}

const nextPublicS3Endpoint = process.env.NEXT_PUBLIC_S3_ENDPOINT;
const nextPublicS3Bucket = process.env.NEXT_PUBLIC_S3_BUCKET;

export default function DefaultHero({
  className,
  contentSectionComponents,
  image,
}: DefaultHeroProps): JSX.Element {
  const containerClasses = cn(
    "relative isolate h-[90vh] overflow-hidden",
    className,
  );

  return (
    <div className={containerClasses}>
      <Container>
        <div className="max-w-7xl px-6 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-24">
          <div className="max-w-2xl flex-shrink-0 text-center md:max-w-2xl md:text-left lg:mx-0 lg:flex lg:flex-col lg:justify-center lg:pt-8">
            {contentSectionComponents.map(({ component, className }, index) => (
              <div key={index} className={className}>
                {component}
              </div>
            ))}
          </div>
          <div className="relative -z-10 mx-auto flex max-w-2xl -translate-y-1/2 translate-x-1/4 justify-center opacity-70 lg:-mt-20 lg:ml-10 lg:mr-0 lg:max-w-none lg:flex-none lg:translate-x-0 lg:translate-y-0 lg:opacity-100 xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none ">
              <Image
                src={`${nextPublicS3Endpoint}/${nextPublicS3Bucket}/${image.url}`}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={cn("h-auto w-full", image.className)}
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
