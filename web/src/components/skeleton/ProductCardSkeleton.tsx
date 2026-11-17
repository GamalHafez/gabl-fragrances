import clsx from "clsx";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import { useTheme } from "@/context/theme/useTheme";

export const ProductCardSkeleton = () => {
  const { isDark } = useTheme();

  // One tone for every placeholder block, so the card reads as a single surface
  const block = isDark ? "bg-white/10" : "bg-zinc-200";
  const accentBlock = isDark ? "bg-white/15" : "bg-zinc-300/80";

  return (
    <article
      className="mt-20 flex flex-col items-center rounded-3xl"
      aria-busy="true"
    >
      {/* Image */}
      <Skeleton className={clsx("aspect-square w-full rounded-3xl", block)} />

      {/* Floating content */}
      <div
        className={clsx(
          "relative z-10 mx-5 -mt-8 w-full rounded-t-lg rounded-b-3xl border p-4 shadow-md backdrop-blur-sm md:mx-auto md:-mt-10 md:w-[calc(100%-2rem)] md:rounded-3xl md:p-6",
          isDark
            ? "border-white/10 bg-zinc-900/70 shadow-black/40"
            : "border-zinc-200 bg-white/80 shadow-zinc-300/50",
        )}
      >
        {/* Gender + arrow */}
        <div className="flex items-center justify-between">
          <Skeleton className={clsx("h-3 w-16 rounded-full", block)} />
          <Skeleton
            className={clsx("h-4 w-4 rounded-full md:h-5 md:w-5", block)}
          />
        </div>

        {/* Product name */}
        <Skeleton
          className={clsx("mt-3 h-5 w-32 rounded-md md:h-6", accentBlock)}
        />

        {/* Size */}
        <Skeleton className={clsx("mt-2 h-4 w-14 rounded-md", block)} />

        {/* Price + add to cart */}
        <div className="mt-3 flex items-center justify-between">
          <Skeleton className={clsx("h-7 w-24 rounded-md", accentBlock)} />
          <Skeleton className={clsx("h-9 w-9 rounded-full", block)} />
        </div>
      </div>
    </article>
  );
};
