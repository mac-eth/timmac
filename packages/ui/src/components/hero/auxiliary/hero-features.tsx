import { cn } from "~/utils/cn";

interface HeroFeaturesProps {
  className?: string;
  icon: React.ReactNode;
  iconColor: string;
  features: string[];
  textColor: string;
}

export default function HeroFeatures({
  className,
  icon,
  iconColor,
  features,
  textColor,
}: HeroFeaturesProps) {
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
              iconColor,
            )}
          >
            {icon}
          </div>
          <span className={cn("ml-2 text-start lg:text-center", textColor)}>
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
}
