import { cn } from "~/utils/cn";

interface SingleQuoteSocialProofProps {
  BackgroundColor: string;
  TextColor: string;
  Quote: React.ReactNode;
}

export default function SingleQuoteSocialProof({
  BackgroundColor,
  TextColor,
  Quote,
}: SingleQuoteSocialProofProps) {
  const containerClasses = cn(
    "relative isolate flex items-center justify-center gap-x-6 overflow-hidden px-6 py-8 text-lg sm:px-3.5",
    BackgroundColor,
    TextColor,
  );

  return (
    <div className={containerClasses}>
      <div>{Quote}</div>
    </div>
  );
}
