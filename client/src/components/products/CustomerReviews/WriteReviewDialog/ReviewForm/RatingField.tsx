import clsx from "clsx";
import { Star } from "lucide-react";
import { useTheme } from "@/context/useTheme";

type RatingFieldProps = {
  value: number;
  onChange: (rating: number) => void;
};

const ratingLabels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

export const RatingField = ({ value, onChange }: RatingFieldProps) => {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col items-center gap-1">
      {value > 0 && (
        <p
          className={clsx(
            "ml-2 text-lg font-bold",
            isDark ? "text-zinc-300" : "text-zinc-700",
          )}
        >
          {ratingLabels[value]}
        </p>
      )}

      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }, (_, index) => {
          const rating = index + 1;

          return (
            <button
              key={rating}
              type="button"
              onClick={() => onChange(rating)}
              className="cursor-pointer rounded-md p-1 transition-transform duration-200 hover:scale-110 focus:outline-none"
            >
              <Star
                className={clsx(
                  "h-8 w-8 transition-colors duration-200",
                  rating <= value
                    ? "fill-amber-400 text-amber-400"
                    : isDark
                      ? "text-zinc-600"
                      : "text-zinc-300",
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
