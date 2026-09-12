import { Link } from "react-router-dom";
import { ArrowRight, Package } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

export const ProfileOrdersCta = () => {
  const { isDark } = useTheme();

  return (
    <Link
      to="/orders"
      className={clsx(
        "group mt-10 flex items-center justify-between gap-4 rounded-2xl border px-6 py-6 transition-all sm:px-8",
        "focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:outline-none",
        isDark
          ? "border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10"
          : "border-emerald-100 bg-emerald-50/60 hover:bg-emerald-50",
      )}
    >
      <div className="flex items-center gap-4">
        <span
          className={clsx(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
            isDark
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-emerald-100 text-emerald-700",
          )}
        >
          <Package className="h-5 w-5" />
        </span>

        <div>
          <h3
            className={clsx(
              "font-semibold text-base mb-1",
              isDark ? "text-neutral-100" : "text-neutral-900",
            )}
          >
            View Your Orders
          </h3>
          <p
            className={clsx(
              "text-sm",
              isDark ? "text-neutral-400" : "text-neutral-500",
            )}
          >
            Track your order history and check delivery status
          </p>
        </div>
      </div>

      <ArrowRight
        className={clsx(
          "h-5 w-5 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100",
          isDark ? "text-emerald-400" : "text-emerald-600",
        )}
      />
    </Link>
  );
};
