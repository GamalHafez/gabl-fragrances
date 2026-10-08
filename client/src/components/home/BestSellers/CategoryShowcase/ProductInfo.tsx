import { useTheme } from "@/context/theme/useTheme";
import type { BestSellerProduct } from "@shared/types/product";
import clsx from "clsx";

export const ProductInfo = ({ product }: { product: BestSellerProduct }) => {
  const { name, variant, description, inspiredBy } = product;

  const { isDark } = useTheme();

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-end justify-between gap-4">
        <h3
          className={clsx(
            "text-xl font-semibold tracking-tight md:text-3xl",
            isDark ? "text-white" : "text-zinc-900",
          )}
        >
          {name}
        </h3>

        {variant && (
          <p
            className={clsx(
              "text-xl font-semibold",
              isDark ? "text-brand-300" : "text-brand-500",
            )}
          >
            ${variant.price}
          </p>
        )}
      </div>

      {inspiredBy && (
        <p
          className={clsx(
            "text-sm md:hidden",
            isDark ? "text-zinc-400" : "text-zinc-600",
          )}
        >
          Inspired by <span className="font-medium">{inspiredBy}</span>
        </p>
      )}

      <div
        className={clsx(
          "hidden h-px w-full md:block",
          isDark ? "bg-white/10" : "bg-zinc-200",
        )}
      />

      <p
        className={clsx(
          "hidden max-w-xl text-sm md:flex md:text-base md:leading-8",
          isDark ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        {description}
      </p>
    </div>
  );
};