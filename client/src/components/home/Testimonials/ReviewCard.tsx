import clsx from "clsx";
import { ExternalLink, Star } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import { Link } from "react-router-dom";
import type { ProductReview } from "@shared/types/product";

export const ReviewCard = ({ testimonial }: { testimonial: ProductReview }) => {
  const { name, review, product, rating } = testimonial;
  const { isDark } = useTheme();

  return (
    <figure
      dir="rtl"
      className={clsx(
        "group font-rubik ml-3 flex h-full w-72 flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1",
        isDark
          ? "border-white/10 bg-white/5 hover:bg-white/8"
          : "hover:border-brand-300 border-black/10 bg-white hover:shadow-lg",
      )}
    >
      {/* Rating */}
      <div className="mb-4 flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={clsx(
              isDark
                ? "fill-brand-200 text-brand-200"
                : "fill-brand-400 text-brand-400",
            )}
          />
        ))}
      </div>

      {/* Review */}
      <blockquote
        className={clsx(
          "line-clamp-6 flex-1 text-right text-sm leading-7",
          isDark ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        “{review}”
      </blockquote>

      {/* Footer */}
      <figcaption className="mt-6 border-t border-inherit pt-4">
        <p
          className={clsx(
            "font-semibold",
            isDark ? "text-zinc-300" : "text-zinc-900",
          )}
        >
          {name}
        </p>

        <p className="mt-4 flex flex-row-reverse items-center justify-center gap-2 text-sm">
          <span className={clsx(isDark ? "text-zinc-400" : "text-zinc-500")}>
            Purchased
          </span>

          <Link
            to={`/products/${product?.slug}`} // Replace with the actual product slug later
            className={clsx(
              "inline-flex items-center gap-1 font-medium transition-colors",
              isDark
                ? "text-brand-200 hover:text-brand-300"
                : "text-brand-500 hover:text-brand-400",
            )}
          >
            <ExternalLink size={14} strokeWidth={2} />
            {product?.name}
          </Link>
        </p>
      </figcaption>
    </figure>
  );
};
