import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ui/products";
import type { Product } from "@shared/types/product";
import { getMainProductVariant } from "@shared/utils/products.js";
import { SamplesCard } from "./SamplesCard";

type CollectionsGridProps = {
  products: Product[];
};

export const CollectionsGrid = ({ products }: CollectionsGridProps) => {
  return (
    <section className="py-12 pt-8">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-22 xl:grid-cols-4 xl:gap-x-20">
        <Link to="/collections/samples" className="block">
          <SamplesCard />
        </Link>

        {products?.map((product) => {
          const mainVariant = getMainProductVariant(product.variants);

          return (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              className="block"
            >
              <ProductCard
                product={{
                  id: product.id,
                  slug: product.slug,
                  name: product.name,
                  gender: product.gender,
                  images: product.images.map((img) => ({
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
          );
        })}
      </div>
    </section>
  );
};
