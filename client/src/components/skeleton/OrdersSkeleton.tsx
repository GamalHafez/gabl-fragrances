import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

export const OrdersSkeleton = () => {
  const { isDark } = useTheme();

  const pulse = clsx(
    "animate-pulse rounded-lg",
    isDark ? "bg-neutral-800" : "bg-neutral-200",
  );

  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className={clsx(
            "flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 sm:px-6",
            isDark
              ? "border-neutral-800 bg-neutral-900"
              : "border-neutral-200 bg-white",
          )}
        >
          <div className="flex items-center gap-4">
            <div className={clsx(pulse, "h-11 w-11 shrink-0 rounded-full")} />

            <div className="flex flex-col gap-2">
              <div className={clsx(pulse, "h-4 w-28")} />
              <div className={clsx(pulse, "h-3 w-36")} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end gap-2">
              <div className={clsx(pulse, "h-4 w-16")} />
              <div className={clsx(pulse, "h-4 w-14 rounded-full")} />
            </div>
            <div className={clsx(pulse, "h-5 w-5 rounded-full")} />
          </div>
        </div>
      ))}
    </div>
  );
};
