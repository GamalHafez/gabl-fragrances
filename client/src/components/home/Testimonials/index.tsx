import { ReviewCard } from "./ReviewCard";
import { testimonials } from "./testimonials";
import { Marquee } from "@/components/ui/marquee";
import { Eyebrow, SectionHeading } from "@/components/ui/home";

export const Testimonials = () => {
  return (
    <>
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow eyebrow="Reviews" />
        <SectionHeading title="What Our Customers Say" />
      </div>

      <Marquee pauseOnHover className="mb-10 [--duration:25s] md:mb-3">
        {testimonials.map((testimonial) => (
          <ReviewCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Marquee>
    </>
  );
};
