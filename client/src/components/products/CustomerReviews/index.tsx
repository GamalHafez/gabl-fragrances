import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { Rating } from "@/components/ui/products";
import type { Product } from "@/mockProducts";
import { ReviewsFilter } from "./ReviewsFilter";
import { useState } from "react";
import { PencilLine } from "lucide-react";

type CustomerReviewsProps = {
  product: Product;
};

export const CustomerReviews = ({ product }: CustomerReviewsProps) => {
  const { isDark } = useTheme();
  const [selectedRating, setSelectedRating] = useState<number | "all">("all");

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
        <button
          className={clsx(
            "mt-2 flex cursor-pointer items-center justify-center gap-3 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 md:mt-6 md:px-14",
            isDark
              ? "border-amber-500/60 bg-zinc-900 text-amber-300 hover:border-amber-400 hover:bg-zinc-800 hover:text-amber-200 hover:shadow-lg hover:shadow-amber-500/20"
              : "border-amber-300 bg-white text-amber-900 hover:border-amber-400 hover:bg-amber-50 hover:shadow-md hover:shadow-amber-200/40",
          )}
        >
          <PencilLine className="h-4 w-4" />
          Write a Review
        </button>
      </div>

      {/* Filters */}
      <ReviewsFilter value={selectedRating} onChange={setSelectedRating} />
    </section>
  );
};
