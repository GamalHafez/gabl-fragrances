import { useEffect, useState } from "react";
import { RightProductPreview } from "./RightProductPreview";
import type { BestSellerProduct } from "@shared/types/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/shadcn/carousel";

type CategoryShowcaseProps = {
  bestSellers?: BestSellerProduct[];
};

const CategoryShowcase = ({ bestSellers = [] }: CategoryShowcaseProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedProduct, setSelectedProduct] = useState<
    BestSellerProduct | undefined
  >(bestSellers[0]);

  // Keep selectedProduct in sync with whichever slide is active
  // (prev/next buttons, swipe, and drag all fire "select").
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const product = bestSellers[api.selectedScrollSnap()];
      if (product) setSelectedProduct(product);
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, bestSellers]);

  // When the list changes (e.g. tab switch), go back to the first product.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedProduct(bestSellers[0]);
    api?.scrollTo(0, true);
  }, [bestSellers, api]);

  if (bestSellers.length === 0 || !selectedProduct) {
    return (
      <p className="py-6 text-center text-sm text-zinc-500">
        No best sellers in this category yet.
      </p>
    );
  }

  return (
    <article className="flex flex-col items-center justify-center px-2 md:flex-row">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="mt-4 py-4 md:mt-8">
          {bestSellers.map((product) => (
            <CarouselItem key={product.id} className="flex justify-center">
              <RightProductPreview selectedProduct={product} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="md:left-8 lg:left-20" />
        <CarouselNext className="md:right-8 lg:right-20" />
      </Carousel>
    </article>
  );
};

export default CategoryShowcase;
