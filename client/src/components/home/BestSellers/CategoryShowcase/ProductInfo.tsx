import { useTheme } from "@/context/theme/useTheme";
import type { BestSellerProduct } from "@shared/types/product";
import clsx from "clsx";

export const ProductInfo = ({ product }: { product: BestSellerProduct }) => {
  const { name, variant, description } = product;

  const { isDark } = useTheme();

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-end justify-between gap-4">
        <h3
          className={clsx(
            "text-3xl font-semibold tracking-tight",
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

      <div
        className={clsx("h-px w-full", isDark ? "bg-white/10" : "bg-zinc-200")}
      />

      <p
        className={clsx(
          "max-w-xl text-base leading-8",
          isDark ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        {description}
      </p>
    </div>
  );
};
