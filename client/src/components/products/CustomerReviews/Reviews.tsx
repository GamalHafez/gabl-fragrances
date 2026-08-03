import { Rating } from "@/components/ui/products";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import type { Review } from "./mockReviews";

type ReviewsProps = {
  reviews: Review[];
};

export const Reviews = ({ reviews }: ReviewsProps) => {
  const { isDark } = useTheme();

  if (reviews.length === 0) {
    return (
      <div
        className={clsx(
          "rounded-2xl border border-dashed py-10 text-center",
          isDark
            ? "border-zinc-700 bg-zinc-900/40 text-zinc-400"
            : "border-zinc-300 bg-zinc-50 text-zinc-500",
        )}
      >
        No reviews match this filter.
      </div>
    );
  }

  return (
    <article className="space-y-5 lg:px-20">
      {reviews.map((review) => {
        const { id, userName, rating, comment, createdAt } = review;

        return (
          <div
            key={id}
            dir="rtl"
            className={clsx(
              "font-rubik rounded-2xl border p-6 transition-all duration-300",
              isDark
                ? "border-zinc-800 bg-zinc-900/60 hover:border-zinc-700"
                : "border-zinc-200 bg-white hover:shadow-md",
            )}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3
                  className={clsx(
                    "text-lg font-semibold",
                    isDark ? "text-zinc-100" : "text-zinc-900",
                  )}
                >
                  {userName}
                </h3>

                <p
                  className={clsx(
                    "text-sm",
                    isDark ? "text-zinc-500" : "text-zinc-500",
                  )}
                >
                  {createdAt}
                </p>
              </div>

              <Rating rating={rating} />
            </div>

            <p
              className={clsx(
                "leading-8",
                isDark ? "text-zinc-300" : "text-zinc-700",
              )}
            >
              {comment}
            </p>
          </div>
        );
      })}
    </article>
  );
};
