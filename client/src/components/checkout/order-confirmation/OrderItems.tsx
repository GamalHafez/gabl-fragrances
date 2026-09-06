import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import type { OrderType } from "@shared/types";

type OrderItemsProps = {
  items: OrderType["items"];
};

export const OrderItems = ({ items }: OrderItemsProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "rounded-2xl border px-6 py-5 sm:px-8 sm:py-6",
        isDark
          ? "border-neutral-800 bg-neutral-900"
          : "border-neutral-200 bg-white",
      )}
    >
      <h3
        className={clsx(
          "text-base font-semibold sm:text-lg",
          isDark ? "text-neutral-100" : "text-neutral-900",
        )}
      >
        Order Items
      </h3>

      <div
        className={clsx(
          "my-4 border-t",
          isDark ? "border-neutral-800" : "border-neutral-200",
        )}
      />

      <ul className="flex flex-col gap-2">
        {items.map((item, index) => {
          const lineTotal = (Number(item.unitPrice) * item.quantity).toFixed(2);

          return (
            <li
              key={`${item.productName}-${item.sizeML}-${index}`}
              className={clsx(
                "flex items-center justify-between gap-4 rounded-xl px-4 py-3",
                isDark ? "bg-brand-900/10" : "bg-brand-50/50",
              )}
            >
              <p
                className={clsx(
                  "text-sm font-medium sm:text-base",
                  isDark ? "text-neutral-100" : "text-neutral-900",
                )}
              >
                {item.productName} · {item.sizeML}ml
                <span
                  className={clsx(
                    "ml-2 text-xs font-normal sm:text-sm",
                    isDark ? "text-neutral-400" : "text-neutral-500",
                  )}
                >
                  × {item.quantity}
                </span>
              </p>

              <p
                className={clsx(
                  "shrink-0 text-sm font-medium sm:text-base",
                  isDark ? "text-neutral-100" : "text-neutral-900",
                )}
              >
                {lineTotal} EGP
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
