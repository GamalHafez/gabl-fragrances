import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { Minus, Plus } from "lucide-react";
import { StockIndicator } from "./StockIndicator";

type QuantitySelectorProps = {
  inStock: boolean;
  stock: number;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
};

export const QuantitySelector = ({
  inStock,
  quantity,
  stock,
  onQuantityChange,
}: QuantitySelectorProps) => {
  const { isDark } = useTheme();

  return (
    <div className="flex gap-2">
      <div
        className={clsx(
          "mr-auto inline-flex items-center rounded-full border p-1 shadow-sm transition-opacity",
          !inStock && "pointer-events-none opacity-50 grayscale",

          isDark ? "border-zinc-700 bg-zinc-900" : "border-zinc-300 bg-white",
        )}
      >
        <button
          disabled={!inStock || quantity <= 1}
          onClick={() => onQuantityChange(Math.max(quantity - 1, 1))}
          className={clsx(
            "flex h-9 w-9 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed",

            inStock && "cursor-pointer",

            isDark
              ? "text-zinc-300 hover:bg-zinc-800"
              : "text-zinc-700 hover:bg-zinc-100",
          )}
        >
          <Minus className="h-4 w-4" />
        </button>

        <span
          className={clsx(
            "min-w-10 text-center text-base font-semibold",
            isDark ? "text-zinc-100" : "text-zinc-900",
          )}
        >
          {quantity}
        </span>

        <button
          disabled={!inStock || quantity >= stock}
          onClick={() => onQuantityChange(quantity + 1)}
          className={clsx(
            "flex h-9 w-9 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed",

            inStock && "cursor-pointer",

            isDark
              ? "text-zinc-300 hover:bg-zinc-800"
              : "text-zinc-700 hover:bg-zinc-100",
          )}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <StockIndicator stock={stock} quantity={quantity} />
    </div>
  );
};
