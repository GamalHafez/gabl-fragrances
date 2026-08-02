import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { ShoppingBag, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

export const ProductActions = () => {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <Link
        to="/cart"
        className={clsx(
          "flex flex-1 items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300",
          isDark
            ? "border-zinc-700 bg-zinc-900 text-zinc-100 hover:border-amber-500 hover:bg-zinc-800 hover:text-amber-300"
            : "border-zinc-300 bg-white text-zinc-900 hover:border-zinc-900 hover:bg-zinc-100",
        )}
      >
        <ShoppingBag className="h-4 w-4" />
        Add to Cart
      </Link>

      <Link
        to="/checkout"
        className={clsx(
          "flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
          isDark
            ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
            : "bg-zinc-900 text-white shadow-lg shadow-zinc-900/10 hover:bg-zinc-800",
        )}
      >
        <CreditCard className="h-4 w-4" />
        Buy it Now
      </Link>
    </div>
  );
};
