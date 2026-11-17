import { Skeleton } from "@/components/ui/shadcn/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/carousel";

export const FeaturedProductsSkeleton = () => {
  return (
    <section
      id="featured-products"
      className="mx-auto mt-14 max-w-6xl px-6 pb-28 md:mt-10"
    >
      {/* Section header skeleton */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-8 w-52" />
        <Skeleton className="h-5 w-full max-w-lg" />
      </div>

      {/* Products carousel skeleton */}
      <Carousel>
        <CarouselContent className="mt-8 md:mt-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 px-10 md:basis-1/2 lg:mx-auto lg:basis-1/4"
            >
              <div className="space-y-4">
                {/* Product image */}
                <Skeleton className="aspect-square w-full" />

                {/* Product information */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
