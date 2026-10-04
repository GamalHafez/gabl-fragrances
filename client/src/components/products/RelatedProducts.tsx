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
import { RelatedProductsSkeleton } from "../skeleton";
import { useRelatedProducts } from "@/hooks/products";
import { getMainProductVariant } from "@shared/utils/products.js";

type RelatedProductsProps = {
  productSlug: string;
};

export const RelatedProducts = ({ productSlug }: RelatedProductsProps) => {
  const {
    data: relatedProducts,
    isPending,
    isFetching,
    isError,
  } = useRelatedProducts(productSlug);

  if (isPending || isFetching) {
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
          {relatedProducts.map((p) => {
            const mainVariant = getMainProductVariant(p.variants);

            return (
              <CarouselItem
                key={p.id}
                className="basis-1/1 px-10 md:basis-1/2 lg:mx-auto lg:basis-1/4"
              >
                <Link to={`/products/${p.slug}`} className="block">
                  <ProductCard
                    product={{
                      id: p.id,
                      slug: p.slug,
                      name: p.name,
                      gender: p.gender,
                      images: p.images.map((img) => ({
                        url: img.url,
                        description: img.description ?? null,
                      })),
                      variant: mainVariant
                        ? {
                            id: mainVariant.id,
                            price: mainVariant.price,
                            sizeML: mainVariant.sizeML,
                            stock: mainVariant.stock,
                          }
                        : null,
                    }}
                  />
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
