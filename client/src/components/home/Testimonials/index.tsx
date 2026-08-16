import { ReviewCard } from "./ReviewCard";
import { Marquee } from "@/components/ui/shadcn/marquee";
import { Eyebrow, SectionHeading } from "@/components/ui/home";
import { useApprovedReviews } from "@/hooks/reviews";

const TESTIMONIALS_LIMIT = 6;

export const Testimonials = () => {
  const {
    data: testimonials,
    isPending,
    isError,
  } = useApprovedReviews(TESTIMONIALS_LIMIT);

  if (isPending || isError || !testimonials?.length) {
    return null;
  }

  return (
    <>
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow eyebrow="Reviews" />
        <SectionHeading title="What Our Customers Say" />
      </div>

      <Marquee pauseOnHover className="my-10 [--duration:25s] md:mb-3">
        {testimonials?.map((testimonial) => (
          <ReviewCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Marquee>
    </>
  );
};
