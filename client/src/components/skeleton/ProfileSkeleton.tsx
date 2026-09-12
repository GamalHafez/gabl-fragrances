import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import { Container, PageWrapper } from "@/components/ui/common";

export const ProfileSkeleton = () => {
  const { isDark } = useTheme();

  const pulse = clsx(
    "animate-pulse rounded-lg",
    isDark ? "bg-neutral-800" : "bg-neutral-200",
  );

  return (
    <PageWrapper>
      <Container>
        <div className="flex flex-col items-start gap-3 p-5">
          <div className={clsx(pulse, "h-4 w-24")} />
          <div className={clsx(pulse, "h-8 w-64")} />
        </div>

        <div className="flex flex-col px-6">
          <div className={clsx(pulse, "mb-4 h-5 w-48")} />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={clsx(
                  "flex flex-col gap-3 rounded-2xl border px-5 py-4",
                  isDark
                    ? "border-neutral-800 bg-neutral-900"
                    : "border-neutral-200 bg-white",
                )}
              >
                <div className="flex items-center justify-between">
                  <div className={clsx(pulse, "h-4 w-20")} />
                  <div className={clsx(pulse, "h-4 w-4 rounded-full")} />
                </div>
                <div className={clsx(pulse, "h-3 w-32")} />
              </div>
            ))}
          </div>

          <div className={clsx(pulse, "mt-10 h-24 w-full rounded-2xl")} />

          <div className="mt-16 mb-10 flex flex-col gap-3">
            <div className={clsx(pulse, "h-4 w-28")} />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={clsx(pulse, "h-16 w-full")} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </PageWrapper>
  );
};
