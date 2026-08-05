import { products, type Product } from "@/mockProducts";
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

type RelatedProductsProps = {
  product: Product;
};

export const RelatedProducts = ({ product }: RelatedProductsProps) => {
  const relatedProducts = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 8);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-24 mb-12">
      <MainHeading title="Related Fragrances" />

      <Carousel>
        <CarouselContent className="mt-8 md:mt-0">
          {relatedProducts.map((p) => (
            <CarouselItem
              key={p.id}
              className="basis-1/1 px-10 md:basis-1/2 lg:basis-1/4"
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
