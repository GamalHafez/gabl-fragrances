import { Link } from "react-router-dom";
import { ChevronRight, Package } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import type { OrderSummary } from "@shared/types";

type OrderCardProps = {
  order: OrderSummary;
};

const STATUS_LABELS: Record<OrderSummary["status"], string> = {
  PENDING: "Pending",
  PROCESSING: "Processing",
  PAID: "Paid",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};

const STATUS_COLORS: Record<OrderSummary["status"], string> = {
  PENDING: "bg-amber-500",
  PROCESSING: "bg-blue-500",
  PAID: "bg-emerald-600",
  SHIPPED: "bg-blue-500",
  DELIVERED: "bg-emerald-600",
  CANCELLED: "bg-red-500",
};

export const OrderCard = ({ order }: OrderCardProps) => {
  const { isDark } = useTheme();
  const { id, orderNumber, status, total, createdAt, _count } = order;

  const placedOn = new Date(createdAt).toLocaleDateString(undefined, {
    dateStyle: "medium",
  });

  return (
    <Link
      to={`/orders/${id}`}
      className={clsx(
        "group flex w-full items-center justify-between gap-3 rounded-2xl border px-3.5 py-3.5 transition-colors duration-150 ease-in-out sm:gap-4 sm:px-5 sm:py-4",
        "focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:outline-none",
        isDark
          ? "border-neutral-800 bg-neutral-900 hover:bg-neutral-800"
          : "border-neutral-200 bg-white hover:bg-zinc-200/80",
      )}
    >
      {/* Order information */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <span
          className={clsx(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11",
            isDark
              ? "bg-neutral-800 text-neutral-300"
              : "bg-neutral-100 text-neutral-600",
          )}
        >
          <Package className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
        </span>

        <div className="min-w-0">
          <p
            className={clsx(
              "truncate text-sm font-semibold sm:text-base",
              isDark ? "text-neutral-100" : "text-neutral-900",
            )}
          >
            Order #{orderNumber}
          </p>

          <p
            className={clsx(
              "mt-0.5 text-xs sm:text-sm",
              isDark ? "text-neutral-400" : "text-neutral-500",
            )}
          >
            {placedOn} · {_count.items} item{_count.items !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Order summary */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <div className="text-right">
          <p
            className={clsx(
              "text-sm font-medium sm:text-base",
              isDark ? "text-neutral-100" : "text-neutral-900",
            )}
          >
            {total} EGP
          </p>

          <span
            className={clsx(
              "mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium text-white sm:px-2.5 sm:text-xs",
              STATUS_COLORS[status],
            )}
          >
            {STATUS_LABELS[status]}
          </span>
        </div>

        <ChevronRight
          className={clsx(
            "h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 sm:h-5 sm:w-5",
            isDark ? "text-neutral-500" : "text-neutral-400",
          )}
        />
      </div>
    </Link>
  );
};