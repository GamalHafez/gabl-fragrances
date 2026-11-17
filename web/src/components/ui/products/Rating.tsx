import { Star } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

type RatingProps = {
  rating: number;
  reviewCount?: number;
};

export const Rating = ({ rating, reviewCount }: RatingProps) => {
  const { isDark } = useTheme();

  return (
    <div className="mt-1 flex items-center gap-2">
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={clsx(
              "h-4 w-4",
              index < Math.round(rating)
                ? "fill-amber-400 text-amber-400"
                : "fill-transparent text-zinc-300 dark:text-zinc-600",
            )}
          />
        ))}
      </div>

      {typeof reviewCount === "number" && (
        <>
          <span
            className={clsx(
              "text-sm font-medium",
              isDark ? "text-zinc-300" : "text-zinc-800",
            )}
          >
            {rating.toFixed(1)}
          </span>

          <span className="text-muted-foreground text-sm">
            ({reviewCount} {reviewCount === 1 ? "Review" : "Reviews"})
          </span>
        </>
      )}
    </div>
  );
};
