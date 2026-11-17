import { MainHeading } from "@/components/ui/common";
import { Rating } from "@/components/ui/products";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type ProductHeaderProps = {
  name: string;
  inspiredBy: string;
  isSample?: boolean;
  rating?: number;
  reviewCount?: number;
  price: number;
  compareAtPrice: number | null;
};

export const ProductHeader = ({
  name,
  inspiredBy,
  isSample,
  rating,
  reviewCount,
  price,
  compareAtPrice,
}: ProductHeaderProps) => {
  const { isDark } = useTheme();

  const hasDiscount = compareAtPrice !== null && compareAtPrice > price;
  const discountPercent = hasDiscount
    ? Math.round((1 - price / compareAtPrice) * 100)
    : 0;

  return (
    <header className="mb-0 flex flex-col items-start justify-between gap-1">
      <MainHeading title={name} className="md:mb-0" />
      <p
        className={clsx(
          "text-muted-foreground mt-1 text-sm",
          isDark ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        Inspired by{" "}
        <span
          className={clsx(
            "font-medium",
            isDark ? "text-brand-300" : "text-brand-700",
          )}
        >
          {inspiredBy}
        </span>
      </p>
      {!isSample && <Rating rating={rating ?? 0} reviewCount={reviewCount} />}
      <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
        <p
          className={clsx(
            "text-3xl font-bold",
            isDark ? "text-zinc-300" : "text-zinc-800",
          )}
        >
          {price.toFixed(2)} <span className="text-xl">EGP</span>
        </p>

        {hasDiscount && (
          <>
            <p
              className={clsx(
                "text-lg line-through",
                isDark ? "text-zinc-500" : "text-zinc-400",
              )}
            >
              {compareAtPrice.toFixed(2)} EGP
            </p>

            <span
              className={clsx(
                "rounded-full px-2.5 py-0.5 text-xs font-bold",
                isDark
                  ? "bg-red-500/15 text-red-300"
                  : "bg-red-100 text-red-600",
              )}
            >
              -{discountPercent}%
            </span>
          </>
        )}
      </div>
    </header>
  );
};
