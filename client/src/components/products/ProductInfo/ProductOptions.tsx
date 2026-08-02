import { QuantitySelector } from "@/components/ui/products";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";

type ProductOptionsProps = {
  size: number;
  quantity: number;
  inStock: boolean;
  onQuantityChange: Dispatch<SetStateAction<number>>;
};

export const ProductOptions = ({
  size,
  quantity,
  inStock,
  onQuantityChange,
}: ProductOptionsProps) => {
  const { isDark } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <p
        className={clsx(
          "text-md font-medium capitalize",
          isDark ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        size:
      </p>
      <div className="mr-10 flex gap-2">
        <button
          disabled={!inStock}
          className={clsx(
            "rounded-md border px-3 py-1 text-sm font-medium transition-all duration-200",

            !inStock && "cursor-not-allowed opacity-50 grayscale",

            inStock &&
              (isDark
                ? "border-amber-500 bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20"
                : "border-zinc-900 bg-zinc-800 text-white shadow-sm"),

            !inStock &&
              (isDark
                ? "border-zinc-700 bg-zinc-900 text-zinc-500"
                : "border-zinc-300 bg-zinc-100 text-zinc-400"),
          )}
        >
          {size} ml
        </button>
      </div>

      <QuantitySelector
        inStock={inStock}
        quantity={quantity}
        onQuantityChange={onQuantityChange}
      />
    </div>
  );
};
