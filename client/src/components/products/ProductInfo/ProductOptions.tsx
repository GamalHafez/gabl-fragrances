import { QuantitySelector } from "@/components/ui/products";
import { useTheme } from "@/context/theme/useTheme";
import type { Product } from "@shared/types";
import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";

type ProductOptionsProps = {
  variants: Product["variants"];
  selectedVariantId: string;
  onVariantChange: (variantId: string) => void;
  stock: number;
  quantity: number;
  inStock: boolean;
  onQuantityChange: Dispatch<SetStateAction<number>>;
};

export const ProductOptions = ({
  variants,
  selectedVariantId,
  onVariantChange,
  quantity,
  stock,
  inStock,
  onQuantityChange,
}: ProductOptionsProps) => {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="flex items-center gap-2">
        <p
          className={clsx(
            "text-md font-medium capitalize",
            isDark ? "text-zinc-400" : "text-zinc-600",
          )}
        >
          size:
        </p>
        {variants.map((variant) => {
          const isSelected = variant.id === selectedVariantId;
          const isVariantInStock = variant.isActive && variant.stock > 0;

          return (
            <button
              key={variant.id}
              type="button"
              disabled={!isVariantInStock}
              onClick={() => onVariantChange(variant.id)}
              className={clsx(
                "cursor-pointer rounded-md border px-3 py-1 text-sm font-medium transition-all duration-200",

                !isVariantInStock && "cursor-not-allowed opacity-50 grayscale",

                isSelected &&
                  isVariantInStock &&
                  (isDark
                    ? "border-amber-500 bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20"
                    : "border-zinc-900 bg-zinc-800 text-white shadow-sm"),

                !isSelected &&
                  isVariantInStock &&
                  (isDark
                    ? "border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-amber-500"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-900"),
              )}
            >
              {variant.sizeML} ML
            </button>
          );
        })}
      </div>
      <QuantitySelector
        inStock={inStock}
        stock={stock}
        quantity={quantity}
        onQuantityChange={onQuantityChange}
      />
    </div>
  );
};
