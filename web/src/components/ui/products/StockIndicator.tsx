import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type StockIndicatorProps = {
  stock: number;
  quantity: number;
};

export const StockIndicator = ({ stock, quantity }: StockIndicatorProps) => {
  const remainingStock = stock - quantity;
  const showLowStock = stock > 0 && stock <= 5;
  const { isDark } = useTheme();

  return (
    showLowStock && (
      <div
        className={clsx(
          "flex items-center gap-2 text-xs font-medium",
          remainingStock === 1
            ? isDark
              ? "text-amber-400"
              : "text-amber-700"
            : isDark
              ? "text-zinc-400"
              : "text-zinc-500",
        )}
      >
        <span
          className={clsx(
            "h-1.5 w-1.5 rounded-full",
            remainingStock === 1
              ? "bg-amber-500"
              : isDark
                ? "bg-amber-400"
                : "bg-amber-600",
          )}
        />

        <span>
          {remainingStock === 0
            ? "Maximum available"
            : remainingStock === 1
              ? "Only 1 left — almost gone"
              : `Only ${remainingStock} left — order soon`}
        </span>
      </div>
    )
  );
};
