import { Link } from "react-router-dom";
import { products } from "@/mockProducts";
import { ProductCard } from "@/components/ui/products";

export const CollectionsGrid = () => {
  return (
    <section className="py-12 pt-8">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-22 xl:grid-cols-4 xl:gap-x-20">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.slug}`}
            className="block"
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};
