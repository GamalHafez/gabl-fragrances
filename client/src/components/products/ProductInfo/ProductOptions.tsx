import { QuantitySelector } from "@/components/ui/products";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";

type ProductOptionsProps = {
  size: number;
  quantity: number;
  onQuantityChange: Dispatch<SetStateAction<number>>;
};

export const ProductOptions = ({
  size,
  quantity,
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
          className={clsx(
            "cursor-pointer rounded-md border px-3 py-1 text-sm font-medium transition-all duration-200",

            isDark
              ? "border-amber-500 bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20"
              : "border-zinc-900 bg-zinc-800 text-white shadow-sm",
          )}
        >
          {size} ml
        </button>
      </div>

      <QuantitySelector
        quantity={quantity}
        onQuantityChange={onQuantityChange}
      />
    </div>
  );
};
