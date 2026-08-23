import clsx from "clsx";
import { SheetFooter } from "@/components/ui/shadcn/sheet";
import { useTheme } from "@/context/theme/useTheme";
import { CartDiscountSection } from "@/components/cart/index";

type CartFooterProps = {
  subtotal: string;
  totalQuantity: number;
};

export const CartFooter = ({ subtotal, totalQuantity }: CartFooterProps) => {
  const { isDark } = useTheme();

  return (
    <SheetFooter
      className={clsx(
        "flex flex-col gap-4 px-5 py-5",
        isDark ? "border-white/10" : "border-black/10",
      )}
    >
      {/* Discount secction */}
      <CartDiscountSection />

      {/* Summary */}
      <div className="space-y-1">
        <p
          className={clsx(
            "flex items-center justify-between text-sm",
            isDark ? "text-white/60" : "text-black/60",
          )}
        >
          <span>Subtotal</span>

          <span
            className={clsx(
              "font-medium",
              isDark ? "text-white" : "text-black",
            )}
          >
            {subtotal ?? "0"} EGP
          </span>
        </p>

        <p
          className={clsx(
            "flex items-center justify-between text-sm",
            isDark ? "text-white/60" : "text-black/60",
          )}
        >
          <span>Total quantity</span>

          <span
            className={clsx(
              "font-medium",
              isDark ? "text-white" : "text-black",
            )}
          >
            {totalQuantity ?? 0} {totalQuantity === 1 ? "Product" : "Products"}
          </span>
        </p>
      </div>

      {/* Checkout note */}
      <p
        className={clsx(
          "text-xs leading-5",
          isDark ? "text-white/40" : "text-black/40",
        )}
      >
        Taxes and shipping calculated at checkout.
      </p>

      {/* Checkout */}
      <button
        type="button"
        className={clsx(
          "w-full rounded-full px-6 py-3.5 text-sm font-medium tracking-wide uppercase",
          "cursor-pointer transition-colors duration-200",
          "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
          isDark
            ? "bg-white text-black hover:bg-white/90 focus-visible:ring-white"
            : "bg-black text-white hover:bg-black/90 focus-visible:ring-black",
        )}
      >
        Checkout
      </button>
    </SheetFooter>
  );
};
