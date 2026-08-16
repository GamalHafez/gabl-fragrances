import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/carousel";
import { ProductCard } from "../collections";
import { MainHeading } from "@/components/ui/common";
import { Link } from "react-router-dom";
import type { Product } from "@shared/types/product";
import { RelatedProductsSkeleton } from "../skeleton";

type RelatedProductsProps = {
  relatedProducts: Product[];
  isLoading: boolean;
  isError: boolean;
};

export const RelatedProducts = ({
  relatedProducts,
  isLoading,
  isError,
}: RelatedProductsProps) => {
  if (isLoading) {
    return <RelatedProductsSkeleton />;
  }

  if (isError || !relatedProducts?.length) {
    return null;
  }

  return (
    <section
      id="related-products"
      className="mt-20 mb-18 flex flex-col lg:mt-30"
    >
      <MainHeading title="Related Fragrances" className="md:self-start" />

      <Carousel>
        <CarouselContent className="mt-8 md:mt-6">
          {relatedProducts.map((p) => (
            <CarouselItem
              key={p.id}
              className="basis-1/1 px-10 md:basis-1/2 lg:mx-auto lg:basis-1/4"
            >
              <Link to={`/products/${p.slug}`} className="block">
                <ProductCard product={p} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
