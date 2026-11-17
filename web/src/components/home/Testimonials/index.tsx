import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { ReviewCard } from "./ReviewCard";
import { Marquee } from "@/components/ui/shadcn/marquee";
import { Eyebrow, SectionHeading } from "@/components/ui/home";
import { useApprovedReviews } from "@/hooks/reviews";
import { useTheme } from "@/context/theme/useTheme";

const TESTIMONIALS_LIMIT = 6;

export const Testimonials = () => {
  const { isDark } = useTheme();
  const [reverse, setReverse] = useState(false);
  const {
    data: testimonials,
    isPending,
    isError,
  } = useApprovedReviews(TESTIMONIALS_LIMIT);

  if (isPending || isError || !testimonials?.length) {
    return null;
  }

  const controlClass = (active: boolean) =>
    clsx(
      "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border transition-colors",
      active
        ? isDark
          ? "border-brand-300/30 bg-brand-300/10 text-brand-200"
          : "border-brand-300/40 bg-brand-50 text-brand-500"
        : isDark
          ? "border-white/10 text-zinc-400 hover:bg-white/5"
          : "border-zinc-200 text-zinc-500 hover:bg-zinc-100",
    );

  return (
    <>
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow eyebrow="Reviews" />
        <SectionHeading title="What Our Customers Say" />
      </div>

      <Marquee
        pauseOnHover
        reverse={reverse}
        className="mt-10 mb-4 [--duration:10s]"
      >
        {testimonials.map((testimonial) => (
          <ReviewCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Marquee>

      <div className="flex justify-center gap-3 md:mb-3">
        <button
          type="button"
          aria-label="Move reviews left"
          aria-pressed={!reverse}
          onClick={() => setReverse(false)}
          className={controlClass(!reverse)}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Move reviews right"
          aria-pressed={reverse}
          onClick={() => setReverse(true)}
          className={controlClass(reverse)}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </>
  );
};
