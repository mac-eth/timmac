import { cn } from "~/utils/cn";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        " px-5 md:max-w-screen-xl lg:mx-auto lg:max-w-screen-2xl ",
        className,
      )}
    >
      {children}
    </section>
  );
}
