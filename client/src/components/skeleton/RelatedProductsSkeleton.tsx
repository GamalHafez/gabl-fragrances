import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";
import { MainHeading } from "@/components/ui/common";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

export const RelatedProductsSkeleton = () => {
  return (
    <section
      id="related-products"
      className="mt-20 mb-18 flex flex-col lg:mt-30"
    >
      <MainHeading title="Related Fragrances" className="md:self-start" />

      <Carousel>
        <CarouselContent className="mt-8 md:mt-6">
          {[1, 2, 3, 4].map((item) => (
            <CarouselItem
              key={item}
              className="basis-1/1 px-10 md:basis-1/2 lg:mx-auto lg:basis-1/4"
            >
              <ProductCardSkeleton />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
