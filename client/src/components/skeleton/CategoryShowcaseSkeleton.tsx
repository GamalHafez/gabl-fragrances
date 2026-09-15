import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

export const CategoryShowcaseSkeleton = () => {
  const { isDark } = useTheme();

  const pulse = clsx(
    "animate-pulse rounded-lg",
    isDark ? "bg-zinc-800" : "bg-zinc-200",
  );

  return (
    <article className="mt-2 flex flex-col justify-center px-2 md:flex-row">
      {/* LeftProductList */}
      <div className="flex flex-col rounded-2xl pt-2 md:gap-2 md:pt-8 lg:basis-1/3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center gap-3 rounded-xl px-5 py-2 md:justify-start md:py-4"
          >
            <div className={clsx(pulse, "h-4 w-4")} />
            <div className={clsx(pulse, "h-5 w-32")} />
          </div>
        ))}
      </div>

      {/* RightProductPreview */}
      <div
        className={clsx(
          "mt-2 flex flex-col items-center rounded-3xl border p-8 md:mt-0 lg:w-3/5 lg:p-10",
          isDark ? "border-white/10" : "border-zinc-200",
        )}
      >
        <div className="mb-8 flex w-full flex-col items-center gap-6 md:mb-10">
          <div className={clsx(pulse, "h-40 w-full md:h-60 lg:h-72")} />
          <div className={clsx(pulse, "h-9 w-32 rounded-full")} />
        </div>

        <div className="flex w-full flex-col items-center gap-2">
          <div className={clsx(pulse, "h-5 w-40")} />
          <div className={clsx(pulse, "h-4 w-24")} />
        </div>
      </div>
    </article>
  );
};
