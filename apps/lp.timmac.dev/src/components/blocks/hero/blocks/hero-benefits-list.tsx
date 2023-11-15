import { cn } from "~/utils/cn";

interface HeroIconListProps {
  className?: string;
  icon: React.ReactNode;
  iconClassName: string;
  features: string[];
  featureTextClassname: string;
}

export default function BenefitsList({
  className,
  icon,
  iconClassName,
  features,
  featureTextClassname,
}: HeroIconListProps) {
  return (
    <div className={className}>
      {features.map((feature, index) => (
        <div
          key={index}
          className={cn(
            "my-2 flex items-center justify-center md:justify-start ",
          )}
        >
          <div
            className={cn(
              "flex h-8 w-8 flex-grow-0 items-center justify-start rounded-full",
              iconClassName,
            )}
          >
            {icon}
          </div>
          <span
            className={cn(
              "ml-2 text-start lg:text-center",
              featureTextClassname,
            )}
          >
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
}
