import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { Rating } from "@/components/ui/products";
import { ReviewsFilter } from "./ReviewsFilter";
import { useState } from "react";
import { Reviews } from "./Reviews";
import type { Review } from "./mockReviews";
import { WriteReviewDialog } from "./WriteReviewDialog";

type CustomerReviewsProps = {
  reviews: Review[];
};

export const CustomerReviews = ({ reviews }: CustomerReviewsProps) => {
  const { isDark } = useTheme();
  const [selectedRating, setSelectedRating] = useState<number | "all">("all");

  const filteredReviews =
    selectedRating === "all"
      ? reviews
      : reviews.filter((review) => review.rating === selectedRating);

  return (
    <section
      id="customer-reviews"
      className="mt-20 flex flex-col gap-8 px-3 md:mt-10"
    >
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
        <div>
          <h2
            className={clsx(
              "text-lg font-extrabold tracking-tight lg:text-2xl",
              isDark ? "text-zinc-100" : "text-zinc-900",
            )}
          >
            Customer Reviews
          </h2>

          <Rating
            rating={4} // To be dynamic later ...
            reviewCount={2} // To be dynamic later ...
          />
        </div>

        {/* Write a review */}
        <WriteReviewDialog />
      </div>

      {/* Filters */}
      <ReviewsFilter value={selectedRating} onChange={setSelectedRating} />

      <Reviews reviews={filteredReviews} />
    </section>
  );
};
