import { Link } from "react-router-dom";
import { PackageOpen } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

export const EmptyOrders = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-3 rounded-2xl border px-6 py-16 text-center",
        isDark
          ? "border-neutral-800 bg-neutral-900"
          : "border-neutral-200 bg-white",
      )}
    >
      <span
        className={clsx(
          "flex h-14 w-14 items-center justify-center rounded-full",
          isDark
            ? "bg-neutral-800 text-neutral-400"
            : "bg-neutral-100 text-neutral-500",
        )}
      >
        <PackageOpen className="h-7 w-7" />
      </span>

      <div className="flex flex-col gap-1">
        <h3
          className={clsx(
            "font-semibold",
            isDark ? "text-neutral-100" : "text-neutral-900",
          )}
        >
          No orders yet
        </h3>
        <p
          className={clsx(
            "max-w-xs text-sm",
            isDark ? "text-neutral-400" : "text-neutral-500",
          )}
        >
          When you place an order, it'll show up here so you can track it
          anytime.
        </p>
      </div>

      <Link
        to="/collections"
        className={clsx(
          "mt-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-colors",
          "focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:outline-none",
          "bg-emerald-600 hover:bg-emerald-700",
        )}
      >
        Explore Collections
      </Link>
    </div>
  );
};
