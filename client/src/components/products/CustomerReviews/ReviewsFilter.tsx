import { Rating } from "@/components/ui/products";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { ListFilter } from "lucide-react";

type ReviewsFilterProps = {
  value: number | "all";
  onChange: (value: number | "all") => void;
};

export const ReviewsFilter = ({ value, onChange }: ReviewsFilterProps) => {
  const { isDark } = useTheme();

  const buttonClass = (rating: number | "all"): string =>
    clsx(
      "flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-all duration-300 backdrop-blur-md",

      value === rating
        ? "scale-105 -translate-y-0.5"
        : "hover:-translate-y-0.5",

      value === rating
        ? isDark
          ? "border-amber-400 bg-gradient-to-br from-zinc-900 to-zinc-600 text-zinc-200 shadow-xl shadow-amber-500/10"
          : "border-amber-300 bg-gradient-to-br from-amber-50 shadow-lg shadow-amber-200/60 text-amber-900 to-orange-50"
        : isDark
          ? "border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800"
          : "border-zinc-200 bg-white/90 text-zinc-700 hover:border-amber-200 hover:bg-amber-50/60 hover:text-amber-900",
    );

  return (
    <div>
      <p
        className={clsx(
          "mb-3 text-sm font-semibold tracking-wider uppercase",
          isDark ? "text-zinc-400" : "text-zinc-500",
        )}
      >
        Filter by Rating
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          key={"all"}
          onClick={() => onChange("all")}
          className={buttonClass("all")}
        >
          <ListFilter className="h-4 w-4" />
          All
        </button>
        {[5, 4, 3, 2, 1].map((rating) => {
          return (
            <button
              key={rating}
              onClick={() => onChange(rating)}
              className={buttonClass(rating)}
            >
              <Rating rating={rating} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
