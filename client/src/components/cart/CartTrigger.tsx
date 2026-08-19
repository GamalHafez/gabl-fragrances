import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";
import { ShoppingCart } from "lucide-react";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { getItem } from "@/utils";
import type { StoredCart } from "@shared/types";

type CartTriggerProps = {
  onOpenChange: (open: boolean) => void;
};

export const CartTrigger = ({ onOpenChange }: CartTriggerProps) => {
  const { isDark } = useTheme();

  const cart = getItem<StoredCart>("cart") ?? {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <button
              type="button"
              data-cart-trigger
              aria-label={`Shopping cart, ${cart?.totalQuantity} ${
                cart.totalQuantity === 1 ? "item" : "items"
              }`}
              className={clsx(
                "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors",
                isDark
                  ? "text-brand-300 hover:text-brand-200 hover:bg-zinc-800/60"
                  : "text-brand-500 hover:bg-brand-50 hover:text-brand-600",
              )}
              onClick={() => onOpenChange(true)}
            >
              <ShoppingCart size={20} />

              {cart.totalQuantity > 0 && (
                <span
                  className={clsx(
                    "absolute -top-0.5 -right-0.5 flex min-h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] leading-none font-bold",
                    isDark
                      ? "bg-brand-300 text-zinc-900"
                      : "bg-brand-500 text-white",
                  )}
                >
                  {cart.totalQuantity > 99 ? "99+" : cart.totalQuantity}
                </span>
              )}
            </button>
          }
        />

        <TooltipContent>
          <p>Your Cart</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
