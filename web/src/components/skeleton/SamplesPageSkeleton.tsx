import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

export const SamplesPageSkeleton = () => {
  const { isDark } = useTheme();

  const skeletonClass = isDark ? "bg-zinc-800/70" : "bg-zinc-200";

  return (
    <section className="grid gap-10 md:py-10 lg:grid-cols-2 lg:items-start">
      {/* Shared Samples Image */}
      <div
        className={clsx(
          "mx-auto w-4/5 overflow-hidden rounded-2xl border p-4 shadow-xl backdrop-blur-xl md:w-full md:p-8",
          isDark
            ? "border-zinc-700/30 bg-zinc-900/30"
            : "border-white/20 bg-white/10",
        )}
      >
        <div
          className={clsx(
            "aspect-square w-full animate-pulse rounded-2xl",
            skeletonClass,
          )}
        />
      </div>

      {/* Samples Info */}
      <div className="flex h-full flex-col justify-center space-y-5 px-4 md:px-0">
        {/* Badge */}
        <div
          className={clsx("h-7 w-24 animate-pulse rounded-full", skeletonClass)}
        />

        {/* Product Header */}
        <div className="space-y-3">
          <div
            className={clsx(
              "h-9 w-3/4 animate-pulse rounded-md",
              skeletonClass,
            )}
          />

          <div
            className={clsx(
              "h-5 w-1/2 animate-pulse rounded-md",
              skeletonClass,
            )}
          />

          <div
            className={clsx("h-7 w-28 animate-pulse rounded-md", skeletonClass)}
          />
        </div>

        {/* Sample Selection */}
        <div className="space-y-3">
          <div
            className={clsx("h-4 w-40 animate-pulse rounded-md", skeletonClass)}
          />

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={clsx("h-10 animate-pulse rounded-lg", skeletonClass)}
              />
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div
          className={clsx(
            "h-11 w-full animate-pulse rounded-lg",
            skeletonClass,
          )}
        />

        {/* Action */}
        <div
          className={clsx(
            "h-12 w-full animate-pulse rounded-lg",
            skeletonClass,
          )}
        />

        {/* Product Link */}
        <div
          className={clsx(
            "mx-auto h-5 w-40 animate-pulse rounded-md",
            skeletonClass,
          )}
        />
      </div>
    </section>
  );
};
