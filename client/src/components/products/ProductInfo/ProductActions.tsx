import Reveal from "@/components/ui/animation/Reveal";
import { useCart } from "@/context/cart/useCart";
import { useTheme } from "@/context/theme/useTheme";
import { animateToCart } from "@/utils/cart";
import clsx from "clsx";
import { CreditCard, ShoppingBag } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

type ProductActionsProps = {
  variantId: string;
  quantity: number;
  productImage: string;
  inStock: boolean;
};

export const ProductActions = ({
  variantId,
  quantity,
  productImage,
  inStock,
}: ProductActionsProps) => {
  const { isDark } = useTheme();
  const { handleAddItem } = useCart();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!inStock) return;

    // Context state updates
    handleAddItem({
      variantId,
      quantity,
    });

    if (buttonRef.current) {
      animateToCart(buttonRef.current, productImage);
    }
  };

  return (
    <Reveal>
      <div className="flex flex-col gap-3 md:flex-row">
        <button
          onClick={onClick}
          ref={buttonRef}
          aria-disabled={!inStock}
          disabled={!inStock}
          aria-label="Add to cart"
          className={clsx(
            "flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300",

            !inStock && "cursor-not-allowed opacity-50 grayscale",

            inStock &&
              (isDark
                ? "border-zinc-700 bg-zinc-900 text-zinc-100 hover:border-amber-500 hover:bg-zinc-800 hover:text-amber-300"
                : "border-zinc-300 bg-white text-zinc-900 hover:border-zinc-900 hover:bg-zinc-100"),

            !inStock &&
              (isDark
                ? "border-zinc-800 bg-zinc-900 text-zinc-500"
                : "border-zinc-200 bg-zinc-100 text-zinc-400"),
          )}
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>

        <Link
          to={inStock ? "/checkout" : ""}
          onClick={(e) => !inStock && e.preventDefault()}
          aria-disabled={!inStock}
          className={clsx(
            "flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",

            !inStock && "cursor-not-allowed opacity-50 grayscale",

            inStock &&
              (isDark
                ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
                : "bg-zinc-900 text-white shadow-lg shadow-zinc-900/10 hover:bg-zinc-800"),

            !inStock &&
              (isDark
                ? "bg-zinc-800 text-zinc-500"
                : "bg-zinc-200 text-zinc-400"),
          )}
        >
          <CreditCard className="h-4 w-4" />
          Buy it Now
        </Link>
      </div>
    </Reveal>
  );
};
