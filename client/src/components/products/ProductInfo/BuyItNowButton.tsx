import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { CreditCard } from "lucide-react";
import { useTheme } from "@/context/theme/useTheme";
import { useCart } from "@/context/cart/useCart";

type BuyItNowButtonProps = {
  productVariantId: string;
  inStock: boolean;
  quantity?: number;
};

export const BuyItNowButton = ({
  productVariantId,
  inStock,
  quantity = 1,
}: BuyItNowButtonProps) => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const { replaceCart } = useCart();

  const handleBuyNow = () => {
    if (!inStock) return;

    replaceCart([{ productVariantId, quantity }]);
    navigate("/checkout");
  };

  return (
    <button
      type="button"
      onClick={handleBuyNow}
      disabled={!inStock}
      aria-disabled={!inStock}
      className={clsx(
        "flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        !inStock && "cursor-not-allowed opacity-50 grayscale",
        inStock &&
          (isDark
            ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
            : "bg-zinc-900 text-white shadow-lg shadow-zinc-900/10 hover:bg-zinc-800"),
        !inStock &&
          (isDark ? "bg-zinc-800 text-zinc-500" : "bg-zinc-200 text-zinc-400"),
      )}
    >
      <CreditCard className="h-4 w-4" />
      Buy it Now
    </button>
  );
};
