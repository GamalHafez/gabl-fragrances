import { useTheme } from "@/context/theme/useTheme";
import type { CartDiscount } from "@shared/types";
import clsx from "clsx";

type OrderTotalsProps = {
  subtotal: string;
  totalQuantity: number;
  discount: CartDiscount;
  total: string;
  shipping?: number | string;
};

export const OrderTotals = ({
  subtotal,
  totalQuantity,
  discount,
  shipping,
  total,
}: OrderTotalsProps) => {
  const { isDark } = useTheme();

  const displayTotal =
    shipping !== undefined
      ? (Number(total) + Number(shipping)).toFixed(2)
      : total;

  return (
    <div className="space-y-1">
      <p
        className={clsx(
          "flex items-center justify-between text-sm",
          isDark ? "text-white/60" : "text-black/60",
        )}
      >
        <span>Total quantity</span>
        <span
          className={clsx("font-medium", isDark ? "text-white" : "text-black")}
        >
          {totalQuantity ?? 0} {totalQuantity === 1 ? "Product" : "Products"}
        </span>
      </p>

      <p
        className={clsx(
          "flex items-center justify-between text-sm",
          isDark ? "text-white/60" : "text-black/60",
        )}
      >
        <span>Subtotal</span>
        <span
          className={clsx("font-medium", isDark ? "text-white" : "text-black")}
        >
          {subtotal ?? "0"} EGP
        </span>
      </p>

      {discount && (
        <p
          className={clsx(
            "flex items-center justify-between text-sm",
            isDark ? "text-white/60" : "text-black/60",
          )}
        >
          <span className="flex items-center gap-2">
            <span>Discount</span>
            <span
              className={clsx(
                "rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase",
                isDark
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-emerald-50 text-emerald-600",
              )}
            >
              {discount.code}
            </span>
          </span>
          <span
            className={clsx(
              "font-medium",
              isDark ? "text-emerald-400" : "text-emerald-600",
            )}
          >
            -{discount.amount ?? "0.00"} EGP
          </span>
        </p>
      )}

      {shipping !== undefined && (
        <p
          className={clsx(
            "flex items-center justify-between text-sm",
            isDark ? "text-white/60" : "text-black/60",
          )}
        >
          <span>Shipping</span>
          <span
            className={clsx(
              "font-medium",
              isDark ? "text-white" : "text-black",
            )}
          >
            {Number(shipping) === 0
              ? "Free"
              : `${Number(shipping).toFixed(2)} EGP`}
          </span>
        </p>
      )}

      <p
        className={clsx(
          "mt-3 flex items-center justify-between text-base font-bold",
          isDark ? "text-white" : "text-black",
        )}
      >
        <span>Total</span>
        <span>{displayTotal ?? "0"} EGP</span>
      </p>
    </div>
  );
};
