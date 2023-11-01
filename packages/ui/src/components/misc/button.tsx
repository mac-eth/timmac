import Link from "next/link";

import { cn } from "~/utils/cn";

interface ButtonProps {
  text: React.ReactNode;
  logo?: React.ReactNode; // Optional logo
  textColor?: string;
  backgroundColor?: string;
  href: string;
  className?: string;
}

export default function Button({
  text,
  logo,
  textColor = "text-neutral-950", // Default text color
  backgroundColor = "bg-white", // Default background color
  href,
  className,
}: ButtonProps): JSX.Element {
  return (
    <Link href={href} passHref>
      <button
        className={cn(
          " inline-flex items-center justify-center whitespace-nowrap rounded-full px-8 py-4 text-xl font-medium shadow-md transition-colors duration-300 hover:bg-neutral-300 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none",
          textColor,
          backgroundColor,
          className,
        )}
      >
        {text}
        {logo && <span className="ml-2">{logo}</span>}
      </button>
    </Link>
  );
}
