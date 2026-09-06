import { useTheme } from "@/context/theme/useTheme";
import type { OrderStatus } from "../../../../../server/src/generated/prisma/enums";
import clsx from "clsx";

type OrderDetailsProps = {
  orderNumber: number;
  createdAt: string;
  status: OrderStatus;
};

const STATUS_LABELS: Record<OrderStatus, string> = {
  PENDING: "Pending",
  PROCESSING: "Processing",
  PAID: "Paid",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};

const STATUS_COLORS: Record<OrderStatus, string> = {
  PENDING: "bg-amber-500 text-white",
  PROCESSING: "bg-blue-500 text-white",
  PAID: "bg-emerald-600 text-white",
  SHIPPED: "bg-blue-500 text-white",
  DELIVERED: "bg-emerald-600 text-white",
  CANCELLED: "bg-red-500 text-white",
};

const STATUS_DARK_COLORS: Record<OrderStatus, string> = {
  PENDING: "bg-amber-400/15 text-amber-300 ring-1 ring-inset ring-amber-400/20",
  PROCESSING: "bg-blue-400/15 text-blue-300 ring-1 ring-inset ring-blue-400/20",
  PAID: "bg-emerald-400/15 text-emerald-300 ring-1 ring-inset ring-emerald-400/20",
  SHIPPED: "bg-blue-400/15 text-blue-300 ring-1 ring-inset ring-blue-400/20",
  DELIVERED:
    "bg-emerald-400/15 text-emerald-300 ring-1 ring-inset ring-emerald-400/20",
  CANCELLED: "bg-red-400/15 text-red-300 ring-1 ring-inset ring-red-400/20",
};

export const OrderDetails = ({
  orderNumber,
  createdAt,
  status,
}: OrderDetailsProps) => {
  const { isDark } = useTheme();

  const placedOn = new Date(createdAt).toLocaleString(undefined, {
    dateStyle: "long",
    timeStyle: "short",
  });

  return (
    <div
      className={clsx(
        "rounded-2xl border px-6 py-5 text-left transition-colors sm:px-8 sm:py-6",
        isDark
          ? "border-neutral-800/80 bg-neutral-900/80 shadow-black/10"
          : "border-neutral-200 bg-white",
      )}
    >
      <div className="flex flex-col-reverse flex-wrap items-start justify-between gap-2 md:flex-row md:items-center md:gap-3">
        <div>
          <h2
            className={clsx(
              "text-lg font-semibold sm:text-xl",
              isDark ? "text-neutral-100" : "text-neutral-900",
            )}
          >
            Order #{orderNumber}
          </h2>

          <p
            className={clsx(
              "mt-0.5 text-sm",
              isDark ? "text-neutral-400" : "text-neutral-500",
            )}
          >
            Placed on {placedOn}
          </p>
        </div>

        <span
          className={clsx(
            "shrink-0 rounded-full px-3 py-1 text-xs font-medium",
            isDark ? STATUS_DARK_COLORS[status] : STATUS_COLORS[status],
          )}
        >
          {STATUS_LABELS[status]}
        </span>
      </div>
    </div>
  );
};
