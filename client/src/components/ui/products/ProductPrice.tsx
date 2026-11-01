import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type ProductPriceProps = {
  price: string;
  compareAtPrice: string | null;
};

export const ProductPrice = ({ price, compareAtPrice }: ProductPriceProps) => {
  const { isDark } = useTheme();

  const hasDiscount =
    compareAtPrice !== null && Number(compareAtPrice) > Number(price);

  const discountPercent = hasDiscount
    ? Math.round((1 - Number(price) / Number(compareAtPrice)) * 100)
    : 0;

  return (
    <div className="flex flex-col gap-0.5">
      {/* Old price row. min-h keeps all cards the same height */}
      <div className="flex min-h-5 items-center gap-2">
        {hasDiscount && (
          <>
            <span
              className={clsx(
                "text-sm line-through decoration-red-500/70",
                isDark ? "text-zinc-500" : "text-zinc-400",
              )}
            >
              {compareAtPrice} EGP
            </span>
            <span
              className={clsx(
                "rounded-full px-2 py-0.5 text-[11px] font-bold",
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

      {/* Current price */}
      <p
        className={clsx(
          "flex items-baseline gap-1 text-xl font-bold",
          hasDiscount
            ? isDark
              ? "text-emerald-300"
              : "text-emerald-700"
            : isDark
              ? "text-zinc-100"
              : "text-zinc-900",
        )}
      >
        {price}
        <span
          className={clsx(
            "text-xs font-semibold",
            isDark ? "text-zinc-400" : "text-zinc-900",
          )}
        >
          EGP
        </span>
      </p>
    </div>
  );
};
