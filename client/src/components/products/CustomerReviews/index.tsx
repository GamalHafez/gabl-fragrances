import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { Rating } from "@/components/ui/products";
import type { Product } from "@/mockProducts";

type CustomerReviewsProps = {
  product: Product;
};

export const CustomerReviews = ({ product }: CustomerReviewsProps) => {
  const { isDark } = useTheme();

  return (
    <section id="customer-reviews" className="mt-20 pl-4 md:mt-10 md:pl-0">
      <div className="mx-auto max-w-3xl">
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

        {/* Filters */}

        {/* Write a review */}
      </div>
    </section>
  );
};
