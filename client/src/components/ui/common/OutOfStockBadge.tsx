import { PackageX } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

export const OutOfStockBadge = () => {
  const { isDark } = useTheme();

  return (
    <span
      role="status"
      aria-label="Out of stock"
      className={clsx(
        "inline-flex items-center gap-1 rounded-full py-1 pr-2 text-xs font-medium lg:gap-0 lg:px-2",
        isDark ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-600",
      )}
    >
      <PackageX className="h-4 w-4" />
      Sold out
    </span>
  );
};
