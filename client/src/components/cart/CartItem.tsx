import { useTheme } from "@/context/theme/useTheme";
import type { CartVariant } from "@shared/types";
import clsx from "clsx";
import { QuantitySelector } from "@/components/ui/products";
import { useCart } from "@/context/cart/useCart";
import { Trash } from "lucide-react";

type CartItemProps = {
  cartItem: CartVariant;
};

export const CartItem = ({ cartItem }: CartItemProps) => {
  const { isDark } = useTheme();
  const { updateQuantity, removeItem } = useCart();
  const {
    id,
    sizeML,
    price,
    quantity,
    stock,
    product: { name, image },
  } = cartItem;
  const subtotal = Number(price) * quantity;

  return (
    <article
      className={clsx(
        "grid grid-cols-2 gap-y-2 border-b px-3 py-5",
        isDark ? "border-zinc-800" : "border-zinc-200",
      )}
    >
      <div className="flex gap-2">
        {/* Image */}
        <div
          className={clsx(
            "flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl",
            isDark ? "bg-zinc-900" : "bg-zinc-100",
          )}
        >
          <img
            src={image?.url}
            alt={image?.description ?? name}
            className="h-full w-full rounded-3xl object-contain p-2"
          />
        </div>
        {/* Product Info */}
        <div className="flex flex-1 flex-col justify-center">
          <h3
            className={clsx(
              "truncate text-sm font-semibold",
              isDark ? "text-zinc-100" : "text-zinc-900",
            )}
          >
            {name}
          </h3>

          <p
            className={clsx(
              "mt-1 text-xs tracking-wider uppercase",
              isDark ? "text-zinc-500" : "text-zinc-500",
            )}
          >
            {sizeML} ML
          </p>

          <p
            className={clsx(
              "mt-2 text-sm font-medium",
              isDark ? "text-zinc-300" : "text-zinc-700",
            )}
          >
            {price} <span className="text-xs font-normal">EGP</span>
          </p>
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex shrink-0 flex-col items-end justify-center">
        <span
          className={clsx(
            "text-[10px] font-medium tracking-wider uppercase",
            isDark ? "text-zinc-500" : "text-zinc-400",
          )}
        >
          Subtotal
        </span>

        <p
          className={clsx(
            "mt-1 text-sm font-bold",
            isDark ? "text-zinc-100" : "text-zinc-900",
          )}
        >
          {subtotal.toFixed(2)} <span className="text-xs font-normal">EGP</span>
        </p>
      </div>

      <div className="col-span-2 flex items-center pl-2">
        <QuantitySelector
          inStock={stock > 0}
          stock={stock}
          quantity={quantity}
          onQuantityChange={(quantity) => updateQuantity(id, quantity)}
        />
        <button
          type="button"
          onClick={() => removeItem(id)}
          aria-label={`Remove ${name} from cart`}
          className={clsx(
            "ml-auto cursor-pointer transition-colors duration-300 ease-in-out",
            isDark
              ? "text-zinc-500 hover:text-red-400"
              : "text-zinc-700 hover:text-red-500",
          )}
        >
          <Trash size={20} />
        </button>
      </div>
    </article>
  );
};
