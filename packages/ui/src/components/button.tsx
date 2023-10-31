import Link from "next/link";
import { cn } from "~/utils/cn";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  href: string;
}

export default function Button({
  children,
  className,
  href,
}: ButtonProps): JSX.Element {
  return (
    <Link href={href} passHref>
      <button
        className={cn(
          "focus-visible:ring-ring inline-flex justify-center whitespace-nowrap rounded-full px-8 py-4 text-xl font-medium shadow-md transition-colors duration-300 hover:bg-neutral-300 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none",
          className,
        )}
      >
        {children}
      </button>
    </Link>
  );
}
