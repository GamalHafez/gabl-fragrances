import Reveal from "@/components/ui/animation/Reveal";
import { useCart } from "@/context/cart/useCart";
import { useTheme } from "@/context/theme/useTheme";
import { animateToCart } from "@/utils/cart";
import clsx from "clsx";
import { ShoppingBag } from "lucide-react";
import { useRef } from "react";
import { BuyItNowButton } from "./BuyItNowButton";

type ProductActionsProps = {
  productVariantId: string;
  quantity: number;
  productImage: string;
  inStock: boolean;
};

export const ProductActions = ({
  productVariantId,
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
      productVariantId,
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

        <BuyItNowButton productVariantId={productVariantId} inStock={inStock} />
      </div>
    </Reveal>
  );
};
