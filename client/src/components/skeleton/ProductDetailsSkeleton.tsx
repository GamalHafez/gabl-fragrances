import clsx from "clsx";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import { useTheme } from "@/context/theme/useTheme";

export const ProductDetailsSkeleton = () => {
  const { isDark } = useTheme();

  const block = isDark ? "bg-white/10" : "bg-zinc-200";
  const accentBlock = isDark ? "bg-white/15" : "bg-zinc-300/80";

  return (
    <section
      className="grid gap-10 md:py-10 lg:grid-cols-2 lg:items-start"
      aria-busy="true"
      aria-label="Loading product details"
    >
      {/* Product Image */}
      <div
        className={clsx(
          "mx-auto w-4/5 overflow-hidden rounded-2xl border p-4 shadow-xl md:w-full md:p-8",
          isDark
            ? "border-white/10 bg-white/2 shadow-black/20"
            : "border-zinc-200 bg-white shadow-zinc-200/50",
        )}
      >
        <Skeleton className={clsx("aspect-square w-full rounded-2xl", block)} />
      </div>

      {/* Product Info */}
      <div className="flex h-full flex-col justify-center space-y-5 px-4 md:px-0">
        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <Skeleton className={clsx("h-6 w-28 rounded-full", block)} />
          <Skeleton className={clsx("h-6 w-20 rounded-full", block)} />
          <Skeleton className={clsx("h-6 w-24 rounded-full", block)} />
        </div>

        {/* Product Name */}
        <Skeleton
          className={clsx("h-9 w-3/4 rounded-md md:h-10", accentBlock)}
        />

        {/* Inspired By */}
        <Skeleton className={clsx("h-4 w-1/2 rounded-md", block)} />

        {/* Rating */}
        <Skeleton className={clsx("h-5 w-32 rounded-md", block)} />

        {/* Price */}
        <Skeleton className={clsx("h-8 w-28 rounded-md", accentBlock)} />

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className={clsx("h-4 w-full rounded-md", block)} />
          <Skeleton className={clsx("h-4 w-5/6 rounded-md", block)} />
          <Skeleton className={clsx("h-4 w-2/3 rounded-md", block)} />
        </div>

        {/* Product Options */}
        <div className="space-y-3">
          <Skeleton className={clsx("h-4 w-20 rounded-md", block)} />
          <Skeleton className={clsx("h-10 w-32 rounded-md", block)} />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Skeleton className={clsx("h-12 flex-1 rounded-full", accentBlock)} />
          <Skeleton className={clsx("h-12 w-12 rounded-full", block)} />
        </div>

        {/* Quick Links */}
        <div className="flex gap-4 pt-2">
          <Skeleton className={clsx("h-4 w-28 rounded-md", block)} />
          <Skeleton className={clsx("h-4 w-28 rounded-md", block)} />
        </div>
      </div>
    </section>
  );
};
