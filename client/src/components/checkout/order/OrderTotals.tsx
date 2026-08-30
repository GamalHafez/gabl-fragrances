import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type OrderTotalsProps = {
  subtotal: string;
  totalQuantity: number;
  shipping?: number;
};

export const OrderTotals = ({
  subtotal,
  totalQuantity,
  shipping,
}: OrderTotalsProps) => {
  const { isDark } = useTheme();

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

      {shipping !== undefined && (
        <>
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
              {shipping === 0 ? "Free" : `${shipping.toFixed(2)} EGP`}
            </span>
          </p>

          <p
            className={clsx(
              "mt-3 flex items-center justify-between text-base font-bold",
              isDark ? "text-white" : "text-black",
            )}
          >
            <span>Total</span>
            <span>{(Number(subtotal) + shipping).toFixed(2)} EGP</span>
          </p>
        </>
      )}
    </div>
  );
};
