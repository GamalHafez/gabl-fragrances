import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

export const ShippingMethodSkeleton = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "flex items-center gap-4 rounded-2xl border px-4 py-4",
        isDark ? "border-zinc-800 bg-zinc-900/60" : "border-zinc-200 bg-white",
      )}
    >
      {/* Radio */}
      <div
        className={clsx(
          "h-4 w-4 shrink-0 rounded-full",
          isDark ? "bg-zinc-800" : "bg-zinc-200",
        )}
      />

      {/* Name + Price */}
      <div className="flex flex-1 items-center justify-between">
        <div
          className={clsx(
            "h-4 w-24 animate-pulse rounded-md",
            isDark ? "bg-zinc-800" : "bg-zinc-200",
          )}
        />

        <div
          className={clsx(
            "h-4 w-16 animate-pulse rounded-md",
            isDark ? "bg-zinc-800" : "bg-zinc-200",
          )}
        />
      </div>
    </div>
  );
};
