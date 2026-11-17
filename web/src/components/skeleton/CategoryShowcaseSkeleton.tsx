import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

export const CategoryShowcaseSkeleton = () => {
  const { isDark } = useTheme();

  const pulse = clsx(
    "animate-pulse rounded-lg",
    isDark ? "bg-zinc-800" : "bg-zinc-200",
  );

  return (
    <article className="flex w-full justify-center px-2">
      <div
        className={clsx(
          "flex w-[75%] flex-col items-center rounded-3xl border p-6 transition-all duration-300 md:w-[75%] lg:w-3/5 lg:p-10",
          isDark ? "border-white/10" : "border-zinc-200",
        )}
      >
        {/* Product image & actions */}
        <div className="mb-8 flex w-full flex-col items-center gap-6 md:mb-10">
          <div className="flex h-40 w-full items-center justify-center md:h-60 lg:h-72">
            <div className={clsx(pulse, "h-full w-32 md:w-40 lg:w-48")} />
          </div>

          {/* Product actions */}
          <div className="flex items-center justify-center gap-3">
            <div className={clsx(pulse, "h-9 w-28 rounded-full")} />
            <div className={clsx(pulse, "h-9 w-9 rounded-full")} />
          </div>
        </div>

        {/* Product info */}
        <div className="flex w-full flex-col items-center gap-3">
          <div className={clsx(pulse, "h-6 w-3/5")} />
          <div className={clsx(pulse, "h-4 w-2/5")} />
          <div className={clsx(pulse, "h-5 w-1/3")} />
        </div>
      </div>
    </article>
  );
};
