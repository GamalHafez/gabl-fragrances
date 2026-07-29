import { useTheme } from "@/context/useTheme";
import { ReviewCard } from "./ReviewCard";
import { testimonials } from "./testimonials";
import { Marquee } from "@/components/ui/marquee";
import clsx from "clsx";

export const Testimonials = () => {
  const { isDark } = useTheme();

  return (
    <>
      <div className="mx-auto max-w-3xl text-center">
        <h4
          className={clsx(
            "text-sm font-semibold tracking-[0.35em] uppercase",
            isDark ? "text-brand-200" : "text-brand-500",
          )}
        >
          Reviews
        </h4>

        <h2
          className={clsx(
            "mt-2 mb-8 text-xl font-bold tracking-tight md:mb-0 md:text-4xl lg:text-5xl",
            isDark ? "text-brand-50" : "text-zinc-900",
          )}
        >
          What Our Customers Say
        </h2>
      </div>

      <Marquee pauseOnHover className="mb-10 [--duration:25s] md:mb-3">
        {testimonials.map((testimonial) => (
          <ReviewCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Marquee>
    </>
  );
};
