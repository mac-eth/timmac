import Link from "next/link";

import { cn } from "~/utils/cn";

interface ButtonProps {
  text: React.ReactNode;
  logo?: React.ReactNode; // Optional logo
  textColor?: string;
  backgroundColor?: string;
  href: string;
  className?: string;
  underText?: React.ReactNode;
}

export default function Button({
  text,
  logo,
  textColor = "text-neutral-950", // Default text color
  backgroundColor = "bg-white", // Default background color
  href,
  className,
  underText,
}: ButtonProps): JSX.Element {
  return (
    <Link href={href} passHref className="flex-col items-start md:flex">
      <div className="flex flex-col items-center">
        <button
          className={cn(
            "flex items-center justify-center whitespace-nowrap rounded-full px-8 py-4 text-xl font-medium shadow-md transition-all duration-300 hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none",
            textColor,
            backgroundColor,
            className,
          )}
        >
          {text}
          {logo && <span className="ml-2">{logo}</span>}
        </button>
        {underText && underText}
      </div>
    </Link>
  );
}
