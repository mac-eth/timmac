interface LandingPageBannerProps {
  BgColor: string;
  TextColor: string;
  Color1?: string;
  Color2?: string;
  MainText: React.ReactNode;
  ButtonText: React.ReactNode;
}

export default function LandingPageBanner({
  Color1,
  Color2,
  MainText,
  ButtonText,
}: LandingPageBannerProps) {
  return (
    <div
      className={`relative isolate flex items-center justify-center gap-x-6 overflow-hidden bg-neutral-50 px-6 py-2.5 text-lg text-neutral-950 sm:px-3.5 `}
    >
      {Color1 && Color2 && (
        <div>
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className={`aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[${Color1}] to-[${Color2}] opacity-30`}
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className={`aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[${Color1}] to-[${Color2}] opacity-30`}
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:flex-row">
        {MainText}
        {ButtonText}
      </div>
    </div>
  );
}
