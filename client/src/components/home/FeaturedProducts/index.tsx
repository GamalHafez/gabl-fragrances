import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/carousel";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/home/SectionHeader";
import { useFeaturedProducts } from "@/hooks/products";
import { RelatedProductsSkeleton } from "@/components/skeleton";
import { ProductCard } from "@/components/collections";

const FeaturedProductsHeader = {
  eyebrow: "Shop Now",
  title: "Featured Products",
  description: "",
};

const FeaturedProducts = () => {
  const {
    data: featuredProducts,
    isPending,
    isFetching,
    isError,
  } = useFeaturedProducts(8);

  if (isPending || isFetching) {
    return <RelatedProductsSkeleton />;
  }

  if (isError || !featuredProducts?.length) {
    return null;
  }

  return (
    <section
      id="featured-products"
      className="mx-auto mt-14 max-w-6xl px-6 pb-28 md:mt-10"
    >
      <SectionHeader content={FeaturedProductsHeader} />

      <Carousel>
        <CarouselContent className="mt-8 md:mt-6">
          {featuredProducts.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/1 px-10 md:basis-1/2 lg:mx-auto lg:basis-1/4"
            >
              <Link to={`/products/${product.slug}`} className="block">
                <ProductCard
                  product={{
                    id: product.id,
                    slug: product.slug,
                    name: product.name,
                    gender: product.gender,
                    images: product.images,
                    variant: product.variant,
                  }}
                />
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

export default FeaturedProducts;
