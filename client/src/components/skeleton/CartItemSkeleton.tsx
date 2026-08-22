import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { Skeleton } from "@/components/ui/shadcn/skeleton";

export const CartItemSkeleton = () => {
  const { isDark } = useTheme();

  return (
    <article
      className={clsx(
        "grid grid-cols-2 gap-y-2 border-b px-3 py-5",
        isDark ? "border-zinc-800" : "border-zinc-200",
      )}
    >
      {/* Product */}
      <div className="flex gap-2">
        {/* Image */}
        <Skeleton
          className={clsx(
            "h-24 w-24 shrink-0 rounded-2xl",
            isDark ? "bg-zinc-800" : "bg-zinc-200",
          )}
        />

        {/* Product Info */}
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
          {/* Product name */}
          <Skeleton
            className={clsx(
              "h-4 w-28 rounded-md",
              isDark ? "bg-zinc-800" : "bg-zinc-200",
            )}
          />

          {/* Size */}
          <Skeleton
            className={clsx(
              "h-3 w-14 rounded-md",
              isDark ? "bg-zinc-800" : "bg-zinc-200",
            )}
          />

          {/* Price */}
          <Skeleton
            className={clsx(
              "mt-1 h-4 w-20 rounded-md",
              isDark ? "bg-zinc-800" : "bg-zinc-200",
            )}
          />
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex flex-col items-end justify-center gap-2">
        <Skeleton
          className={clsx(
            "h-2.5 w-14 rounded-md",
            isDark ? "bg-zinc-800" : "bg-zinc-200",
          )}
        />

        <Skeleton
          className={clsx(
            "h-4 w-20 rounded-md",
            isDark ? "bg-zinc-800" : "bg-zinc-200",
          )}
        />
      </div>

      {/* Quantity + Remove */}
      <div className="col-span-2 flex items-center pl-2">
        {/* Quantity selector skeleton */}
        <Skeleton
          className={clsx(
            "h-11 w-28 rounded-full",
            isDark ? "bg-zinc-800" : "bg-zinc-200",
          )}
        />

        {/* Trash skeleton */}
        <Skeleton
          className={clsx(
            "ml-auto h-5 w-5 rounded-md",
            isDark ? "bg-zinc-800" : "bg-zinc-200",
          )}
        />
      </div>
    </article>
  );
};